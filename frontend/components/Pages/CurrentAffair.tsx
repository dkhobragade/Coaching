import colors from "@/lib/color";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { ScaleButton } from "../lowLevelComponent/Animation";

export default function CurrentAffair ()
{
    return <Box padding={ 5 } width="100%" bgcolor={ colors.Pearl }  >
        <Grid container spacing={ 2 }>
            <Grid size={ { xs: 12, md: 8 } }  >
                <Typography fontSize={ { xs: 25, md: 35 } } textAlign={ { xs: 'center', md: 'start' } } fontWeight={ 700 }>
                    Current Affairs for MPSC
                </Typography>
                <Grid container paddingTop={ 5 } spacing={ 2 } >
                    <Grid size={ { xs: 12, md: 4 } } justifyItems={ { xs: 'center', md: 'start' } } order={ { md: 1 } }>
                        <Image src="/books/IndianPolity.jpg" alt="Indian Polity" width={ 300 } height={ 100 } />
                    </Grid>
                    <Grid minHeight="fit-content" size={ { xs: 12, md: 8 } } order={ { md: 2 } }>
                        <Stack rowGap={ 2 } >
                            <Typography fontSize={ 25 } fontWeight={ 600 }>
                                Indian Polity
                            </Typography>
                            <Typography textAlign="justify" >
                                Widely regarded as the bible for Indian Polity, this book by M. Laxmikanth offers a clear, comprehensive, and structured understanding of the Indian Constitution and political system. Recommended by toppers, it covers all key topics with easy-to-understand language, updated chapters, and practice questions.
                            </Typography>
                            <Box display="flex" width={ { xs: '80%', md: '60%' } } gap={ 2 } >
                                <ScaleButton text="Buy Now" justify="start" bgColor="bg-white" textColor="bg-black" />
                            </Box>
                        </Stack>
                    </Grid>
                </Grid>
            </Grid>
            <Grid size={ { xs: 12, md: 4 } } paddingTop={ 10 }>
                <Box width="100%" padding={ 1 } height={ 400 } sx={ {
                    overflowY: 'auto',
                    overflowX: 'hidden',
                    '&::-webkit-scrollbar': {
                        width: '6px',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        backgroundColor: '#FFD700',
                        borderRadius: '3px',
                    },
                    '&::-webkit-scrollbar-track': {
                        backgroundColor: 'transparent',
                    }
                } }>
                    <Grid container spacing={ 5 }>
                        <Grid size={ 6 }>
                            <Box className='cursor-pointer' width="100%" height={ 180 } bgcolor={ colors.FrenchVanillaSorbet } >
                            </Box>
                        </Grid>
                        <Grid size={ 6 }>
                            <Box className='cursor-pointer' width="100%" height={ 180 } bgcolor={ colors.Black } >
                            </Box>
                        </Grid>
                        <Grid size={ 6 }>
                            <Box className='cursor-pointer' width="100%" height={ 180 } bgcolor={ colors.FrenchVanillaSorbet } >
                            </Box>
                        </Grid>
                        <Grid size={ 6 }>
                            <Box className='cursor-pointer' width="100%" height={ 180 } bgcolor={ colors.Black } >
                            </Box>
                        </Grid>
                        <Grid size={ 6 }>
                            <Box className='cursor-pointer' width="100%" height={ 180 } bgcolor={ colors.FrenchVanillaSorbet } >
                            </Box>
                        </Grid>
                        <Grid size={ 6 }>
                            <Box className='cursor-pointer' width="100%" height={ 180 } bgcolor={ colors.Black } >
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    </Box >
}