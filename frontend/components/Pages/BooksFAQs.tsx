import colors from "@/lib/color";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Brightness5Icon from '@mui/icons-material/Brightness5';

export default function BooksFAQs ()
{
    return <Box padding={ 5 } bgcolor={ colors.Black } height='100vh' >
        <Box bgcolor={ colors.White } width={ 1000 } padding={ 2 } borderRight={ 5 } height={ 500 } justifyContent="center" justifyItems="center" display="flex" justifySelf="center" >
            <Grid container spacing={ 6 }>
                <Grid size={ { xs: 12, md: 6 } } order={ { xs: 1 } }>
                    <Typography fontSize={ 50 } color={ colors.RaspberryLeafGreen } fontWeight={ 800 }>
                        FAQs.
                    </Typography>
                    <Box width={ 450 } height={ 400 } >
                        <Stack spacing={ 3 }>
                            <Box width={ 450 } height={ 35 } borderRadius={ 2 } padding={ 1 } bgcolor={ colors.KissMeKate }>ldsngfsldn</Box>
                            <Box width={ 450 } height={ 35 } borderRadius={ 2 } padding={ 1 } bgcolor={ colors.KissMeKate }>ldsngfsldn</Box>
                            <Box width={ 450 } height={ 35 } borderRadius={ 2 } padding={ 1 } bgcolor={ colors.KissMeKate }>ldsngfsldn</Box>
                            <Box width={ 450 } height={ 35 } borderRadius={ 2 } padding={ 1 } bgcolor={ colors.KissMeKate }>ldsngfsldn</Box>
                            <Box width={ 450 } height={ 35 } borderRadius={ 2 } padding={ 1 } bgcolor={ colors.KissMeKate }>ldsngfsldn</Box>
                            <Box width={ 450 } height={ 35 } borderRadius={ 2 } padding={ 1 } bgcolor={ colors.KissMeKate }>ldsngfsldn</Box>
                            <Box width={ 450 } height={ 35 } borderRadius={ 2 } padding={ 1 } bgcolor={ colors.KissMeKate }>ldsngfsldn</Box>
                        </Stack>
                    </Box>
                </Grid>
                <Grid size={ { xs: 12, md: 6 } } order={ { xs: 2 } } >
                    <Typography fontSize={ 50 } color={ colors.RaspberryLeafGreen } fontWeight={ 800 }>
                        Ans.
                    </Typography>
                    <Box width={ 450 } padding={ 2 } height={ 400 } bgcolor={ colors.CitrusSplash } >
                        <Brightness5Icon />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    </Box>
}