import { ScrollItems2 } from "@/lib/constant";
import { Box } from "@mui/material";
import dynamic from "next/dynamic";


const Scroller = dynamic( () => import( "@/components/Pages/Scroller" ) );
const BookLandingPage = dynamic( () => import( "@/components/Pages/BookLandingPage" ) );
const CurrentAffair = dynamic( () => import( "@/components/Pages/CurrentAffair" ) );
const BooksFAQs = dynamic( () => import( "@/components/Pages/BooksFAQs" ) );
const MustToHaveBooks = dynamic( () => import( "@/components/Pages/MustToHaveBooks" ) );


export default function Books ()
{
    return <Box sx={ { width: "100%", overflowX: "hidden" } }>
        <BookLandingPage />
        <Scroller list={ ScrollItems2 } />
        <MustToHaveBooks />
        <CurrentAffair />
        {/* <FormatComparison /> */ }
        <BooksFAQs />
    </Box>
}