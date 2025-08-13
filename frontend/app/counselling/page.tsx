import { Box } from "@mui/material";
import dynamic from "next/dynamic";

const CounsellingLandingPage = dynamic( () => import( '@/components/Pages/CounsellingLandingPage' ) )

export default function Counselling ()
{
    return <Box minWidth="100%" padding={ 2 } minHeight="fit-content">
        <CounsellingLandingPage />
    </Box>
}