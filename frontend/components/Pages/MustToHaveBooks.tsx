import colors from "@/lib/color";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Button from "../lowLevelComponent/Button";

export default function MustToHaveBooks ()
{
    return <Box minHeight="100vh" width="100%" padding={ 2 }>
        <Box padding={ 5 } bgcolor="#00B8A9" overflow="hidden" width="100%" height="100%" borderRadius={ 5 } >
            <Box justifyItems="center" >
                <Typography fontSize={ { xs: 25, md: 40 } } color={ colors.YrielYellow } fontWeight={ 800 } >
                    Your MPSC Preparation Starts with the Right Books
                </Typography>
                <Typography fontSize={ 20 } fontWeight={ 400 } >
                    Handpicked essentials for every aspirant
                </Typography>
            </Box>
            <Grid padding={ 5 }>
                <Grid size={ { xs: 12, md: 6 } }>
                    <Box display="flex" flexDirection={ { xs: 'column', md: 'row' } } gap={ 3 } justifySelf={ { xs: 'center' } } >
                        <Box width={ { md: 350, sm: 300 } } minHeight={ 300 } padding={ 1 } bgcolor={ colors.Lotion }  >
                            <Box bgcolor={ colors.ChristySmile } padding={ 2 } borderRadius={ 5 } height={ 200 } className='bg-origin-content bg-[url(/books/IndianPolity.jpg)] bg-contain bg-center bg-no-repeat hover:scale-105 transition-transform duration-300 cursor-pointer' />
                            <Stack spacing={ 1 }>
                                <Box color={ colors.Black } >
                                    <Typography fontSize={ 20 } fontWeight={ 500 }>
                                        Indian Polity
                                    </Typography>
                                    <Typography fontStyle="italic" >
                                        by M. Laxmikanth
                                    </Typography>
                                </Box>
                                <Button label="Buy Now" variant="contained" fullWidth />
                            </Stack>
                        </Box>
                        <Box width={ { md: 350, sm: 300 } } minHeight={ 300 } padding={ 1 } bgcolor={ colors.Lotion } >
                            <Box bgcolor={ colors.SlipperyTub } padding={ 2 } borderRadius={ 5 } height={ 200 } className='bg-origin-content bg-[url(/books/IndianPolity.jpg)] bg-contain bg-center bg-no-repeat hover:scale-105 transition-transform duration-300 cursor-pointer' />
                            <Stack spacing={ 1 }>
                                <Box color={ colors.Black } >
                                    <Typography fontSize={ 20 } fontWeight={ 500 }>
                                        History (India & Maharashtra)
                                    </Typography>
                                    <Typography fontStyle="italic">
                                        Laxmikanth
                                    </Typography>
                                </Box>
                                <Button label="Buy Now" variant="contained" fullWidth />
                            </Stack>
                        </Box>
                        <Box width={ { md: 350, sm: 300 } } minHeight={ 300 } padding={ 1 } bgcolor={ colors.Lotion } >
                            <Box bgcolor={ colors.HoneyBird } padding={ 2 } borderRadius={ 5 } height={ 200 } className='bg-origin-content bg-[url(/books/IndianPolity.jpg)] bg-contain bg-center bg-no-repeat hover:scale-105 transition-transform duration-300 cursor-pointer' />
                            <Stack spacing={ 1 }>
                                <Box color={ colors.Black } >
                                    <Typography fontSize={ 20 } fontWeight={ 500 }>
                                        Geography
                                    </Typography>
                                    <Typography fontStyle="italic">
                                        Laxmikanth
                                    </Typography>
                                </Box>
                                <Button label="Buy Now" variant="contained" fullWidth />
                            </Stack>
                        </Box>
                    </Box>
                </Grid>
                <br />
                <Grid size={ { xs: 12, md: 6 } }>
                    <Box display="flex" flexDirection={ { xs: 'column', md: 'row' } } gap={ 3 } justifySelf={ { xs: 'center', } } >
                        <Box width={ { md: 350, sm: 300 } } minHeight={ 300 } padding={ 1 } bgcolor={ colors.Lotion } >
                            <Box bgcolor={ colors.HoneyBird } padding={ 2 } borderRadius={ 5 } height={ 200 } className='bg-origin-content bg-[url(/books/IndianPolity.jpg)] bg-contain bg-center bg-no-repeat hover:scale-105 transition-transform duration-300 cursor-pointer' />
                            <Stack spacing={ 1 }>
                                <Box color={ colors.Black } >
                                    <Typography fontSize={ 20 } fontWeight={ 500 }>
                                        Indian Polity
                                    </Typography>
                                    <Typography fontStyle="italic">
                                        by M. Laxmikanth
                                    </Typography>
                                </Box>
                                <Button label="Buy Now" variant="contained" fullWidth />
                            </Stack>
                        </Box>
                        <Box width={ { md: 350, sm: 300 } } minHeight={ 300 } padding={ 1 } bgcolor={ colors.Lotion } >
                            <Box bgcolor={ colors.SlipperyTub } padding={ 2 } borderRadius={ 5 } height={ 200 } className='bg-origin-content bg-[url(/books/IndianPolity.jpg)] bg-contain bg-center bg-no-repeat hover:scale-105 transition-transform duration-300 cursor-pointer' />
                            <Stack spacing={ 1 }>
                                <Box color={ colors.Black } >
                                    <Typography fontSize={ 20 } fontWeight={ 500 }>
                                        History (India & Maharashtra)
                                    </Typography>
                                    <Typography fontStyle="italic">
                                        Laxmikanth
                                    </Typography>
                                </Box>
                                <Button label="Buy Now" variant="contained" fullWidth />
                            </Stack>
                        </Box>
                        <Box width={ { md: 350, sm: 300 } } minHeight={ 300 } padding={ 1 } bgcolor={ colors.Lotion } >
                            <Box bgcolor={ colors.ChristySmile } padding={ 2 } borderRadius={ 5 } height={ 200 } className='bg-origin-content bg-[url(/books/IndianPolity.jpg)] bg-contain bg-center bg-no-repeat hover:scale-105 transition-transform duration-300 cursor-pointer' />
                            <Stack spacing={ 1 }>
                                <Box color={ colors.Black } >
                                    <Typography fontSize={ 20 } fontWeight={ 500 }>
                                        Geography
                                    </Typography>
                                    <Typography fontStyle="italic">
                                        Laxmikanth
                                    </Typography>
                                </Box>
                                <Button label="Buy Now" variant="contained" fullWidth />
                            </Stack>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    </Box >
}