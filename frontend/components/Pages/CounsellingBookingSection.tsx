import colors from "@/lib/color";
import { booking_session } from "@/lib/constant";
import { Box, Grid, Typography } from "@mui/material";

export default function CounsellingBookingSession ()
{
    const renderBookingSessionText = () =>
    {

        return <Box>
            { booking_session.map( ( item ) =>
                <Box padding={ 1 }>
                    <Typography fontSize={ 18 } fontWeight={ 550 }>
                        { item.text }
                    </Typography>
                </Box> ) }
        </Box>

    }

    return <Box minHeight="100vh" padding={ 2 } bgcolor={ colors.CrystalCut } >

        <Typography fontSize={ 25 } fontFamily="cursive" fontWeight={ 600 } textAlign="center" >
            Take the First Step Towards Your Better Future
        </Typography>
        <Typography fontSize={ 15 } fontWeight={ 500 } textAlign="center" >
            Our expert counselors help students and professionals with career guidance, stress management, and life decisions.
        </Typography>
        <Grid container padding={ 2 }>
            <Grid size={ 6 }>
                <Box>
                    { renderBookingSessionText() }
                </Box>
            </Grid>
            <Grid size={ 6 }>2</Grid>
        </Grid>
    </Box>
}