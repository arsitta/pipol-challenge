import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { TablePagination } from '../../../../components/TablePagination/TablePagination';
import { BLOCK_DATE_DATA_TYPE } from '../../../../graphQL/querys/blocks/ALL_REWARDS_BETWEEN_DATES';
import dayjs from 'dayjs';

interface Props {
    elements: BLOCK_DATE_DATA_TYPE[],
    page: number;
    totalCount: number;
    changePage: (page: number) => Promise<void>;
    loading?: boolean;
}

export const MetricsTable = ({
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
                            <TableCell>Date</TableCell>
                            <TableCell>Blocks</TableCell>
                            <TableCell>Reward</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {elements.map((ctElement) => (
                            <TableRow
                                key={ctElement.date.date}
                            >
                                <TableCell component="th" scope="row">
                                    {dayjs(ctElement.date.date).format("DD/MM/YYYY")}
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

            <TablePagination
                currentPage={page}
                totalCount={totalCount}
                handleChangePage={changePage}
                disabled={loading}
            />
        </Box>
    )
}
