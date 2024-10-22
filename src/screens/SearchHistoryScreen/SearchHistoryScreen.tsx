import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { Container, Paper, Typography } from '@mui/material'
import { SectionTitle } from '../../components/SectionTitle/SectionTitle'
import { SearchHistoryTable } from './SearchHistoryTable/SearchHistoryTable'
import { SearchLog } from '../../store/slices/searchHistorySlice/searchHistorySlice'
import { Link } from 'react-router-dom'
import { APP_ROUTES } from '../../routes/AppRoutes'

export const SearchHistoryScreen = () => {
    const limit = Number(import.meta.env.VITE_APP_RESULTS_PER_PAGE)
    const { searchArray } = useSelector((st: RootState) => st.searchHistory)

    const [elements, setElements] = useState<SearchLog[]>()
    const [currentPage, setCurrentPage] = useState(1)


    const handleSearch = async (_: any, page: number = 1) => {
        const currentOffset = (page - 1) * limit;
        setCurrentPage(page)
        setElements(searchArray.slice(currentOffset, limit))
    }

    const handleChangePage = async (page: number) => {
        await handleSearch(page)
    }

    useEffect(() => {
        handleSearch(null, 1)
    }, [searchArray])

    return (
        <Container className="fade-in" sx={{ width: "100%" }}>
            <SectionTitle
                title="Historial de busquedas"
                description="Explora el registro de tus consultas pasadas"
            />

            {
                elements && (elements.length > 0 ?
                    <SearchHistoryTable
                        elements={elements}
                        totalCount={searchArray.length}
                        changePage={handleChangePage}
                        page={currentPage}
                    />
                    :

                    <Typography variant='body1'>
                        No hay busquedas realizadas que mostrar. <Link to={APP_ROUTES.METRICS}>Realiza una busqueda</Link>
                    </Typography>
                )
            }
        </Container>
    )
}
