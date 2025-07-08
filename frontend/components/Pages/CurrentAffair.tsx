import colors from "@/lib/color";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";

export default function CurrentAffair ()
{
    return <Box padding={ 5 }
        bgcolor={ colors.Pearl }
        height='100vh' >
        <Grid container>
            <Grid size={ { xs: 12, md: 8 } }>
                <Typography fontSize={ 35 } fontFamily="cursive" fontWeight={ 700 }>
                    Current Affairs for MPSC
                </Typography>
                <Grid container padding={ 5 }>
                    <Grid size={ { xs: 12, md: 6 } } order={ { md: 1 } }>
                        <Box width={ 500 } height={ 300 }>
                            <Image src="/books/IndianPolity.jpg" alt="Indian Polity" width={ 300 } height={ 100 } />
                        </Box>
                    </Grid>
                    <Grid size={ { xs: 12, md: 6 } } order={ { md: 2 } }>
                        <Stack spacing={ 3 }>
                            <Typography fontSize={ 25 }>
                                Indian Polity
                            </Typography>
                            <Typography textAlign="justify" >
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni laborum possimus quibusdam quo architecto recusandae distinctio, corporis consequuntur! Facilis minus id ipsam iure similique quod vitae assumenda animi esse neque?
                            </Typography>
                            <Grid container spacing={ 2 }>
                                <Box className='cursor-pointer' bgcolor={ colors.BeeCluster } padding={ 2 } width="fit-content" >
                                    <Typography fontWeight={ 700 }>
                                        Know More
                                    </Typography>
                                </Box>
                                <Box className='cursor-pointer' bgcolor={ colors.Black } color={ colors.BeeCluster } padding={ 2 } width="fit-content" >
                                    <Typography fontWeight={ 700 }>
                                        Add to cart
                                    </Typography>
                                </Box>
                            </Grid>
                        </Stack>
                    </Grid>
                </Grid>
            </Grid>
            <Grid size={ { xs: 12, md: 4 } } paddingTop={ 10 }>
                <Stack spacing={ 5 }>
                    <Box display="flex" >
                        <Grid container spacing={ 5 }>
                            <Grid size={ 6 }>
                                <Box className='cursor-pointer' width={ 150 } height={ 180 } bgcolor={ colors.FrenchVanillaSorbet } >
                                </Box>
                            </Grid>
                            <Grid size={ 6 }>
                                <Box className='cursor-pointer' width={ 150 } height={ 180 } bgcolor={ colors.Black } >
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box display="flex" >
                        <Grid container spacing={ 5 }>
                            <Grid size={ 6 }>
                                <Box className='cursor-pointer' width={ 150 } height={ 180 } bgcolor={ colors.FrenchVanillaSorbet } >
                                </Box>
                            </Grid>
                            <Grid size={ 6 }>
                                <Box className='cursor-pointer' width={ 150 } height={ 180 } bgcolor={ colors.Black } >
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Stack>
            </Grid>
        </Grid>
    </Box >
}