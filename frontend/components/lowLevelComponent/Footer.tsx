import { Box, Divider, Grid, Typography } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { BounceBox } from "./Animation";
import { useRouter } from "next/navigation";
import { onClickTelegram, onClickYoutube } from "@/lib/helper";

export default function Foooter ()
{
    const router = useRouter()

    return <Box sx={ { width: "100%", overflowX: "hidden" } } bgcolor="black" width="100%" height="fit-content" >
        <Grid color="white" padding={ 2 } container spacing={ 5 } >
            <Grid size={ { md: 2 } } display={ { xs: 'none', sm: 'none', md: 'block' } } >
                <Box display="flex" gap={ 1 } >
                    <Box width={ 20 } height={ 100 } borderRadius={ 5 } className='bg-linear-to-r from-cyan-500 to-blue-500' ></Box>
                    <Box width={ 20 } mt={ 2 } height={ 80 } borderRadius={ 5 } className='bg-linear-to-bl from-violet-500 to-fuchsia-500' ></Box>
                    <Box width={ 20 } mt={ 4 } height={ 50 } borderRadius={ 5 } className='bg-linear-to-t from-sky-500 to-indigo-500' ></Box>
                </Box>
            </Grid>
            <Grid size={ { md: 10, sm: 12, xs: 12 } }>
                <Box>
                    <Box display="flex" justifyContent={ { md: 'flex-end', sm: 'center', xs: 'center' } } gap={ 5 } mb={ { md: 0, sm: 2, xs: 2 } }>
                        <BounceBox>
                            <FacebookIcon className="cursor-pointer" />
                        </BounceBox>
                        <BounceBox>
                            <InstagramIcon className="cursor-pointer" />
                        </BounceBox>
                        <BounceBox>
                            <TelegramIcon onClick={ onClickTelegram } className="cursor-pointer" />
                        </BounceBox>
                        <BounceBox>
                            <YouTubeIcon onClick={ onClickYoutube } className="cursor-pointer" />
                        </BounceBox>
                    </Box>
                    <Box
                        display="flex"
                        flexDirection={ { xs: "row", sm: "column", md: "column" } }
                        justifyContent="center"
                        alignItems="flex-start"
                        flexWrap="wrap"
                        gap={ { md: 0, xs: 2 } }
                    >
                        <Box display="flex" flexDirection={ { md: "row", sm: 'row', xs: 'column' } } gap={ { md: 10, sm: 5, xm: 1 } }>
                            <Typography className="cursor-pointer">Courses</Typography>
                            <Typography onClick={ () => router.push( '/books' ) } className="cursor-pointer">Books</Typography>
                            <Typography className="cursor-pointer">PYQ</Typography>
                            <Typography className="cursor-pointer">Free Initiative</Typography>
                            <Typography className="cursor-pointer">Counselling</Typography>
                        </Box>
                        <Divider variant="middle" flexItem orientation="vertical" sx={ { my: 2, borderBottomWidth: 1.5, borderColor: '#999' } } />
                        <Box>
                            <Box display="flex" flexDirection={ { md: "row", sm: 'row', xs: 'column' } } gap={ { md: 10, sm: 5, xm: 1 } }>
                                <Typography className="cursor-pointer">Privacy Policy</Typography>
                                <Typography className="cursor-pointer">Terms of Use</Typography>
                                <Typography className="cursor-pointer">Scales and Refund</Typography>
                                <Typography className="cursor-pointer">Legal</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Grid >
        </Grid >
    </Box >
}