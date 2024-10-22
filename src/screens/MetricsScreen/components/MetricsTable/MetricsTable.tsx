import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import { BLOCK_DATE_DATA_TYPE } from '../../../../graphQL/querys/blocks/ALL_REWARDS_BETWEEN_DATES';

interface Props {
    elements: BLOCK_DATE_DATA_TYPE[],
}

export const MetricsTable = ({
    elements
}: Props) => {
    return (
        <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell>Blocks</TableCell>
                        <TableCell>Reward</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {elements.map((ctElement) => (
                        <TableRow
                            key={ctElement.date.date}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {ctElement.date.date}
                            </TableCell>

                            <TableCell component="th" scope="row">
                                {ctElement.Blocks}
                            </TableCell>

                            <TableCell component="th" scope="row">
                                {ctElement.reward}
                            </TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
