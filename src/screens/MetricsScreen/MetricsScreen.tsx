import { useLazyQuery } from '@apollo/client'
import { Container } from '@mui/material'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { RewardsBlocksMetrics } from '../../components/charts/RewardsBlocksMetrics/RewardsBlocksMetrics'
import { SectionTitle } from '../../components/SectionTitle/SectionTitle'
import { ALL_REWARDS_BETWEEN_DATES, ALL_REWARDS_BETWEEN_DATES_TYPES, ALL_REWARDS_BETWEEN_DATES_VARIABLES_TYPES } from '../../graphQL/querys/blocks/ALL_REWARDS_BETWEEN_DATES'
import { addSearch } from '../../store/slices/searchHistorySlice/searchHistorySlice'
import { GeneralDataCard } from './components/GeneralDataCard/GeneralDataCard'
import { MetricsFilters, MetricsFiltersValues } from './components/MetricsFilters/MetricsFilters'
import { MetricsTable } from './components/MetricsTable/MetricsTable'

export const MetricsScreen = () => {
    const limit = Number(import.meta.env.VITE_APP_RESULTS_PER_PAGE)
    const [currentPage, setCurrentPage] = useState(1)
    const [getRewardsMetrics, { data, loading, error, variables }] = useLazyQuery<ALL_REWARDS_BETWEEN_DATES_TYPES, ALL_REWARDS_BETWEEN_DATES_VARIABLES_TYPES>(ALL_REWARDS_BETWEEN_DATES)
    const dispatch = useDispatch()

    const handleSearch = async (values: MetricsFiltersValues, page: number = 1) => {
        const currentOffset = (page - 1) * limit;
        const variables = {
            ...values,
            limit,
            offset: currentOffset,
        }

        const { data, observable } = await getRewardsMetrics({ variables })

        dispatch(addSearch({
            variables,
            data,
            queryName: observable.queryName,
        }))
        setCurrentPage(page)
    }

    const handleChangePage = async (page: number) => {
        if (variables) await handleSearch(variables, page)
    }

    return (
        <Container className="fade-in" sx={{ width: "100%" }}>
            <SectionTitle
                title="Metricas"
                description="Analiza metricas por fecha de bloques Ethereum"
            />
            <MetricsFilters handleSearch={(vales: MetricsFiltersValues) => handleSearch(vales, 1)} loading={loading} />
            {
                data && <>

                    <RewardsBlocksMetrics elements={data.ethereum.arrDates} />

                    <GeneralDataCard
                        totalBlocksCount={data.ethereum.general[0].totalBlocksCount}
                        totalReward={data.ethereum.general[0].totalReward}
                    />
                    <MetricsTable
                        elements={data?.ethereum.arrDates}
                        totalCount={data.ethereum.general[0].totalResults}
                        changePage={handleChangePage}
                        page={currentPage}
                        loading={loading}
                    />
                </>
            }
        </Container >
    )
}

