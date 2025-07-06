import BookLandingPage from "@/components/Pages/BookLandingPage";
import BooksFAQs from "@/components/Pages/BooksFAQs";
import CurrentAffair from "@/components/Pages/CurrentAffair";
import FormatComparison from "@/components/Pages/FormatComparison";
import { Box } from "@mui/material";

export default function Books ()
{
    return <Box sx={ { width: "100%", overflowX: "hidden" } }>
        <BookLandingPage />
        <CurrentAffair />
        <FormatComparison />
        <BooksFAQs />
    </Box>
}