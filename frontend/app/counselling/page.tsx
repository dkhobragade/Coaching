import { Box } from "@mui/material";
import dynamic from "next/dynamic";

const CounsellingLandingPage = dynamic( () => import( '@/components/Pages/CounsellingLandingPage' ) )
const CounsellingHeroSection = dynamic( () => import( '@/components/Pages/CounsellingHeroSection' ) )

export default function Counselling ()
{
    return <Box minWidth="100%" padding={ 2 } minHeight="fit-content">
        <CounsellingLandingPage />
        <CounsellingHeroSection />
    </Box>
}