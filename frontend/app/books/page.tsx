import BookLandingPage from "@/components/Pages/BookLandingPage";
import CurrentAffair from "@/components/Pages/CurrentAffair";
import FormatComparison from "@/components/Pages/FormatComparison";
import { Box } from "@mui/material";

export default function Books ()
{
    return <Box>
        <BookLandingPage />
        <CurrentAffair />
        <FormatComparison />
    </Box>
}