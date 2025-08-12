import { Box } from "@mui/material";
import dynamic from "next/dynamic";

const TestLandingPage = dynamic( () => import( '@/components/Pages/TestLandingPage' ) )
const TestPlan = dynamic( () => import( '@/components/Pages/TestPlan' ) )

export default function Test ()
{
    return <Box sx={ { width: "100%", overflowX: "hidden" } } >
        <TestLandingPage />
        <TestPlan />
    </Box >
}