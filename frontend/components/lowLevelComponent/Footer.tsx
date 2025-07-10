import { Box, Divider, Grid, Typography } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { BounceBox } from "./Animation";

export default function Foooter ()
{
    return <Box sx={ { width: "100%", overflowX: "hidden" } } bgcolor="black" width="100%" height={ 150 } >
        <Grid color="white" padding={ 2 } container spacing={ 5 } >
            <Grid size={ 2 }>
                <Box display="flex" gap={ 1 } >
                    <Box width={ 20 } height={ 100 } borderRadius={ 5 } className='bg-linear-to-r from-cyan-500 to-blue-500' ></Box>
                    <Box width={ 20 } mt={ 2 } height={ 80 } borderRadius={ 5 } className='bg-linear-to-bl from-violet-500 to-fuchsia-500' ></Box>
                    <Box width={ 20 } mt={ 4 } height={ 50 } borderRadius={ 5 } className='bg-linear-to-t from-sky-500 to-indigo-500' ></Box>
                </Box>
            </Grid>
            <Grid size={ 10 }>
                <Box>
                    <Grid mt={ 2 } container >
                        <Grid size={ 10 } display="flex" gap={ 10 }>
                            <Typography>Privacy Policy</Typography>
                            <Typography>Terms of Use</Typography>
                            <Typography>Scales and Refund</Typography>
                            <Typography>Legal</Typography>
                        </Grid>
                        <Grid size={ 2 } display="flex" gap={ 1 }>
                            <BounceBox>
                                <FacebookIcon className="cursor-pointer" />
                            </BounceBox>
                            <BounceBox>
                                <InstagramIcon className="cursor-pointer" />
                            </BounceBox>
                            <BounceBox>
                                <TelegramIcon className="cursor-pointer" />
                            </BounceBox>
                            <BounceBox>
                                <YouTubeIcon className="cursor-pointer" />
                            </BounceBox>
                        </Grid>
                    </Grid>
                    <Divider sx={ { my: 2, borderBottomWidth: 1.5, borderColor: '#999' } } />
                    <Box mt={ 2 }>
                        <Box display="flex" gap={ 10 }>
                            <Typography>Privacy Policy</Typography>
                            <Typography>Terms of Use</Typography>
                            <Typography>Scales and Refund</Typography>
                            <Typography>Legal</Typography>
                        </Box>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    </Box>
}