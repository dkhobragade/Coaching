"use client"

import { BounceBox } from "@/components/lowLevelComponent/Animation";
import Button from "@/components/lowLevelComponent/Button";
import CheckBox from "@/components/lowLevelComponent/Checkbox";
import InputField from "@/components/lowLevelComponent/InputField";
import PasswordField from "@/components/lowLevelComponent/PasswordField";
import colors from "@/lib/color";
import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import EmailIcon from '@mui/icons-material/Email';

export default function SignIn ()
{
    const router = useRouter()

    const onClickSingUp = () =>
    {
        router.push( '/signup' )
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
                            <InputField fullWidth label="Email" icon={ <EmailIcon /> } />
                            <PasswordField />
                            <CheckBox label="Keep me logged in" />
                            <Box width="100%" height={ 40 } className='cursor-pointer' borderRadius={ 2 } bgcolor={ colors.GloomyPurple } padding={ 1 } >
                                <Typography justifySelf="center" fontSize={ 18 } fontWeight={ 600 } color={ colors.White } >
                                    Sign In
                                </Typography>
                            </Box>
                            <Button size="medium" startIcon={ <Image src='/socialMedia/google.png' alt="Google" width={ 20 } height={ 20 } /> } fullwidth variant="outlined" label="Sign in with Google" />
                        </Stack>
                        <Divider>or</Divider>
                        <Box display="flex" justifySelf="center" gap={ 1 } >
                            <Typography>
                                Need an account?
                            </Typography>
                            <Typography onClick={ onClickSingUp } color={ colors.GloomyPurple } fontWeight={ 500 } className="underline cursor-pointer" >
                                Create One
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Grid>
            <Grid size={ { xs: 12, md: 6 } } display={ { xs: 'none', md: 'block' } }  >
                <Box bgcolor='#F3F5F9' width="100%" height="100%" alignContent="center" justifyItems="center" >
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
