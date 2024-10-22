import { gql } from "@apollo/client";

export type BLOCK_DATE_DATA_TYPE = {
  reward: string,
  Blocks: string,
  date: { date: string }
}

export type ALL_REWARDS_BETWEEN_DATES_TYPES = {
  ethereum: {
    arrDates: BLOCK_DATE_DATA_TYPE[],
    general: {
      totalReward: number,
      totalResults: number,
      totalBlocksCount: number,
    }[]
  }
}

export const ALL_REWARDS_BETWEEN_DATES = gql`
query getAllRewardsBetweenDates($after: ISO8601DateTime!, $before: ISO8601DateTime!, $limit: Int!, $offset: Int!) {
  ethereum {
    arrDates: blocks(
      date: {after: $after, before: $before}
      options: {limit: $limit, offset: $offset}
    ) {
      reward
      Blocks: count
      date {
        date
      }
    }
    general: blocks(date: {after: $after, before: $before}, options: {}) {
      totalReward: reward
      totalResults: count(date: {after: $after, before: $before}, uniq: dates)
      totalBlocksCount: count
    }
  }
}
`