import BookLandingPage from "@/components/Pages/BookLandingPage";
import BooksFAQs from "@/components/Pages/BooksFAQs";
import CurrentAffair from "@/components/Pages/CurrentAffair";
import FormatComparison from "@/components/Pages/FormatComparison";
import Scroller from "@/components/Pages/Scroller";
import { ScrollItems2 } from "@/lib/constant";
import { Box } from "@mui/material";

export default function Books ()
{
    return <Box sx={ { width: "100%", overflowX: "hidden" } }>
        <BookLandingPage />
        <Scroller list={ ScrollItems2 } />
        <CurrentAffair />
        {/* <FormatComparison /> */ }
        <BooksFAQs />
    </Box>
}