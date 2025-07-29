"use client"

import { useState } from "react";
import { BounceBox } from "@/components/lowLevelComponent/Animation";
import Button from "@/components/lowLevelComponent/Button";
import colors from "@/lib/color";
import { Box, Grid, Typography } from "@mui/material";
import { testLandingPageData } from "@/lib/constant";

export default function Test ()
{
    const [ selectedBox, setSelectedBox ] = useState( "M" )

    const renderBox = ( initial: string, text: string, boxColor?: string ) =>
    {
        return <Box onClick={ () => onClickBox( initial ) } className='cursor-pointer' width={ 150 } boxShadow={ 5 } borderRadius={ 5 } minHeight={ 120 } maxHeight="fit-content" mb={ 3 } bgcolor={ boxColor ?? colors.DrWhite } >
            <Typography textAlign="end" padding={ 2 } color={ selectedBox == initial ? '#B9375D' : colors.Black } fontWeight={ 600 } fontSize={ 20 } >
                { initial }
            </Typography>
            <Typography padding={ 2 } color={ colors.BlueAstro } fontWeight={ 700 }>
                { text }
            </Typography>
        </Box>
    }

    const onClickBox = ( id: string ) =>
    {
        setSelectedBox( id )
    }

    const renderSelectedBox = () =>
    {
        const box = testLandingPageData.filter( ( item ) => item.key == selectedBox )

        return <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
        >
            <Box
                position="relative"
                width="100%"
                p={ 4 }
                bgcolor="#fff"
                borderRadius={ 2 }
                textAlign="left"
                sx={ { overflow: "hidden" } }
            >
                <Typography
                    fontSize={ { md: 150, xs: 100, sm: 100 } }
                    fontWeight={ 700 }
                    color="#DDE7F4"
                    position="absolute"
                    top={ -30 }
                    left={ 20 }
                    zIndex={ 0 }
                    sx={ { lineHeight: 1 } }
                >
                    { box[ 0 ].background }
                </Typography>

                <Box position="relative" zIndex={ 1 }>
                    <Typography
                        variant="h4"
                        fontWeight={ 700 }
                        color="#003366"
                        mb={ 1 }
                    >
                        { box[ 0 ].text }
                    </Typography>

                    <Typography
                        variant="body1"
                        color="text.secondary"
                        mb={ 3 }
                    >
                        { box[ 0 ].description }
                    </Typography>
                    <Button label={ box[ 0 ].button } color="#6A9AC4" hoverColor="#4f81ab" />
                </Box>
            </Box>
        </Box>
    }

    return <Box minHeight="100vh">
        <Grid container>
            <Grid minHeight="fit-content" size={ { sm: 12, md: 6, xs: 12 } } order={ { sm: 1, md: 1, xs: 1 } } >
                <Box sx={ { position: "relative", overflow: "hidden" } }>
                    <Box height={ { md: 600, sm: 1000, xs: 1500 } } sx={ {
                        position: "absolute",
                        top: "-10px",
                        left: "-150px",
                        width: "750px",
                        background: colors.CottonBoll,
                        borderRadius: "50% 50% 50% 50%",
                        transform: "rotate(-30deg)",
                        zIndex: -1,
                    } } />
                    <BounceBox>
                        <Box ml={ 8 } width={ 40 } height={ 40 } border={ 5 } borderRadius={ 2 } className='rotate-50' borderColor={ colors.Zinnia } />
                    </BounceBox>
                    <Box display="flex" flexDirection={ { md: 'row', sm: 'row', xs: 'column' } } gap={ 0 } >
                        <Box mt={ 1 } ml={ 10 } >
                            { renderBox( "M", "Mains Paper" ) }
                            { renderBox( "P", "Prelims Paper" ) }
                            { renderBox( "R", "Revision Sets", colors.FlorentineLapis ) }
                        </Box>
                        <Box mt={ 6 } ml={ { md: 4, xs: 10 } } >
                            { renderBox( "A", "Answer Keys", colors.DarkMidnightBlue ) }
                            { renderBox( "C", "Current Affairs", ) }
                            { renderBox( "S", "Subject-Wise Tests", colors.YrielYellow ) }
                        </Box>
                        <Box mt={ { md: 14, xs: 6 } } ml={ { md: 4, xs: 10 } }>
                            <BounceBox>
                                <Box display={ { xs: 'none', sm: 'block', md: 'block' } } ml={ 8 } width={ 40 } mb={ 5 } height={ 40 } border={ 5 } borderRadius={ 2 } className='rotate-50' borderColor={ colors.Zinnia } />
                            </BounceBox>
                            { renderBox( "T", "Test Strategy" ) }
                        </Box>
                    </Box >
                </Box>
            </Grid>
            <Grid size={ { sm: 12, md: 6, xs: 12 } } order={ { sm: 2, md: 2, xs: 2 } } >
                { renderSelectedBox() }
            </Grid>
        </Grid>
    </Box >
}