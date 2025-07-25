"use client"

import { useRef } from "react";
import { ScrollItems2 } from "@/lib/constant";
import { Box } from "@mui/material";
import dynamic from "next/dynamic";


const Scroller = dynamic( () => import( "@/components/Pages/Scroller" ) );
const BookLandingPage = dynamic( () => import( "@/components/Pages/BookLandingPage" ) );
const CurrentAffair = dynamic( () => import( "@/components/Pages/CurrentAffair" ) );
const BooksFAQs = dynamic( () => import( "@/components/Pages/BooksFAQs" ) );
const MustToHaveBooks = dynamic( () => import( "@/components/Pages/MustToHaveBooks" ) );
const AllBooks = dynamic( () => import( "@/components/Pages/AllBooks" ) );


export default function Books ()
{
    const currentAffairRef = useRef<HTMLDivElement | null>( null )

    return <Box sx={ { width: "100%", overflowX: "hidden" } }>
        <BookLandingPage scrollToCurrentAffair={ () =>
            currentAffairRef.current?.scrollIntoView( { behavior: "smooth" } )
        } />
        <Scroller list={ ScrollItems2 } />
        <MustToHaveBooks />
        <Box ref={ currentAffairRef }>
            <AllBooks />
        </Box>
        <CurrentAffair />
        {/* <FormatComparison /> */ }
        <BooksFAQs />
    </Box>
}