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
                            <Typography fontSize={ 25 }>
                                Indian Polity
                            </Typography>
                            <Typography textAlign="justify" >
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni laborum possimus quibusdam quo architecto recusandae distinctio, corporis consequuntur! Facilis minus id ipsam iure similique quod vitae assumenda animi esse neque?
                            </Typography>
                            <Box display="flex" width={ { xs: '80%', md: '60%' } } gap={ 2 } >
                                <ScaleButton text="Know More" justify="start" />
                                <ScaleButton text="Add to Cart" justify="start" bgColor="bg-white" textColor="bg-black" />
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