import { Box } from "@mui/material";
import dynamic from "next/dynamic";

const CounsellingLandingPage = dynamic( () => import( '@/components/Pages/CounsellingLandingPage' ) )
const CounsellingHeroSection = dynamic( () => import( '@/components/Pages/CounsellingHeroSection' ) )
const CounsellingBookingSession = dynamic( () => import( '@/components/Pages/CounsellingBookingSection' ) )

export default function Counselling ()
{
    return <Box minWidth="100%" minHeight="fit-content">
        <CounsellingLandingPage />
        <CounsellingHeroSection />
        <CounsellingBookingSession />
    </Box>
}