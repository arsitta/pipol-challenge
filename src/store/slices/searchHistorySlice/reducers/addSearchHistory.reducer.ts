import { PayloadAction } from "@reduxjs/toolkit";
import { RawSearch, searchHistoryState } from "../searchHistorySlice";
import dayjs from 'dayjs';


export const addSearchHistoryReducer = (state: searchHistoryState, action: PayloadAction<RawSearch>) => {
    const newSearchLog = { ...action.payload, date: dayjs(new Date()).format("DD/MM/YYYY") }

    return {
        ...state,
        searchArray: [...state.searchArray, newSearchLog],
    }
}