"use client"

import colors from "@/lib/color";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { ScaleButton } from "../lowLevelComponent/Animation";
import { useState } from "react";
import { currentAffairsData } from "@/lib/constant";

export default function CurrentAffair ()
{
    const [ selectedBook, setSelectedBook ] = useState( "1" )

    const renderSelectedBook = () =>
    {
        const selectedBookData = currentAffairsData.find( ( item ) => item.key == selectedBook )

        return <Grid container paddingTop={ 5 } spacing={ 2 } >
            <Grid size={ { xs: 12, md: 4 } } justifyItems={ { xs: 'center', md: 'start' } } order={ { md: 1 } }>
                <Image src={ selectedBookData?.image ?? '' } alt={ selectedBookData?.title ?? '' } width={ 300 } height={ 100 } />
            </Grid>
            <Grid minHeight="fit-content" size={ { xs: 12, md: 8 } } order={ { md: 2 } }>
                <Stack rowGap={ 2 } >
                    <Typography fontSize={ 25 } fontWeight={ 600 }>
                        { selectedBookData?.title }
                    </Typography>
                    <Typography textAlign="justify" >
                        { selectedBookData?.description }
                    </Typography>
                    <Box display="flex" width={ { xs: '80%', md: '60%' } } gap={ 2 } >
                        <ScaleButton text="Buy Now" justify="start" bgColor="bg-white" textColor="bg-black" />
                    </Box>
                </Stack>
            </Grid>
        </Grid>
    }

    const renderRemaningBooks = () =>
    {
        const remaningBook = currentAffairsData.filter( ( item ) => item.key != selectedBook )

        return <Grid size={ { sm: 12, xs: 12, md: 12 } } container spacing={ 5 }>
            { remaningBook.map( ( item ) => (
                <Grid onClick={ () => onClickBook( item.key ) } size={ 6 } container key={ item.key } >
                    <Box className='cursor-pointer'
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        width="100%"
                        height={ { xs: 120, sm: 180 } }
                        bgcolor={ colors.FrenchVanillaSorbet } >
                        <Image src={ item.image } alt={ item.title }
                            style={ {
                                maxWidth: '100%',
                                height: 'auto'
                            } }
                            width={ 100 } height={ 80 } />
                    </Box>
                </Grid>
            ) ) }
        </Grid>
    }

    const onClickBook = ( id: string ) =>
    {
        setSelectedBook( id )
    }

    return <Box padding={ 5 } width="100%" bgcolor={ colors.Pearl }  >
        <Grid container spacing={ 2 }>
            <Grid size={ { xs: 12, md: 8 } }  >
                <Typography fontSize={ { xs: 25, md: 35 } } textAlign={ { xs: 'center', md: 'start' } } fontWeight={ 700 }>
                    Current Affairs for MPSC
                </Typography>
                { renderSelectedBook() }
            </Grid>
            <Grid size={ { xs: 12, md: 4 } } paddingTop={ 10 }>
                <Box width="100%" padding={ 1 } height={ 400 } sx={ {
                    overflowY: 'auto',
                    overflowX: 'hidden',
                    '&::-webkit-scrollbar': {
                        width: '6px',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        backgroundColor: '#FFD700',
                        borderRadius: '3px',
                    },
                    '&::-webkit-scrollbar-track': {
                        backgroundColor: 'transparent',
                    }
                } }>
                    <Grid container spacing={ 5 }>
                        { renderRemaningBooks() }
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    </Box >
}