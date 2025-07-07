import colors from "@/lib/color";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";

export default function Delivery ()
{
    return (
        <Box bgcolor={ colors.Black } height={ 200 } padding={ 4 }>
            <Typography
                color={ colors.White }
                fontSize={ 30 }
                fontWeight={ 700 }
                textAlign="center"
                marginBottom={ 3 }
            >
                Our Promises to You
            </Typography>
            <Grid
                container
                spacing={ 5 }
                justifyContent="center"
                alignItems="center"
            >
                { [
                    { src: '/delivery.payment.png', label: 'Fast Delivery' },
                    { src: '/delivery/payment.png', label: 'Secure Payment' },
                    { src: '/delivery/package.png', label: 'Damage-Free Packaging' },
                    { src: '/delivery/support.png', label: '24/7 Support' },
                ].map( ( item, index ) => (
                    <Grid size={ { xs: 6, sm: 3 } } key={ index }>
                        <Box
                            color={ colors.White }
                            textAlign="center"
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            justifyContent="center"
                        >
                            <Image loading="lazy" src={ item.src } alt="" width={ 50 } height={ 30 } />
                            <Typography fontSize={ 15 } fontWeight={ 500 }>
                                { item.label }
                            </Typography>
                        </Box>
                    </Grid>
                ) ) }
            </Grid>
        </Box>
    );
}
