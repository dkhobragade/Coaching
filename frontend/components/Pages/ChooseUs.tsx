import colors from "@/lib/color";
import { Box, Grid, Stack, Typography } from "@mui/material";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SecurityIcon from '@mui/icons-material/Security';
import { BounceBox } from "../lowLevelComponent/Animation";

export default function ChooseUs ()
{

    return <Box width="100%" minHeight="100vh" padding={ 5 } marginTop={ 5 } marginBottom={ 5 }>
        <Box width="fit-content" justifySelf="center" marginBottom={ 1 } bgcolor={ colors.Zinnia } padding={ 1 } >
            <Typography fontSize={ 30 } fontWeight={ 700 } >
                Why choose us
            </Typography>
        </Box>
        <Grid container spacing={ 3 }>
            <Grid size={ { xs: 12, md: 6 } } order={ { xs: 1 } } marginTop={ 10 } >
                <Stack spacing={ 3 }>
                    <Box width="fit-content" padding={ 2 } bgcolor={ colors.BreezeofGreen } >
                        <Typography fontSize={ 15 } fontWeight={ 700 }>
                            Your Trusted Partner for MPSC Success
                        </Typography>
                    </Box>
                    <Typography textAlign="justify"  >
                        We are dedicated to empowering aspirants through expert guidance, structured content, and a result-driven approach to crack the MPSC exam with confidence.
                    </Typography>
                    <Box width="fit-content" className="relative hover:scale-105 inline-block mt-2">
                        <Box className="absolute top-2 left-2 w-full h-full bg-[#FCA311] rounded z-0"></Box>
                        <Box className="relative  z-10 bg-black text-white px-6 py-3 rounded font-semibold shadow-md cursor-pointer">
                            Book a session
                        </Box>
                    </Box>
                </Stack>
            </Grid>
            <Grid size={ { xs: 12, md: 6 } } order={ { xs: 2 } }>
                <Grid container spacing={ 5 }>
                    <Grid size={ { xs: 12, md: 6 } } order={ { xs: 1 } }>
                        <Box display="flex" flexDirection="column" gap={ 5 } >
                            <Box borderRadius={ 5 } bgcolor={ colors.DrWhite } padding={ 2 } width="100%" minHeight={ 200 } >
                                <Stack spacing={ 5 }>
                                    <BounceBox>
                                        <MenuBookIcon sx={ { fontSize: 40 } } />
                                    </BounceBox>
                                    <Box>
                                        <Typography fontWeight={ 600 }>
                                            Comprehensive Courses
                                        </Typography>
                                        <Typography>
                                            Complete syllabus, topic-wise classes, and updated notes.
                                        </Typography>
                                    </Box>
                                </Stack>
                            </Box>
                            <Box borderRadius={ 5 } bgcolor={ colors.DrWhite } padding={ 2 } width="100%" minHeight={ 200 } >
                                <Stack spacing={ 5 }>
                                    <BounceBox>
                                        <PersonSearchIcon sx={ { fontSize: 40 } } />
                                    </BounceBox>
                                    <Box>
                                        <Typography fontWeight={ 600 }>
                                            Personalized Mentorship
                                        </Typography>
                                        <Typography>
                                            One-on-one guidance and regular doubt-clearing.
                                        </Typography>
                                    </Box>
                                </Stack>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid size={ { xs: 12, md: 6 } } order={ { xs: 2 } }>
                        <Box display="flex" flexDirection="column" gap={ 5 } >
                            <Box borderRadius={ 5 } bgcolor={ colors.DrWhite } padding={ 2 } width="100%" minHeight={ 200 } >
                                <Stack spacing={ 5 }>
                                    <BounceBox>
                                        <PlayCircleOutlineIcon sx={ { fontSize: 40 } } />
                                    </BounceBox>
                                    <Box>
                                        <Typography fontWeight={ 600 }>
                                            Live + Recorded Classes
                                        </Typography>
                                        <Typography>
                                            Join live or watch anytime with full access.
                                        </Typography>
                                    </Box>
                                </Stack>
                            </Box>
                            <Box borderRadius={ 5 } bgcolor={ colors.DrWhite } padding={ 2 } width="100%" minHeight={ 200 } >
                                <Stack spacing={ 5 }>
                                    <BounceBox>
                                        <SecurityIcon sx={ { fontSize: 40 } } />
                                    </BounceBox>
                                    <Box>
                                        <Typography fontWeight={ 600 }>
                                            Trusted & Transparent
                                        </Typography>
                                        <Typography>
                                            Clear pricing, flexible plans, and student-first support.
                                        </Typography>
                                    </Box>
                                </Stack>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Box >
}