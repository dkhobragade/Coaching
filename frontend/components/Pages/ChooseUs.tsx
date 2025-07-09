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

    return <Box width="100%">
        <Box display="flex" width="fit-content" justifySelf="center" marginBottom={ 1 } bgcolor={ colors.Zinnia } padding={ 1 } >
            <Typography fontSize={ 30 } fontWeight={ 700 } >
                Why choose us
            </Typography>
            <BounceBox>
                <QuestionMarkIcon sx={ { fontSize: 40, color: 'white' } } />
            </BounceBox>
        </Box>
        <Grid container spacing={ 3 }>
            <Grid size={ { xs: 12, md: 6 } } padding={ 5 } order={ { xs: 1 } } marginTop={ 10 } >
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
            <Grid size={ { xs: 12, md: 6 } } order={ { xs: 2 } }>
                <Box display="flex" flexDirection="column" >
                    <Box minHeight={ 300 }>
                        <Box display="flex" marginLeft={ 25 }  >
                            <Box padding={ 2 } minWidth={ 180 } bgcolor={ colors.Zinnia } height={ 300 } >
                                <Stack spacing={ 5 }>
                                    <BounceBox>
                                        <MenuBookIcon sx={ { fontSize: 40, color: "white" } } />
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
                            <Box padding={ 2 } minWidth={ 180 } bgcolor={ colors.Babe } height={ 300 } >
                                <Stack spacing={ 5 }>
                                    <BounceBox>
                                        <PersonSearchIcon sx={ { fontSize: 40, color: "white" } } />
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
                    <Box minHeight={ 200 }>
                        <Box display="flex" marginLeft={ 15 }  >
                            <Box padding={ 2 } minWidth={ 180 } bgcolor={ colors.LustfulWishes } height={ 200 } >
                                <Stack spacing={ 5 }>
                                    <BounceBox>
                                        <PlayCircleOutlineIcon sx={ { fontSize: 35, color: "white" } } />
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
                            <Box padding={ 2 } minWidth={ 180 } bgcolor={ colors.BlueAstro } height={ 200 } >
                                <Stack spacing={ 5 }>
                                    <BounceBox>
                                        <SecurityIcon sx={ { fontSize: 35, color: "white" } } />
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
                    <Box minHeight={ 50 }>
                        <Box display="flex" >
                            <Box padding={ 2 } minWidth={ 180 } bgcolor={ colors.BristolBlue } height={ 140 } >
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
                            <Box padding={ 2 } minWidth={ 180 } bgcolor={ colors.Black } height={ 140 } >
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