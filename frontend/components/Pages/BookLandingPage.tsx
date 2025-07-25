import { Box, Grid, Typography } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import { BounceBox, RotateBox, ScaleButton } from "../lowLevelComponent/Animation";
import colors from "@/lib/color";


type BookLandingPageProps = {
    scrollToCurrentAffair: () => void;
};

export default function BookLandingPage ( { scrollToCurrentAffair }: BookLandingPageProps )
{

    return (
        <Box
            bgcolor={ colors.Lotion }
            maxHeight="100vh"
            width="100%"
            padding={ 2 }
            overflow="hidden"
        >
            <Grid container justifyContent="space-between" sx={ { alignItems: "flex-start" } }>
                <Grid size={ { xs: 12, md: 8 } } display={ { xs: 'flex', md: 'block' } } justifyContent={ { xs: 'center' } } >
                    <Box paddingLeft={ { xs: 0, md: 10 } } paddingTop={ { xs: 0, md: 10 } } >
                        <Box display="flex" mb={ 3 }>
                            <Box>
                                <Box height={ 100 }>
                                    <Typography fontSize={ { xs: 70, md: 100 } } fontWeight={ 900 } >
                                        B
                                    </Typography>
                                </Box>
                                <Box height={ 100 }>
                                    <Typography fontSize={ { xs: 70, md: 100 } } fontWeight={ 900 }>
                                        F
                                    </Typography>
                                </Box>
                            </Box>
                            <BounceBox>
                                <Box border={ { xs: 10, md: 20 } } borderColor={ { xs: colors.BeniukonBronze, md: colors.BeniukonBronze } } marginTop={ 5 } height={ 180 } borderRadius={ 5 } width={ 30 } padding={ 2 } />
                            </BounceBox>
                            <Box>
                                <Box height={ 100 }>
                                    <Typography fontSize={ { xs: 70, md: 100 } } fontWeight={ 900 }>
                                        OKS
                                    </Typography>
                                </Box>
                                <Box height={ 100 }>
                                    <Typography fontSize={ { xs: 70, md: 100 } } fontWeight={ 900 }>
                                        R ALL
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        <ScaleButton text="Explore shop" justify="start" onClick={ scrollToCurrentAffair } />
                    </Box>
                </Grid>
                <Grid size={ { xs: 12, md: 4 } } display={ { xs: 'none', md: 'block' } } sx={ { alignSelf: "flex-end", } }>
                    <Box display="flex" gap={ 5 }>
                        <Box
                            sx={ {
                                boxShadow: "7px 10px 0px rgba(2, 2, 2, 0.4)",
                                transform: "rotate(10deg)",
                                flexShrink: 0,
                                marginTop: 15,
                            } }
                            bgcolor={ colors.BeniukonBronze }
                            borderRadius={ 5 }
                            width={ 100 }
                            height={ 500 }
                            className='hover:scale-110 transition-transform duration-300 cursor-pointer'
                        >
                            <Grid
                                height="100%"
                                flexDirection="column"
                                justifyContent="space-between"
                                container width="100%" display="flex" alignContent="center" padding={ 3 } >
                                <Grid size={ 2 }>
                                    <Box
                                        bgcolor="white"
                                        width={ 30 }
                                        height={ 30 }
                                        className="rounded-full flex justify-center items-center mt-1 ml-1" >
                                        <RotateBox>
                                            <StarIcon className="rotate-50" fontSize="small" />
                                        </RotateBox>
                                    </Box>
                                </Grid>
                                <Grid size={ 10 } >
                                    <Typography
                                        fontSize={ 30 }
                                        fontWeight={ 600 }
                                        color="white"
                                        marginBottom={ 6 }
                                        className="whitespace-nowrap -rotate-90"
                                        textAlign="end"
                                    >
                                        Maharashtra GK
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box
                            sx={ {
                                boxShadow: "7px 10px 0px rgba(2, 2, 2, 0.4)",
                                transform: "rotate(5deg)",
                                flexShrink: 0,
                                marginTop: 5
                            } }
                            bgcolor={ colors.AlpineRace }
                            borderRadius={ 5 }
                            width={ 100 }
                            height={ 600 }
                            className='hover:scale-110 transition-transform duration-300 cursor-pointer'
                        >
                            <Grid
                                height="100%"
                                flexDirection="column"
                                justifyContent="space-between"
                                container width="100%" display="flex" alignContent="center" padding={ 3 } >
                                <Grid size={ 2 }>
                                    <Box
                                        bgcolor="white"
                                        width={ 30 }
                                        height={ 30 }
                                        className="rounded-full flex justify-center items-center mt-1 ml-1" >
                                        <RotateBox>
                                            <StarIcon className="rotate-50" fontSize="small" />
                                        </RotateBox>
                                    </Box>
                                </Grid>
                                <Grid size={ 10 } marginBottom={ 10 } >
                                    <Typography
                                        fontSize={ 30 }
                                        fontWeight={ 600 }
                                        color="white"
                                        className="whitespace-nowrap -rotate-90"
                                        textAlign="end" >
                                        Current affairs
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box
                            sx={ {
                                boxShadow: "7px 10px 0px rgba(2, 2, 2, 0.4)",
                                transform: "rotate(2deg)",
                                flexShrink: 0,
                                marginTop: 2
                            } }
                            bgcolor={ colors.OrangeQuench }
                            width={ 100 }
                            height={ 600 }
                            borderRadius={ 5 }
                            className='hover:scale-110 transition-transform duration-300 cursor-pointer'
                        >
                            <Grid
                                height="100%"
                                flexDirection="column"
                                justifyContent="space-between"
                                container width="100%" display="flex" alignContent="center" padding={ 3 } >
                                <Grid size={ 2 }>
                                    <Box
                                        bgcolor="white"
                                        width={ 30 }
                                        height={ 30 }
                                        className="rounded-full flex justify-center items-center mt-1 ml-1" >
                                        <RotateBox>
                                            <StarIcon className="rotate-50" fontSize="small" />
                                        </RotateBox>
                                    </Box>
                                </Grid>
                                <Grid size={ 10 } >
                                    <Typography
                                        fontSize={ 30 }
                                        fontWeight={ 600 }
                                        color="white"
                                        className="whitespace-nowrap -rotate-90"
                                        textAlign="end" >
                                        Previous Year Questions
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box >
    );
}