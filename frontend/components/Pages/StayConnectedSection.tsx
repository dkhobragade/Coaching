import Image from "next/image";
import colors from "@/lib/color";
import { Box, Typography } from "@mui/material";

export default function StayConnectedSection ()
{

    return (
        <Box width="100%" height="fit-content" bgcolor={ colors.CeladonPorcelain } display="flex" justifyContent="center" alignItems="center">
            <Box
                minWidth="50%"
                minHeight={ 500 }
                padding={ 4 }
                margin={ 5 }
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

                <Box display={ { md: 'flex', sm: 'contents' } } pt={ 4 }>
                    <Box bgcolor={ colors.Zinnia } display={ { xs: 'none', sm: 'none', md: 'block' } } className='w-25 h-50   rounded-l-full' />
                    <Box bgcolor={ colors.YrielYellow } display={ { xs: 'none', sm: 'none', md: 'block' } } className='w-25 h-50   rounded-l-full' />
                    <Box display="flex" justifyContent="center" flexWrap={ { md: 'nowrap', sm: 'wrap', xs: 'wrap' } } gap={ { xs: 2, md: 0, sm: 2 } } >
                        <Box
                            bgcolor={ colors.ChristySmile }
                            className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48  rounded-full cursor-pointer transition-all duration-300 transform hover:scale-[1.1] flex justify-center items-center"
                        >
                            <Image loading="lazy"
                                src="/socialMedia/telegram.png"
                                alt="Telegram"
                                width={ 80 }
                                height={ 80 }
                                className="object-contain w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20"
                            />
                        </Box>
                        <Box bgcolor={ colors.BlueAstro }
                            className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48  rounded-full cursor-pointer transition-all duration-300 transform hover:scale-[1.1] flex justify-center items-center" >
                            <Image loading="lazy" className="object-contain w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20" src="/socialMedia/youtube.png" alt="YouTube" width={ 100 } height={ 100 } />
                        </Box>
                        <Box bgcolor={ colors.YrielYellow }
                            className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48  rounded-full cursor-pointer transition-all duration-300 transform hover:scale-[1.1] flex justify-center items-center" >
                            <Image loading="lazy" className="object-contain w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20" src="/socialMedia/whatsapp.png" alt="WhatApp" width={ 100 } height={ 100 } />
                        </Box>
                    </Box>
                    <Box bgcolor={ colors.ChristySmile } display={ { xs: 'none', sm: 'none', md: 'block' } } className='w-50 h-50  rounded-tr-full' />
                    <Box bgcolor={ colors.Zinnia } display={ { xs: 'none', sm: 'none', md: 'block' } } className='w-30 h-50  rounded-r-full' />
                </Box>
            </Box>
        </Box >
    );
}





