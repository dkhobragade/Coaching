import { Box, Grid, Typography } from "@mui/material";
import colors from "@/lib/color";
import Brightness7Icon from '@mui/icons-material/Brightness7';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { BounceBox } from "../lowLevelComponent/Animation";
import PeopleIcon from '@mui/icons-material/People';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

export default function CounsellingHeroSection ()
{
    return <Box minWidth="100%" padding={ 2 } minHeight="fit-content">
        <Box m={ 5 }>
            <Typography fontSize={ 25 } fontWeight={ 700 } textAlign="center" >
                Counselling Services
            </Typography>
            <Typography textAlign="center" fontWeight={ 600 } >
                Guiding you through every step of your MPSC journey — from preparation to final selection.
            </Typography>
        </Box>
        <Grid container gap={ { md: 0, sm: 3, xs: 3 } }   >
            <Grid size={ { md: 4, sm: 12, xs: 12 } } display={ { sm: 'flex' } } justifyContent="center" >
                <Box display="flex" flexDirection="column" gap={ 1 } >
                    <Box width={ 400 } borderRadius={ 5 } padding={ 2 } height={ 250 } bgcolor={ colors.Ghosted } >
                        <Box display="flex" flexDirection="column" justifyContent="space-evenly" height="100%"  >
                            <BounceBox>
                                <Brightness7Icon sx={ { color: colors.DarkMidnightBlue, fontSize: 40 } } />
                            </BounceBox>
                            <Box>
                                <Typography fontSize={ 20 } fontWeight={ 600 } >
                                    Career Guidance
                                </Typography>
                                <Typography>
                                    Personalized career path planning for MPSC aspirants
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box width={ 400 } borderRadius={ 5 } padding={ 2 } height={ 250 } bgcolor={ colors.Ghosted } >
                        <Box display="flex" flexDirection="column" justifyContent="space-evenly" height="100%">
                            <BounceBox>
                                <MenuBookIcon sx={ { color: colors.JasmineGreen, fontSize: 40 } } />
                            </BounceBox>
                            <Box>
                                <Typography fontSize={ 20 } fontWeight={ 600 } >
                                    Study Planning
                                </Typography>
                                <Typography>
                                    Customized study schedules and preparation strategies
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Grid  >
            <Grid size={ { md: 4, sm: 12, xs: 12 } } display={ { sm: 'flex' } } justifyContent="center"  >
                <Box display="flex" flexDirection="column" gap={ 1 } >
                    <Box width={ 400 } borderRadius={ 5 } padding={ 2 } height={ 505 } bgcolor={ colors.Ghosted } >1</Box>
                </Box>
            </Grid  >
            <Grid size={ { md: 4, sm: 12, xs: 12 } } display={ { sm: 'flex' } } justifyContent="center"  >
                <Box display="flex" flexDirection="column" gap={ 1 } >
                    <Box width={ 400 } borderRadius={ 5 } padding={ 2 } height={ 250 } bgcolor={ colors.Ghosted } >
                        <Box display="flex" flexDirection="column" justifyContent="space-evenly" height="100%">
                            <BounceBox>
                                <PeopleIcon sx={ { color: colors.GloomyPurple, fontSize: 40 } } />
                            </BounceBox>
                            <Box>
                                <Typography fontSize={ 20 } fontWeight={ 600 } >
                                    Group Sessions
                                </Typography>
                                <Typography>
                                    Interactive group counselling and peer learning
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box width={ 400 } borderRadius={ 5 } padding={ 2 } height={ 250 } bgcolor={ colors.Ghosted } >
                        <Box display="flex" flexDirection="column" justifyContent="space-evenly" height="100%">
                            <BounceBox>
                                <WorkspacePremiumIcon sx={ { color: colors.OrangeQuench, fontSize: 40 } } />
                            </BounceBox>
                            <Box>
                                <Typography fontSize={ 20 } fontWeight={ 600 } >
                                    Success Mentoring
                                </Typography>
                                <Typography>
                                    One-on-one mentoring from successful MPSC officers
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    </Box>
}
