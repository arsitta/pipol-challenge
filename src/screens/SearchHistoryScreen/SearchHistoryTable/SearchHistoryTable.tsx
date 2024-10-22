import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import dayjs from 'dayjs';
import { TablePagination } from '../../../components/TablePagination/TablePagination';
import { SearchLog } from '../../../store/slices/searchHistorySlice/searchHistorySlice';

interface Props {
    elements: SearchLog[],
    page: number;
    totalCount: number;
    changePage: (page: number) => Promise<void>;
    loading?: boolean;
}

export const SearchHistoryTable = ({
    elements,
    page,
    totalCount,
    changePage,
    loading,
}: Props) => {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Fecha realizada</TableCell>
                            <TableCell>Periodo desde</TableCell>
                            <TableCell>Periodo hasta</TableCell>
                            <TableCell>Blocks</TableCell>
                            <TableCell>Reward</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {elements.map((ctElement) => (
                            <TableRow
                                key={ctElement.date}
                            >
                                <TableCell component="th" scope="row">
                                    {ctElement.date}
                                </TableCell>

                                <TableCell component="th" scope="row">
                                    {dayjs(ctElement.variables.after).format("DD/MM/YYYY")}
                                </TableCell>

                                <TableCell component="th" scope="row">
                                    {dayjs(ctElement.variables.before).format("DD/MM/YYYY")}
                                </TableCell>

                                <TableCell component="th" scope="row">
                                    {ctElement.data.ethereum.general[0].totalResults}
                                </TableCell>

                                <TableCell component="th" scope="row">
                                    {ctElement.data.ethereum.general[0].totalReward}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <TablePagination
                currentPage={page}
                totalCount={totalCount}
                handleChangePage={changePage}
                disabled={loading}
            />
        </Box>
    )
}
