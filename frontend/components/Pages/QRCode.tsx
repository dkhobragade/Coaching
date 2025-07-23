"use client"

import React, { useState } from "react";
import { Box, Button, Grid, styled, Typography } from "@mui/material";
import Image from "next/image";
import QrCode2Icon from '@mui/icons-material/QrCode2';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { postWrapper } from "@/lib/postWrapper";
import { toast } from "react-toastify";
import colors from "@/lib/color";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { BounceBox } from "../lowLevelComponent/Animation";
import StarIcon from '@mui/icons-material/Star';
import DuoIcon from '@mui/icons-material/Duo';
import LockOpenIcon from '@mui/icons-material/LockOpen';


const VisuallyHiddenInput = styled( "input" )( {
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
} );

export default function QRCode ()
{
    const [ isLoading, setIsLoading ] = useState<boolean>( false )

    const handleImgChange = async ( e: React.ChangeEvent<HTMLInputElement> ) =>
    {
        setIsLoading( true )
        const file = e.target.files?.[ 0 ];
        if ( !file ) return

        const reader = new FileReader()
        reader.readAsDataURL( file )

        reader.onload = async () =>
        {
            const base64Img = reader.result
            await postWrapper( 'auth/payment-receipt', { url: base64Img } ).then( ( resp ) =>
            {
                toast.success( resp.message )
            } ).catch( ( error ) =>
            {
                toast.error( error.message )
            } ).finally( () =>
            {
                setIsLoading( false )
            } )
        }
    }

    return <Box width="100%" minHeight="100vh" mt={ 2 } padding={ 2 } borderRadius={ 5 } >
        <Grid container>
            <Grid size={ { md: 5, sm: 12, } } mb={ 2 }>
                <Box display="flex" justifyContent="center" gap={ 2 } >
                    <Image src='/qrcode.jpg' alt="QR" width={ 300 } height={ 200 } />
                    <Box alignContent="center" >
                        <Button loading={ isLoading } component="label" variant="contained" startIcon={ <CloudUploadIcon /> } >
                            Add Image
                            <VisuallyHiddenInput
                                type="file"
                                onChange={ handleImgChange }
                                multiple
                            />
                        </Button>
                    </Box>
                </Box>
            </Grid>
            <Grid size={ { md: 7, sm: 12, } } >
                <Box padding={ 5 } width="100%" height="100%">
                    <Box bgcolor={ colors.AlpineRace } alignSelf="center" borderRadius={ 5 } padding={ 3 }>
                        <Box display="flex" gap={ 2 } color={ colors.White } >
                            <BounceBox>
                                <MenuBookIcon sx={ { ml: 1 } } />
                            </BounceBox>
                            <Typography color={ colors.White } mb={ 5 } fontSize={ 20 } fontWeight={ 500 } justifySelf="center" >
                                Your Dreams Are Just One Step Away
                            </Typography>
                        </Box>
                        <Box display="flex" gap={ 2 } mb={ 3 } color={ colors.White } >
                            <QrCode2Icon />
                            <Typography fontSize={ 15 } fontWeight={ 500 }>
                                Scan the QR to unlock your MPSC journey with DKMPSC.
                            </Typography>
                        </Box>
                        <Box display="flex" gap={ 2 } mb={ 3 } color={ colors.White } >
                            <StarIcon />
                            <Typography fontSize={ 15 } fontWeight={ 500 }>
                                Whether you're just starting out or aiming for the final push,
                                this small step can lead to big success.
                            </Typography>
                        </Box>
                        <Box display="flex" gap={ 2 } mb={ 3 } color={ colors.White } >
                            <DuoIcon />
                            <Typography fontSize={ 15 } fontWeight={ 500 }>
                                Daily guidance, expert mentorship, and the right strategy —
                                all begin with your commitment to act today.
                            </Typography>
                        </Box>
                        <Box display="flex" gap={ 2 } color={ colors.White } >
                            <LockOpenIcon />
                            <Typography fontSize={ 15 } fontWeight={ 500 }>
                                Unlock your potential. 📈 Start your transformation now.
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    </Box>
}