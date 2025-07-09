import { Box, Typography } from "@mui/material";
import { ScaleButton } from "../lowLevelComponent/Animation";

export default function CallToAction ()
{
    return (
        <Box
            width="100%"
            minHeight={ 350 }
            display="flex"
            justifyContent="center"
            alignItems="center"
            bgcolor="#4DA8DA"
            px={ 2 }
        >
            <Box textAlign="center" maxWidth={ 800 }>
                <Typography fontSize={ { xs: 32, md: 50 } } color="#FFD66B" fontWeight={ 800 } mb={ 2 }>
                    Your MPSC Success Story Starts Here
                </Typography>

                <Typography color="white" mb={ 4 }>
                    We’re here to support every step of your journey—from the first lecture to the final exam.
                    Take the first step toward your dream career today.
                </Typography>
                <ScaleButton text="Begin Your Journey" />
            </Box>
        </Box>
    );
}
