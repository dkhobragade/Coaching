import colors from "@/lib/color";
import { Box, Typography } from "@mui/material";

export default function CounsellingHeroSection ()
{
    return <Box minWidth="100%" minHeight="fit-content">
        <Box m={ 5 }>
            <Typography fontSize={ 25 } fontWeight={ 700 } textAlign="center" >
                Counselling Services
            </Typography>
            <Typography textAlign="center" fontWeight={ 600 } >
                Guiding you through every step of your MPSC journey — from preparation to final selection.
            </Typography>
        </Box>
    </Box>
}