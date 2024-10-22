import { Typography } from '@mui/material'
import React from 'react'

interface Props {
    title: string;
    description?: string;
}

export const SectionTitle = ({
    title,
    description,
}: Props) => {
    return (
        <>
            <Typography variant="h3" component="h1" sx={{ fontWeight: "bold" }}>{title}</Typography>
            <Typography variant="body1" component="p" sx={{ mb: "2rem" }}>{description}</Typography>
        </>
    )
}
