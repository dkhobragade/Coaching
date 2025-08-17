import { Box, Grid, Typography } from "@mui/material";
import colors from "@/lib/color";

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
        <Grid container>
            <Grid size={ 4 } >
                <Box display="flex" flexDirection="column" gap={ 1 } >
                    <Box width={ 400 } borderRadius={ 5 } padding={ 2 } height={ 300 } bgcolor={ colors.BlueAstro } >1</Box>
                    <Box width={ 400 } borderRadius={ 5 } padding={ 2 } height={ 300 } bgcolor={ colors.BlueAstro } >2</Box>
                </Box>
            </Grid>
            <Grid size={ 4 } >
                <Box display="flex" flexDirection="column" gap={ 1 } >
                    <Box width={ 400 } borderRadius={ 5 } padding={ 2 } height={ 605 } bgcolor={ colors.BlueAstro } >1</Box>
                </Box>
            </Grid>
            <Grid size={ 4 } >
                <Box display="flex" flexDirection="column" gap={ 1 } >
                    <Box width={ 400 } borderRadius={ 5 } padding={ 2 } height={ 300 } bgcolor={ colors.BlueAstro } >1</Box>
                    <Box width={ 400 } borderRadius={ 5 } padding={ 2 } height={ 300 } bgcolor={ colors.BlueAstro } >2</Box>
                </Box>
            </Grid>
        </Grid>
    </Box>
}