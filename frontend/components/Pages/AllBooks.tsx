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
                        { title: "Current Affair 2024", id: '64a2fa72d123456789fedcde', price: 100 },
                        { title: "Current Affair 2025", id: '68777b30fe0a9691960d9s30', price: 20 },
                        { title: "Current Affair 2026", id: '68777b30fe0a9691960dsd30', price: 2320 },
                        { title: "Current Affair 2027", id: '68777b30fe0a9691960dgf30', price: 24 },
                    ].map( ( book, index ) => (
                        <Grid
                            key={ index }
                            size={ { xs: 12, sm: 6, md: 3 } }
                            display="flex"
                            justifyContent="center"
                        >
                            <CartAnimatedBox title={ book.title } price={ book.price } src="/cab.png" alt={ "" } id={ book.id } />
                        </Grid>
                    ) ) }
                </Grid>
            </Box>
        </Box>
    </Box>
}