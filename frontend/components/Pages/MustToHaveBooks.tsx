import colors from "@/lib/color";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Button from "../lowLevelComponent/Button";
import { handPickedBooks } from "@/lib/constant";

export default function MustToHaveBooks ()
{

    const renderBoxes = () =>
    {
        return (
            <Grid container spacing={ 2 }>
                { handPickedBooks.map( ( item ) => (
                    <Grid container size={ { xs: 12, sm: 6, md: 4 } } key={ item.key }>
                        <Box
                            minHeight={ 300 }
                            padding={ 1 }
                            bgcolor={ colors.Lotion }
                            borderRadius={ 2 }
                            boxShadow={ 1 }
                            width={ 350 }
                        >
                            <Box
                                bgcolor={ item.color }
                                padding={ 2 }
                                borderRadius={ 5 }
                                height={ 200 }
                                style={ {
                                    backgroundImage: `url(${ item.image })`,
                                    backgroundSize: 'contain',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                } }
                                className="hover:scale-105 transition-transform duration-300 cursor-pointer"
                            />

                            <Stack spacing={ 1 }>
                                <Box color={ colors.Black }>
                                    <Typography fontSize={ 20 } fontWeight={ 500 }>
                                        { item.name }
                                    </Typography>
                                    <Typography fontStyle="italic">{ item.description }</Typography>
                                </Box>
                                <Button label="Buy Now" variant="contained" fullWidth />
                            </Stack>
                        </Box>
                    </Grid>
                ) ) }
            </Grid>
        )
    }

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
                { renderBoxes() }
            </Grid>
        </Box>
    </Box >
}