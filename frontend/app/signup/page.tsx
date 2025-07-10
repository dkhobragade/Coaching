"use client"

import Button from "@/components/lowLevelComponent/Button";
import InputField from "@/components/lowLevelComponent/InputField";
import PasswordField from "@/components/lowLevelComponent/PasswordField";
import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import Image from "next/image";
import colors from "@/lib/color";
import PhoneIcon from '@mui/icons-material/Phone';
import { BounceBox } from "@/components/lowLevelComponent/Animation";
import { useRouter } from "next/navigation";

export default function signUp ()
{

    const router = useRouter()

    const onClickSignIn = () =>
    {
        router.push( '/signIn' )

    }

    return <Box width="100%" minHeight="100vh">
        <Grid container>
            <Grid size={ { xs: 12, md: 6 } } >
                <Box display="flex" alignItems="center" justifyContent="center" height="100vh" >
                    <Box width={ 400 } padding={ 1 }>
                        <Stack rowGap={ 0.3 } justifySelf="center" mb={ 2 }>
                            <Typography justifyContent="center" component="div" display="flex" gap={ 1 } fontSize={ 25 } textAlign="center" fontWeight={ 700 }>
                                Welcome
                                <BounceBox>
                                    aboard
                                </BounceBox>
                            </Typography>
                            <Typography >
                                Please create an account to get started
                            </Typography>
                        </Stack>
                        <Stack rowGap={ 1.5 } marginBottom={ 2 } >
                            <InputField fullWidth label="Name" icon={ <PersonIcon /> } />
                            <InputField fullWidth label="Email" icon={ <EmailIcon /> } />
                            <InputField fullWidth label="Mobile No." type="number" icon={ <PhoneIcon /> } />
                            <PasswordField />
                            <Box width="100%" height={ 40 } className='cursor-pointer' borderRadius={ 2 } bgcolor={ colors.Zinnia } padding={ 1 } >
                                <Typography justifySelf="center" fontSize={ 18 } fontWeight={ 600 } color={ colors.White } >
                                    Sign up
                                </Typography>
                            </Box>
                        </Stack>
                        <Divider>or</Divider>
                        <Stack rowGap={ 2 }>
                            <Button size="medium" startIcon={ <Image src='/socialMedia/google.png' alt="Google" width={ 20 } height={ 20 } /> } fullwidth variant="outlined" label="Sign in with Google" />
                            <Box display="flex" justifyContent="center" gap={ 1 } >
                                <Typography>
                                    Already have an  account?
                                </Typography>
                                <Typography onClick={ onClickSignIn } color={ colors.Zinnia } fontWeight={ 500 } className="underline cursor-pointer" >
                                    Sign in
                                </Typography>
                            </Box>
                        </Stack>
                    </Box>
                </Box>
            </Grid>
            <Grid size={ { xs: 12, md: 6 } } display={ { xs: 'none', md: 'block' } }  >
                <Box bgcolor={ colors.SmokeAndMirrors } width="100%" height="100%" alignContent="center" justifyItems="center" >
                    <BounceBox>
                        <Box className="w-48 h-25 rounded-t-full" bgcolor={ colors.Zinnia } />
                    </BounceBox>
                    <BounceBox>
                        <Box className="w-48 h-25 rounded-b-full blur-sm" bgcolor={ colors.Zinnia } />
                    </BounceBox>
                </Box>
            </Grid>
        </Grid>
    </Box>
}