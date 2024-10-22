import { useLazyQuery, useQuery } from '@apollo/client'
import React from 'react'
import { ALL_REWARDS_BETWEEN_DATES, ALL_REWARDS_BETWEEN_DATES_TYPES } from '../../graphQL/querys/blocks/ALL_REWARDS_BETWEEN_DATES'
import { MetricsTable } from './components/MetricsTable/MetricsTable'
import { Container } from '@mui/material'
import { MetricsFilters } from './components/MetricsFilters/MetricsFilters'

export const MetricsScreen = () => {
    const limit = import.meta.env.VITE_APP_RESULTS_PER_PAGE
    const [getRewardsMetrics, { data, loading, error }] = useLazyQuery<ALL_REWARDS_BETWEEN_DATES_TYPES>(ALL_REWARDS_BETWEEN_DATES, {
        variables: {
            after: "2024-10-19T00:00:00.000Z",
            before: "2024-10-25T00:00:00.000Z",
            limit: 2,
            offset: 0,
        }
    })


    // $after: ISO8601DateTime!, $before: ISO8601DateTime!, $limit: Int!, $offset

    return (
        <Container sx={{width: "100%" }}>
            <MetricsFilters handleSearch={getRewardsMetrics}/>
            {
                loading ?
                    "CARGANDO" :
                    <div>
                        {data && <MetricsTable elements={data?.ethereum.arrDates} />}
                    </div>
            }
        </Container>
    )
}

