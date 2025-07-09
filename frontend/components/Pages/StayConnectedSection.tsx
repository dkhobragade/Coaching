import Image from "next/image";
import colors from "@/lib/color";
import { Box, Typography } from "@mui/material";

export default function StayConnectedSection ()
{

    return (
        <Box width="100%" height="100vh" bgcolor={ colors.CeladonPorcelain } display="flex" justifyContent="center" alignItems="center">
            <Box
                width="80%"
                minHeight={ 500 }
                padding={ 4 }
                borderRadius={ 5 }
                bgcolor={ colors.Black }
                display="flex"
                flexDirection="column"
            >
                <Box textAlign="center" flex="1" display="flex" flexDirection="column" justifyContent="center">
                    <Typography color="white" fontSize={ { xs: 25, md: 35 } } fontWeight={ 500 }>
                        Stay Connected With Us — Anytime, Anywhere!
                    </Typography>
                    <Box width={ { xs: "100%", md: "60%" } } margin="0 auto" mt={ 2 }>
                        <Typography color="white">
                            Join our active student community on Telegram, WhatsApp, and YouTube
                            to get daily updates, doubt-solving, and exclusive content for MPSC preparation.
                        </Typography>
                    </Box>
                </Box>

                <Box display="flex" pt={ 4 }>
                    <Box bgcolor={ colors.Zinnia } className='w-25 h-50  rounded-l-full' />
                    <Box bgcolor={ colors.YrielYellow } className='w-25 h-50  rounded-l-full' />
                    <Box
                        bgcolor={ colors.ChristySmile }
                        className="w-48 h-48 rounded-full cursor-pointer transition-all duration-300 transform hover:scale-[1.1] flex justify-center items-center"
                    >
                        <Image loading="lazy"
                            src="/socialMedia/telegram.png"
                            alt="Telegram"
                            width={ 80 }
                            height={ 80 }
                            className="object-contain"
                        />
                    </Box>
                    {/* need to change color */ }
                    <Box bgcolor="#029AFF"
                        className="w-48 h-48 rounded-full cursor-pointer transition-all duration-300 transform hover:scale-[1.1] flex justify-center items-center" >
                        <Image loading="lazy" className="object-contain" src="/socialMedia/youtube.png" alt="YouTube" width={ 100 } height={ 100 } />
                    </Box>
                    <Box bgcolor={ colors.YrielYellow }
                        className="w-48 h-48 rounded-full cursor-pointer transition-all duration-300 transform hover:scale-[1.1] flex justify-center items-center" >
                        <Image loading="lazy" className="object-contain" src="/socialMedia/whatsapp.png" alt="WhatApp" width={ 100 } height={ 100 } />
                    </Box>
                    <Box bgcolor={ colors.ChristySmile } className='w-50 h-50  rounded-tr-full' />
                </Box>
            </Box>
        </Box >
    );
}




