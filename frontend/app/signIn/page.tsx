"use client"

import { useState } from "react";
import { BounceBox } from "@/components/lowLevelComponent/Animation";
import CheckBox from "@/components/lowLevelComponent/Checkbox";
import InputField from "@/components/lowLevelComponent/InputField";
import PasswordField from "@/components/lowLevelComponent/PasswordField";
import colors from "@/lib/color";
import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import EmailIcon from '@mui/icons-material/Email';
import { toast } from "react-toastify";
import { postWrapper } from "@/lib/postWrapper";
import { useSetAtom } from "jotai";
import { userAtom } from "@/lib/store/userAtom";
import Button from "@/components/lowLevelComponent/Button";

export default function SignIn ()
{
    const router = useRouter()
    const setUserAtomState = useSetAtom( userAtom )
    const [ isLoading, setIsLoading ] = useState<boolean>( false )
    const [ userData, setUserData ] = useState( {
        email: '',
        password: ''
    } )

    const onClickSingUp = () =>
    {
        router.push( '/signup' )
    }

    const onClickSubmit = () =>
    {
        if ( userData.password.trim() == '' || userData.email.trim() == '' )
        {
            return toast.error( "Please fill all the fields" )
        }
        else
        {
            setIsLoading( true )
            postWrapper( 'auth/signin', {
                email: userData.email,
                password: userData.password
            } ).then( ( resp ) =>
            {
                if ( resp.message )
                {
                    toast.success( resp.message )
                    router.push( '/' )
                }
                setUserAtomState( { isLoggedIn: true, user: { name: resp.fullName, email: resp.email, id: resp._id, mobile: resp.mobile, role: resp.role, img: resp.profilePic } } )

            } ).catch( ( error ) =>
            {
                toast.error( error.message )

            } ).finally( () =>
            {
                setIsLoading( false )
                setUserData( {
                    email: '',
                    password: ''
                } )
            } )
        }
    }


    const onChangeEmail = ( e: React.ChangeEvent<HTMLInputElement> ) =>
    {
        setUserData( prev => ( { ...prev, email: e.target.value } ) );
    }

    const onChangePassword = ( e: React.ChangeEvent<HTMLInputElement> ) =>
    {
        setUserData( prev => ( { ...prev, password: e.target.value } ) );
    }

    return <Box width="100%" minHeight="100vh">
        <Grid container>
            <Grid size={ { xs: 12, md: 6 } } order={ { xs: 2, md: 1 } } >
                <Box display="flex" alignItems="center" justifyContent="center" height="100vh" >
                    <Box width={ 400 } padding={ 1 }>
                        <Stack rowGap={ 0.3 } justifySelf="center" mb={ 2 }>
                            <Typography justifyContent="center" component="div" display="flex" gap={ 1 } fontSize={ 25 } textAlign="center" fontWeight={ 700 }>
                                Welcome
                                <BounceBox>
                                    back
                                </BounceBox>
                            </Typography>
                            <Typography >
                                Please login to continue to your account
                            </Typography>
                        </Stack>
                        <Stack rowGap={ 1.5 } marginBottom={ 2 } >
                            <InputField value={ userData.email } onChange={ onChangeEmail } fullWidth label="Email" icon={ <EmailIcon /> } />
                            <PasswordField value={ userData.password } onChange={ onChangePassword } />
                            <CheckBox label="Keep me logged in" />
                            <Button label="Sign In" onClick={ onClickSubmit } loading={ isLoading } bgColor={ colors.GloomyPurple } />
                        </Stack>
                        <Divider>or</Divider>
                        <Stack rowGap={ 2 }>
                            {/* <Button size="medium" startIcon={ <Image src='/socialMedia/google.png' alt="Google" width={ 20 } height={ 20 } /> } fullwidth variant="outlined" label="Sign in with Google" /> */ }
                            <Box display="flex" justifyContent="center" gap={ 1 } >
                                <Typography>
                                    Need an account?
                                </Typography>
                                <Typography onClick={ onClickSingUp } color={ colors.GloomyPurple } fontWeight={ 500 } className="underline cursor-pointer" >
                                    Create One
                                </Typography>
                            </Box>
                        </Stack>
                    </Box>
                </Box>
            </Grid>
            <Grid size={ { xs: 12, md: 6 } } display={ { xs: 'none', md: 'block' } }  >
                <Box bgcolor={ colors.SmokeAndMirrors } width="100%" height="100%" alignContent="center" justifyItems="center" >
                    <BounceBox>
                        <Box className="w-48 h-25 rounded-t-full" bgcolor={ colors.GloomyPurple } />
                    </BounceBox>
                    <BounceBox>
                        <Box className="w-48 h-25 rounded-b-full blur-sm" bgcolor={ colors.GloomyPurple } />
                    </BounceBox>
                </Box>
            </Grid>
        </Grid>
    </Box>
}
