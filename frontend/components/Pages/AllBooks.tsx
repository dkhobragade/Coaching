import { Box, Divider, Grid, Typography } from "@mui/material";
import { CartAnimatedBox } from "../lowLevelComponent/Animation";
import colors from "@/lib/color";

export default function AllBooks ()
{
    return <Box width="100%" minHeight="100vh" padding={ 5 } bgcolor={ colors.BitSugar } >
        <Divider>
            <Typography fontSize={ 30 } fontWeight={ 900 } >
                Popular Books
            </Typography>

        </Divider>
        <Box display="flex" justifyContent="center" pt={ 5 } >
            <Box display="flex" gap={ 5 } >
                <Grid container spacing={ 3 } justifyContent="center">
                    { [
                        { title: "Current Affair 2024", price: 100 },
                        { title: "Current Affair 2025", price: 20 },
                        { title: "Current Affair 2026", price: 2320 },
                        { title: "Current Affair 2027", price: 24 },
                    ].map( ( book, index ) => (
                        <Grid
                            key={ index }
                            size={ { xs: 12, sm: 6, md: 3 } }
                            display="flex"
                            justifyContent="center"
                        >
                            <CartAnimatedBox title={ book.title } price={ book.price } src="/cab.png" alt={ "" } />
                        </Grid>
                    ) ) }
                </Grid>
            </Box>
        </Box>
    </Box>
}