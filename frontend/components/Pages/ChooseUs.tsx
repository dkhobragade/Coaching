import colors from "@/lib/color";
import { Box, Grid, Stack, Typography } from "@mui/material";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SecurityIcon from '@mui/icons-material/Security';
import { BounceBox, ScaleButton } from "../lowLevelComponent/Animation";
import AssignmentIcon from '@mui/icons-material/Assignment';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

export default function ChooseUs ()
{

    return <Box width="100%" minHeight="fit-content" >
        <Box display="flex" margin="0 auto" width="fit-content" justifySelf="center" marginBottom={ 1 } bgcolor={ colors.Zinnia } padding={ 1 } >
            <Typography fontSize={ { md: 30, sm: 20 } } fontWeight={ 700 } >
                Why choose us
            </Typography>
            <BounceBox>
                <QuestionMarkIcon sx={ { fontSize: { md: 40, sm: 20 }, color: 'white' } } />
            </BounceBox>
        </Box>
        <Grid container spacing={ 3 }>
            <Grid size={ { xs: 12, md: 6 } } padding={ 5 } order={ { xs: 1 } } marginTop={ { md: 2, sm: 1 } } >
                <Stack spacing={ 3 }>
                    <Box width="fit-content" padding={ 2 } bgcolor={ colors.BreezeofGreen } >
                        <Typography fontSize={ 15 } fontWeight={ 700 }>
                            Your Trusted Partner for MPSC Success
                        </Typography>
                    </Box>
                    <Typography textAlign="justify"  >
                        We are dedicated to empowering aspirants through expert guidance, structured content, and a result-driven approach to crack the MPSC exam with confidence.
                    </Typography>
                    <br />
                    <ScaleButton justify="start" text="Book a session" />
                </Stack>
            </Grid>
            <Grid minHeight="fit-content" size={ { xs: 12, md: 6 } } order={ { xs: 2 } }>
                <Box display="flex" flexDirection="column">
                    <Box minHeight={ { md: 300, sm: 'fit-content' } }>
                        <Box display="flex" marginLeft={ { md: 25, sm: 0 } }  >
                            <Box padding={ 2 } minWidth={ { md: 180, sm: '50%' } } bgcolor={ colors.Zinnia } height={ { md: 300, sm: 'fit-content' } }  >
                                <Stack spacing={ 5 }>
                                    <BounceBox>
                                        <MenuBookIcon sx={ { fontSize: { md: 40, sm: 30 }, color: "white" } } />
                                    </BounceBox>
                                    <Box>
                                        <Typography color={ colors.Black } fontWeight={ 700 }>
                                            Comprehensive Courses
                                        </Typography>
                                        <Typography color={ colors.White }>
                                            Complete syllabus, topic-wise classes, and updated notes.
                                        </Typography>
                                    </Box>
                                </Stack>
                            </Box>
                            <Box padding={ 2 } minWidth={ { md: 180, sm: '50%' } } bgcolor={ colors.Babe } height={ { md: 300, sm: 'fit-content' } } >
                                <Stack spacing={ 5 }>
                                    <BounceBox>
                                        <PersonSearchIcon sx={ { fontSize: { md: 40, sm: 30 }, color: "white" } } />
                                    </BounceBox>
                                    <Box >
                                        <Typography fontWeight={ 700 } color={ colors.Black }>
                                            Personalized Mentorship
                                        </Typography>
                                        <Typography color={ colors.White }>
                                            One-on-one guidance and regular doubt-clearing.
                                        </Typography>
                                    </Box>
                                </Stack>
                            </Box>
                        </Box>
                    </Box>
                    <Box minHeight={ { md: 200, sm: 'fit-content' } }>
                        <Box display="flex" marginLeft={ { md: 18, sm: 0 } }  >
                            <Box padding={ 2 } minWidth={ { md: 180, sm: '50%' } } bgcolor={ colors.LustfulWishes } minHeight={ { md: 200, sm: 'fit-content' } } >
                                <Stack spacing={ 5 }>
                                    <BounceBox>
                                        <PlayCircleOutlineIcon sx={ { fontSize: { md: 35, sm: 30 }, color: "white" } } />
                                    </BounceBox>
                                    <Box>
                                        <Typography fontWeight={ 600 } color={ colors.Black }>
                                            Live + Recorded Classes
                                        </Typography>
                                        <Typography color={ colors.White }>
                                            Join live or watch anytime with full access.
                                        </Typography>
                                    </Box>
                                </Stack>
                            </Box>
                            <Box padding={ 2 } minWidth={ { md: 180, sm: '50%' } } bgcolor={ colors.BlueAstro } minHeight={ { md: 200, sm: 'fit-content' } } >
                                <Stack spacing={ 5 }>
                                    <BounceBox>
                                        <SecurityIcon sx={ { fontSize: { md: 35, sm: 30 }, color: "white" } } />
                                    </BounceBox>
                                    <Box >
                                        <Typography fontWeight={ 600 } color={ colors.Black }>
                                            Trusted & Transparent
                                        </Typography>
                                        <Typography color={ colors.White }>
                                            Clear pricing, flexible plans, and student-first support.
                                        </Typography>
                                    </Box>
                                </Stack>
                            </Box>
                        </Box>
                    </Box>
                    <Box minHeight={ { md: 50, sm: 'fit-content' } }>
                        <Box display="flex" >
                            <Box padding={ 2 } minWidth={ { md: 180, sm: 100 } } bgcolor={ colors.BristolBlue } minHeight={ { md: 140, sm: 'fit-content' } } >
                                <Stack spacing={ 2 }>
                                    <BounceBox>
                                        <AssignmentIcon sx={ { fontSize: 20, color: "white" } } />
                                    </BounceBox>
                                    <Box>
                                        <Typography fontWeight={ 600 } color={ colors.Black }>
                                            Regular Mock Tests
                                        </Typography>
                                        <Typography color={ colors.White }>
                                            Track your progress with timely mock exams and feedback.
                                        </Typography>
                                    </Box>
                                </Stack>
                            </Box>
                            <Box padding={ 2 } minWidth={ { md: 180, sm: 100 } } bgcolor={ colors.Black } minHeight={ { md: 140, sm: 'fit-content' } } >
                                <Stack spacing={ 2 }>
                                    <BounceBox>
                                        <RecordVoiceOverIcon sx={ { fontSize: 20, color: "white" } } />
                                    </BounceBox>
                                    <Box color={ colors.White }>
                                        <Typography fontWeight={ 600 } >
                                            Interview Preparation
                                        </Typography>
                                        <Typography >
                                            Mock interviews and guidance for MPSC personality tests.
                                        </Typography>
                                    </Box>
                                </Stack>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    </Box >
}