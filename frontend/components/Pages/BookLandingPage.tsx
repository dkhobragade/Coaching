import colors from "@/lib/color";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";

export default function BookLandingPage ()
{
    return (
        <Box bgcolor={ colors.FrenchVanillaSorbet }
            minHeight="100vh"
            display="flex"
            alignItems="center" >
            <Grid padding={ 2 } container alignItems="center" justifyContent="center" height="100%" >
                <Grid size={ { xs: 12, md: 6 } } order={ { xs: 1 } } padding={ 5 } >
                    <Stack spacing={ 5 }>
                        <Box>
                            <Typography fontWeight={ 600 } >Latest MPSC Books</Typography>
                            <Typography fontSize={ 40 } fontWeight={ 800 }>You’re Only One Book</Typography>
                            <Typography fontSize={ 40 } fontWeight={ 800 }>Away From MPSC Success</Typography>
                        </Box>
                        <Typography fontFamily="cursive" fontSize={ 20 } fontWeight={ 400 }>Your preparation deserves the right guidance — start with the best MPSC books that cover the entire syllabus, boost your confidence, and put you on the path to cracking the exam.</Typography>
                        <Box padding={ 2 } width="fit-content" className='bg-[#FFAC2F] cursor-pointer hover:bg-[#FFAC2F]' >
                            <Typography fontWeight={ 700 }>
                                DISCOVER NOW
                            </Typography>
                        </Box>
                    </Stack>
                </Grid>
                <Grid size={ { xs: 12, md: 6 } } order={ { xs: 2 } } >
                    <Grid container spacing={ 2 }>
                        <Grid size={ { xs: 12, md: 4 } } order={ { xs: 1 } } >
                            <Box width={ { xs: 300, md: 200 } } justifySelf="center" height={ 350 } bgcolor="red">
                                <Image loading="lazy" src='/books/IndianPolity.jpg' width={ 200 } height={ 350 } alt="Indian Polity" />
                            </Box>
                        </Grid>
                        <Grid size={ { xs: 12, md: 4 } } order={ { xs: 2 } } >
                            <Box width={ { xs: 300, md: 200 } } height={ 350 } bgcolor="red" justifySelf="center">

                            </Box>
                        </Grid>
                        <Grid size={ { xs: 12, md: 4 } } order={ { xs: 3 } } >
                            <Box width={ { xs: 300, md: 200 } } height={ 350 } bgcolor="red" justifySelf="center">
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}