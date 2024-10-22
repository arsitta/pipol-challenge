import { useLazyQuery, useQuery } from '@apollo/client'
import React from 'react'
import { ALL_REWARDS_BETWEEN_DATES, ALL_REWARDS_BETWEEN_DATES_TYPES } from '../../graphQL/querys/blocks/ALL_REWARDS_BETWEEN_DATES'

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
        <>
            <button onClick={() => getRewardsMetrics()}>asd</button>
            {
                loading ?
                    "CARGANDO" :
                    <div>
                        {data?.ethereum.arrDates.map(ctDate =>
                            <div key={ctDate.date.date}>{ctDate.date.date}</div>
                        )}
                    </div>
            }
        </>
    )
}

