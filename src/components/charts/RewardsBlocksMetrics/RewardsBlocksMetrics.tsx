import * as d3 from 'd3';
import { useEffect, useRef, useState } from 'react';
import { BLOCK_DATE_DATA_TYPE } from '../../../graphQL/querys/blocks/ALL_REWARDS_BETWEEN_DATES';

interface Props {
    elements: BLOCK_DATE_DATA_TYPE[];
}

export const RewardsBlocksMetrics = ({ elements }: Props) => {
    const svgRef = useRef<SVGSVGElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [tooltip, setTooltip] = useState<{ x: number; y: number; content: string } | null>(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const handleResize = () => {
            if (containerRef.current) {
                const { clientWidth, clientHeight } = containerRef.current;
                setDimensions({ width: clientWidth, height: clientHeight });
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Para inicializar las dimensiones

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (!elements || !svgRef.current) return;

        const parsedData = elements.map(d => ({
            date: new Date(d.date.date),
            blocks: +d.Blocks,
            reward: +d.reward,
        }));

        const { width, height } = dimensions;
        const margin = { top: 20, right: 50, bottom: 50, left: 50 };

        const svg = d3.select(svgRef.current)
            .attr('width', width)
            .attr('height', height);

        // Limpiar el SVG antes de redibujar
        svg.selectAll('*').remove();

        // Escalas
        const xScale = d3.scaleTime()
            .domain(d3.extent(parsedData, d => d.date) as [Date, Date])
            .range([margin.left, width - margin.right]);

        const yScale = d3.scaleLinear()
            .domain([
                d3.min(parsedData, d => Math.min(d.blocks, d.reward))! * 0.9,
                d3.max(parsedData, d => Math.max(d.blocks, d.reward))! * 1.1,
            ])
            .nice()
            .range([height - margin.bottom, margin.top]);

        // Ejes
        const xAxis = d3.axisBottom(xScale).tickFormat((domainValue) => {
            if (domainValue instanceof Date) {
                return d3.timeFormat('%d/%m/%Y')(domainValue);
            }
            return String(domainValue);
        });

        const yAxis = d3.axisLeft(yScale);

        // Renderizamos los ejes
        svg.append('g')
            .attr('class', 'x-axis')
            .attr('transform', `translate(0,${height - margin.bottom})`)
            .call(xAxis)
            .selectAll('text')
            .attr('transform', 'rotate(-45)')
            .style('text-anchor', 'end');

        svg.append('g')
            .attr('class', 'y-axis')
            .attr('transform', `translate(${margin.left},0)`)
            .call(yAxis);

        // Función para dibujar líneas
        const lineGenerator = d3.line<{ date: Date; value: number }>()
            .x(d => xScale(d.date))
            .y(d => yScale(d.value))
            .curve(d3.curveMonotoneX);

        // Dibujamos la línea de bloques (azul)
        const blocksLine = svg.append('path')
            .datum(parsedData.map(d => ({ date: d.date, value: d.blocks })))
            .attr('class', 'line-blocks')
            .attr('fill', 'none')
            .attr('stroke', 'steelblue')
            .attr('stroke-width', 2)
            .attr('d', lineGenerator)
            .on('pointerenter', () => {
                svg.selectAll('.line-rewards').attr('stroke', 'lightgray');
                setTooltip({ x: 0, y: 0, content: 'Blocks' });
            })
            .on('pointermove', (event) => {
                const [x, y] = d3.pointer(event);
                setTooltip({ x, y, content: 'Blocks' });
            })
            .on('pointerleave', () => {
                svg.selectAll('.line-rewards').attr('stroke', 'gold');
                setTooltip(null);
            });

        // Dibujamos la línea de rewards (amarillo)
        const rewardsLine = svg.append('path')
            .datum(parsedData.map(d => ({ date: d.date, value: d.reward })))
            .attr('class', 'line-rewards')
            .attr('fill', 'none')
            .attr('stroke', 'gold')
            .attr('stroke-width', 2)
            .attr('d', lineGenerator)
            .on('pointerenter', () => {
                svg.selectAll('.line-blocks').attr('stroke', 'lightgray');
                setTooltip({ x: 0, y: 0, content: 'Rewards' });
            })
            .on('pointermove', (event) => {
                const [x, y] = d3.pointer(event);
                setTooltip({ x, y, content: 'Rewards' });
            })
            .on('pointerleave', () => {
                svg.selectAll('.line-blocks').attr('stroke', 'steelblue');
                setTooltip(null);
            });

    }, [elements, dimensions]); // Asegúrate de incluir 'dimensions' en las dependencias

    return (
        <div ref={containerRef} style={{ width: '100%', height: '100%', position: 'relative' }}>
            <svg ref={svgRef} />
            {tooltip && (
                <div
                    style={{
                        position: 'absolute',
                        left: tooltip.x + 10,
                        top: tooltip.y - 30,
                        background: 'white',
                        border: '1px solid black',
                        padding: '5px',
                        borderRadius: '4px',
                        pointerEvents: 'none',
                    }}
                >
                    {tooltip.content}
                </div>
            )}
        </div>
    );
};
