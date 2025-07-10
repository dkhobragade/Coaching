"use client"

import { ScrollerItemsProps } from "@/lib/props";
import { Box, Typography } from "@mui/material";

export default function Scroller ( props: ScrollerItemsProps )
{
    const ScrollItems = props.list

    return (
        <Box bgcolor="black" alignContent="center" width="100%" whiteSpace="nowrap" overflow="hidden" position="relative" height={ 100 }>
            <Box
                sx={ {
                    display: 'inline-block',
                    animation: 'scroll 25s linear infinite',
                } }
            >
                { [ ...ScrollItems, ...ScrollItems ].map( ( skill, i ) => (
                    <Typography key={ i } color="white" component="span" sx={ { mx: 4, fontWeight: 600 } }>
                        { skill }
                    </Typography>
                ) ) }
            </Box>

            <style jsx global>{ `
    @keyframes scroll {
      0% { transform: translateX(0%); }
      100% { transform: translateX(-50%); }
    }
  `}</style>
        </Box>
    )
}