import colors from "@/lib/color";
import { Box, Grid, Typography } from "@mui/material";
import AcUnitIcon from '@mui/icons-material/AcUnit';

export default function CounsellingLandingPage ()
{
    return <Box minWidth="100%" padding={ 2 } minHeight="fit-content">
        <Grid container>
            <Grid size={ { md: 6, sm: 12, xs: 12 } } order={ { md: 1, xs: 2, sm: 2 } } >
                <Box display="flex" flexDirection="column" height="100%" justifyContent="center" padding={ 3 }>
                    <Box bgcolor={ colors.Zinnia } width="fit-content" padding={ 1 } >
                        <Typography fontSize={ 45 } fontWeight={ 600 } >
                            Got questions?
                        </Typography>
                    </Box>
                    <Typography fontSize={ 35 } fontWeight={ 600 }>
                        We’ve got answers — Book your counselling session today,
                    </Typography>
                    <Typography fontSize={ 35 } fontWeight={ 600 }>
                        connect with us, and get all your
                    </Typography>
                    <Typography color={ colors.Zinnia } fontSize={ 35 } fontWeight={ 600 } >
                        QUERIES RESOLVED.
                    </Typography>
                </Box>
            </Grid>
            <Grid size={ { md: 6, sm: 12, xs: 12 } } order={ { md: 1, xs: 1, sm: 1 } } >
                <Box width="100%" padding={ 5 } minHeight="100vh" bgcolor={ colors.RaspberryLeafGreen } borderRadius={ 10 } >
                    <Box width="100%" minHeight="70vh" sx={ { borderRadius: '100px 50px 50px 500px' } } bgcolor={ colors.BreezeofGreen } >
                    </Box>
                    <Box mt={ 5 } display="flex" justifyContent="space-between" >
                        <Box borderRadius={ 50 } width="fit-content" padding={ 2 } minHeight="fit-content" bgcolor={ colors.BitSugar } >
                            <AcUnitIcon sx={ { fontSize: '50px' } } />
                        </Box>
                        <Box sx={ { borderRadius: '50px 100px 50px 100px' } } display="flex" justifyContent="center" alignItems="center" padding={ 2 } border={ 2 } borderColor={ colors.DrWhite } minHeight="fit-content" className="cursor-pointer"  >
                            <Typography color={ colors.StarWhite } fontSize={ 20 } >
                                Start Counselling
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    </Box>
}