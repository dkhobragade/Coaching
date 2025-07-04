import Image from "next/image";
import colors from "@/lib/color";
import { Box, Grid, Stack, Typography } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { SocailMediaBoxOne, SocailMediaBoxTwo } from "@/lib/constant";

export default function StayConnectedSection ()
{

    const renderBoxOne = () =>
    {
        return <Stack spacing={ 2 }>
            { SocailMediaBoxOne.map( ( item ) =>
                <Box key={ item.key } className="cursor-pointer" display="flex" alignItems="center" justifyContent="center" padding={ 5 } bgcolor={ colors.White } width={ 150 } height={ 200 } borderRadius={ 10 } >
                    <Image src={ item.img } alt="Youtube" width={ 100 } height={ 100 } loading="lazy" />
                </Box> ) }
        </Stack>
    }

    const renderBoxTwo = () =>
    {
        return <Stack spacing={ 2 }>
            { SocailMediaBoxTwo.map( ( item ) =>
                <Box key={ item.key } className="cursor-pointer" display="flex" alignItems="center" justifyContent="center" padding={ 5 } bgcolor={ colors.White } width={ 150 } height={ 200 } borderRadius={ 10 } >
                    <Image src={ item.img } alt="Youtube" width={ 100 } height={ 100 } loading="lazy" />
                </Box> ) }
        </Stack>
    }


    return <Box width="100wh" height={ 450 } overflow="hidden" bgcolor={ colors.CeladonPorcelain }  >
        <Grid container>
            <Grid display="flex" padding={ 5 } order={ { xs: 1 } } size={ { xs: 12, md: 6 } } >
                <Stack spacing={ 5 }>
                    <Stack spacing={ 2 }>
                        <Typography fontSize={ 35 } fontFamily="cursive" fontWeight={ 600 } >
                            Stay Connected With Us — Anytime, Anywhere!
                        </Typography>
                        <Typography>
                            Join our active student community on Telegram, WhatsApp, and YouTube <br />
                            to get daily updates, doubt-solving, and exclusive content for MPSC preparation.
                        </Typography>
                    </Stack>
                    <Box width="fit-content" className="relative hover:scale-105 inline-block mt-2">
                        <Box className="absolute top-2 left-2 w-full h-full bg-[#FCA311] rounded z-0"></Box>
                        <Box className="relative z-10 bg-white text-black px-6 py-3 rounded font-semibold shadow-md cursor-pointer">
                            Join Now <ArrowForwardIcon />
                        </Box>
                    </Box>
                </Stack>
            </Grid>
            <Grid size={ { xs: 12, md: 6 } } order={ { xs: 2 } } display={ { xs: 'none', md: 'flex' } } justifyContent="center" >
                <Grid container spacing={ 5 }>
                    <Grid marginTop='-60px'>
                        { renderBoxOne() }
                    </Grid>
                    <Grid>
                        { renderBoxTwo() }
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Box >
}


