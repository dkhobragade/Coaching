"use client"

import colors from "@/lib/color";
import { Box, Stack, Typography } from "@mui/material";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styled from "@emotion/styled";
import Image from "next/image";

const StyledTableCell = styled( TableCell )( ( { theme } ) => ( {
    [ `&.${ tableCellClasses.head }` ]: {
        backgroundColor: 'red',
        color: 'white',
    },
    [ `&.${ tableCellClasses.body }` ]: {
        fontSize: 14,
    },
} ) );

const StyledTableRow = styled( TableRow )( ( { theme } ) => ( {
    '&:nth-of-type(odd)': {
        backgroundColor: 'yellow',
    },
    '&:last-child td, &:last-child th': {
        border: 0,
    },
} ) );

function createData (
    name: string,
    calories: string,
    fat: string,
)
{
    return { name, calories, fat };
}

const rows = [
    createData( 'Study Retention', 'Lower', ' Higher' ),
    createData( 'Eye Comfort', 'Screen strain', ' Comfortable for long hours' ),
    createData( 'Annotation', 'Digital tools, less intuitive', ' Easy manual notes, highlights' ),
    createData( 'Reading Flow', 'May face distractions', ' Distraction-free' ),
    createData( 'Durability', 'File loss possible', ' Long-lasting' ),
    createData( 'Best Use Case', 'On-the-go reading', ' Focused revision' ),
];

export default function FormatComparison ()
{
    return <Box padding={ 5 } display="flex"
        alignItems="center"
        justifyContent="center" bgcolor={ colors.CrystalCut } height="100vh"  >
        <Image src='/image.png' alt="Comparsion" width={ 600 } height={ 500 } />
    </Box>
}