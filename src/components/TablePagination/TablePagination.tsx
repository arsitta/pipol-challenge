import { Pagination } from '@mui/material';
import { useState } from 'react';

interface Props {
    resultsPerPage?: number;
    currentPage: number;
    totalCount: number;
    handleChangePage: (page: number) => Promise<void>
    disabled?: boolean;
}

export const TablePagination = ({
    resultsPerPage = Number(import.meta.env.VITE_APP_RESULTS_PER_PAGE),
    currentPage,
    totalCount,
    handleChangePage,
    disabled,
}: Props) => {

    const pageCount = Math.ceil(totalCount / resultsPerPage)

    const handleOnChange = (event: React.ChangeEvent<unknown>, page: number) => {
        handleChangePage(page)
    }

    return (
        <Pagination onChange={handleOnChange} page={currentPage} count={pageCount} disabled={disabled} sx={{ border: "none" }} />
    )
}

