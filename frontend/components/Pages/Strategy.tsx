import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import FlareIcon from '@mui/icons-material/Flare';
import { BounceBox, ScaleButton } from "../lowLevelComponent/Animation";
import DownloadIcon from '@mui/icons-material/Download';
import Button from "../lowLevelComponent/Button";

export default function Strategy ()
{
    return <Box width="100%" minHeight="100vh" padding={ 2 } >

        <Typography fontSize={ 30 } fontWeight={ 700 }>
            Strategy & Preparation Guide
        </Typography>
        <Typography>
            Whether you're a beginner or revising for your next attempt,  <br />
            follow this step-by-step strategy to prepare for Prelims, Mains, and Interview stages of MPSC.
        </Typography>

        <Grid container padding={ 3 }>
            <Grid size={ 6 } minHeight={ 500 } >
                <Box display="flex" flexDirection="column" >
                    <Box width="100%" padding={ 2 } borderRadius={ 7 } height={ 250 } bgcolor="#85B5B3" >
                        <Box display="flex">
                            <Stack gap={ 1 } >
                                <Typography>
                                    Understanding the MPSC Exam Structure
                                </Typography>
                                <Box display="flex" gap={ 1 } >
                                    <FlareIcon />
                                    <Typography>
                                        Prelims: Objective-type paper
                                    </Typography>
                                </Box>
                                <Box display="flex" gap={ 1 }>
                                    <FlareIcon />
                                    <Typography>
                                        Mains: Descriptive papers with subject depth
                                    </Typography>
                                </Box>
                                <Box display="flex" gap={ 1 }>
                                    <FlareIcon />
                                    <Typography>
                                        Interview: Personality and current affairs assessment
                                    </Typography>
                                </Box>
                                <ScaleButton text="Download Syllabus PDF" justify="start" />
                            </Stack>
                            <Image src='/thinking.png' alt="Asking" width={ 200 } height={ 300 } />
                        </Box>
                    </Box>
                    <Box width="100%" padding={ 1 } minHeight={ 250 } >
                        <Box display="flex" gap={ 1 }>
                            <Box width="50%" bgcolor="#47ADCB" borderRadius={ 8 } padding={ 2 } minHeight={ 300 } >
                                <Stack gap={ 1 }>
                                    <Typography> Prelims Strategy</Typography>
                                    <Box display="flex" gap={ 1 } >
                                        <FlareIcon />
                                        <Typography>
                                            Concept clarity + Fact retention
                                        </Typography>
                                    </Box>
                                    <Box display="flex" gap={ 1 } >
                                        <FlareIcon />
                                        <Typography>
                                            50+ MCQs daily practice
                                        </Typography>
                                    </Box>
                                    <Box display="flex" gap={ 1 } >
                                        <FlareIcon />
                                        <Typography>
                                            Weekly mock tests + analysis
                                        </Typography>
                                    </Box>
                                    <Box display="flex" gap={ 1 } >
                                        <FlareIcon />
                                        <Typography>
                                            Focus on accuracy and time management
                                        </Typography>
                                    </Box>
                                    <ScaleButton text="Join Prelims Test Series" justify="start" />
                                </Stack>
                            </Box>
                            <Box width="50%" borderRadius={ 8 } padding={ 2 } bgcolor="#FDA2A8" minHeight={ 300 } >
                                <Stack gap={ 1 }>
                                    <Typography>Mains Strategy</Typography>
                                    <Box display="flex" gap={ 1 } >
                                        <FlareIcon />
                                        <Typography>
                                            Answer writing with Intro–Body–Conclusion
                                        </Typography>
                                    </Box>
                                    <Box display="flex" gap={ 1 } >
                                        <FlareIcon />
                                        <Typography>
                                            Previous year question analysis
                                        </Typography>
                                    </Box>
                                    <Box display="flex" gap={ 1 } >
                                        <FlareIcon />
                                        <Typography>
                                            Conceptual clarity with structure
                                        </Typography>
                                    </Box>
                                    <Box display="flex" gap={ 1 } >
                                        <FlareIcon />
                                        <Typography>
                                            Evaluation and feedback
                                        </Typography>
                                    </Box>
                                    <ScaleButton text="Explore Mains Course" justify="start" />
                                </Stack>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Grid>
            <Grid size={ 6 } minHeight={ 500 } >
                <Box display="flex" flexDirection="column" >
                    <Box width="100%" padding={ 1 } minHeight={ 250 } >
                        <Box display="flex" gap={ 1 }>
                            <Box width="50%" bgcolor="#47ADCB" borderRadius={ 8 } padding={ 2 } minHeight={ 300 } >
                                <Stack gap={ 1 }>
                                    <Typography> Interview Preparation</Typography>
                                    <Box display="flex" gap={ 1 } >
                                        <FlareIcon />
                                        <Typography>
                                            Mock interviews with experts
                                        </Typography>
                                    </Box>
                                    <Box display="flex" gap={ 1 } >
                                        <FlareIcon />
                                        <Typography>
                                            Confidence & personality development
                                        </Typography>
                                    </Box>
                                    <Box display="flex" gap={ 1 } >
                                        <FlareIcon />
                                        <Typography>
                                            Current affairs discussion
                                        </Typography>
                                    </Box>
                                    <Box display="flex" gap={ 1 } >
                                        <FlareIcon />
                                        <Typography>
                                            Feedback & improvement tracking
                                        </Typography>
                                    </Box>
                                    <ScaleButton text="Book Mock Interview" justify="start" />
                                </Stack>
                            </Box>
                            <Box width="50%" borderRadius={ 8 } padding={ 2 } bgcolor="#EDD2BD" minHeight={ 300 } >
                                <Stack gap={ 1 }>
                                    <Typography>Revision & Time Management</Typography>
                                    <Box display="flex" gap={ 1 } >
                                        <FlareIcon />
                                        <Typography>
                                            80/20 Rule: Revise more, read less new
                                        </Typography>
                                    </Box>
                                    <Box display="flex" gap={ 1 } >
                                        <FlareIcon />
                                        <Typography>
                                            Monthly revision tests
                                        </Typography>
                                    </Box>
                                    <Box display="flex" gap={ 1 } >
                                        <FlareIcon />
                                        <Typography>
                                            Self-assessment through timed practice
                                        </Typography>
                                    </Box>
                                    <Box display="flex" gap={ 1 } >
                                        <FlareIcon />
                                        <Typography>
                                            Concise revision notes
                                        </Typography>
                                    </Box>
                                    <ScaleButton text="Smart Revision Tookkit" justify="start" />
                                </Stack>
                            </Box>
                        </Box>
                    </Box>
                    <Box width="100%" padding={ 2 } borderRadius={ 7 } minHeight={ 250 } bgcolor="#CEE9FA" >
                        <Box display="flex">
                            <Stack gap={ 1 } >
                                <Typography>
                                    Beginner’s Roadmap (Step-by-Step)
                                </Typography>
                                <Box display="flex" gap={ 1 } >
                                    <FlareIcon />
                                    <Typography>
                                        Month 1–3: NCERT + Maharashtra Board Books
                                    </Typography>
                                </Box>
                                <Box display="flex" gap={ 1 }>
                                    <FlareIcon />
                                    <Typography>
                                        Month 4–6: Standard MPSC books + Current Affairs
                                    </Typography>
                                </Box>
                                <Box display="flex" gap={ 1 }>
                                    <FlareIcon />
                                    <Typography>
                                        Month 7–9: MCQ Practice + Notes + Revision
                                    </Typography>
                                </Box>
                                <Box display="flex" gap={ 1 }>
                                    <FlareIcon />
                                    <Typography>
                                        Month 10–12: Mains Answer Writing + Interview Basics
                                    </Typography>
                                </Box>
                                <ScaleButton text="Download 1Year Study Planner" justify="start" />
                            </Stack>
                            <Image src='/study.png' alt="Asking" width={ 200 } height={ 300 } />
                        </Box>
                    </Box>
                </Box>
            </Grid>
        </Grid>
        <Box textAlign="center" mt={ 8 }>
            <Typography variant="h5" fontWeight={ 600 } gutterBottom>
                📥 Free Downloads
            </Typography>
            <Typography variant="body1" color="text.secondary" mb={ 2 }>
                Download essential PDFs to boost your preparation:
            </Typography>
            <Stack
                direction={ { xs: 'column', sm: 'row' } }
                spacing={ 2 }
                gap={ 2 }
                justifyContent="center"
                flexWrap="wrap"
            >
                <Button variant="contained" label="Monthly Current Affairs" />
                <Button variant="contained" label="Prelims + Mains Planner" />
                <Button variant="contained" label="Standard Booklist" />
                <Button variant="contained" label="MPSC Syllabus (EN/MA)" />
            </Stack>
        </Box>
    </Box >


}