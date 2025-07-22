"use client"

import colors from "@/lib/color";
import { userAtom } from "@/lib/store/userAtom";
import { Box, Stack, styled, Typography } from "@mui/material";
import { useAtom } from "jotai";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { postWrapper } from "@/lib/postWrapper";
import { toast } from "react-toastify";
import { useRef, useState } from "react";
import Image from "next/image";

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


export default function Profile ()
{

    const [ userState ] = useAtom( userAtom )
    const fileInputRef = useRef<HTMLInputElement>( null );
    const [ selectedImg, setSelectedImg ] = useState<string | null>( null )


    const handleIconClick = () =>
    {
        fileInputRef.current?.click();
    };

    const handleImageUpload = async ( e: React.ChangeEvent<HTMLInputElement> ) =>
    {
        const file = e.target.files?.[ 0 ]

        if ( !file ) return

        const reader = new FileReader()
        reader.readAsDataURL( file )

        reader.onload = async () =>
        {
            const base64Img = reader.result
            setSelectedImg( base64Img as string )
            postWrapper( 'auth/update-profile', { profilePic: base64Img } ).then( ( resp ) =>
            {
                toast.success( resp.message )
            } ).catch( ( error ) =>
            {
                toast.error( error.message )
            } )
        }
    }

    return <Box width="100%" minHeight="100vh">
        <Box width="50%" justifyContent="center" justifySelf="center" margin={ 2 } borderRadius={ 5 } padding={ 2 } bgcolor={ colors.KissMeKate } >
            <Typography fontSize={ 20 } fontWeight={ 600 }  >
                Personal Info
            </Typography>
            <Box display="flex" onClick={ handleIconClick } className='cursor-pointer relative' justifySelf="center" justifyContent="center" alignItems="center" width={ 120 } borderRadius={ 50 } height={ 120 } bgcolor={ colors.Lotion } >
                <Image
                    src={ selectedImg as string || userState.user.img }
                    alt="Profile"
                    fill
                    style={ {
                        objectFit: 'cover',
                        borderRadius: 50
                    } }
                />
                { !selectedImg || !userState.user.img &&
                    <CameraAltIcon sx={ { fontSize: 80 } } />
                }
                <VisuallyHiddenInput
                    ref={ fileInputRef }
                    type="file"
                    onChange={ handleImageUpload }
                    multiple
                />
            </Box>
            <Box width="100%" bgcolor={ colors.White } padding={ 2 } marginTop={ 5 } justifySelf="center" borderRadius={ 5 } >
                <Stack spacing={ 2 }>
                    <Box>
                        <Typography fontSize={ 15 } fontWeight={ 500 } >
                            Name
                        </Typography>
                        <Box width="100%" className='cursor-pointer' bgcolor={ colors.BitSugar } padding={ 1 } borderRadius={ 2 } >
                            { userState.user.name }
                        </Box>
                    </Box>
                    <Box>
                        <Typography fontSize={ 15 } fontWeight={ 500 } >
                            Mobile No.
                        </Typography>
                        <Box width="100%" className='cursor-pointer' bgcolor={ colors.BitSugar } padding={ 1 } borderRadius={ 2 } >
                            { userState.user.mobile }
                        </Box>
                    </Box>
                    <Box>
                        <Typography fontSize={ 15 } fontWeight={ 500 } >
                            Email
                        </Typography>
                        <Box width="100%" className='cursor-pointer' bgcolor={ colors.BitSugar } padding={ 1 } borderRadius={ 2 } >
                            { userState.user.email }
                        </Box>
                    </Box>
                    <Box>
                        <Typography fontSize={ 15 } fontWeight={ 500 } >
                            Role
                        </Typography>
                        <Box width="100%" className='cursor-pointer' bgcolor={ colors.BitSugar } padding={ 1 } borderRadius={ 2 } >
                            { userState.user.role }
                        </Box>
                    </Box>
                </Stack>
            </Box>
        </Box>
    </Box>
}
