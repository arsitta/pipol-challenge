import { createSlice } from "@reduxjs/toolkit";
import { ALL_REWARDS_BETWEEN_DATES_TYPES, ALL_REWARDS_BETWEEN_DATES_VARIABLES_TYPES } from "../../../graphQL/querys/blocks/ALL_REWARDS_BETWEEN_DATES";
import { addSearchHistoryReducer } from "./reducers/addSearchHistory.reducer";

export interface RawSearch {
    variables: ALL_REWARDS_BETWEEN_DATES_VARIABLES_TYPES
    data: ALL_REWARDS_BETWEEN_DATES_TYPES
}

export interface SearchLog extends RawSearch {
    date: string;
}

export interface searchHistoryState {
    searchArray: SearchLog[];
}

export const initialState: searchHistoryState = {
    searchArray: []
}

export const searchHistorySlice = createSlice({
    name: 'searchHistory',
    initialState,
    reducers: {
        addSearch: addSearchHistoryReducer,
    },
})

export const { addSearch } = searchHistorySlice.actions

export default searchHistorySlice.reducer