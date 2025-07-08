"use client"

import Button from "@/components/lowLevelComponent/Button";
import CheckBox from "@/components/lowLevelComponent/Checkbox";
import InputField from "@/components/lowLevelComponent/InputField";
import PasswordField from "@/components/lowLevelComponent/PasswordField";
import colors from "@/lib/color";
import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function SignIn ()
{
    const router = useRouter()

    const onClickSingUp = () =>
    {
        router.push( '/signup' )
    }

    return (
        <Box width='35%' maxHeight={ 600 } justifySelf="center" alignContent="center" bgcolor={ colors.CapeHope } margin={ 2 } padding={ 5 } borderRadius={ 5 } >
            <Stack spacing={ 2 }>
                <Typography fontWeight={ 700 } justifyContent="center" display="flex" fontSize={ 30 } color={ colors.Black } >Sign in</Typography>
                <span className="flex justify-center" >Please login to continue to your account</span>
                <InputField fullWidth label="Email" />
                <PasswordField />
                <CheckBox label="Keep me logged in" />
                <Button size="medium" variant="contained" label="Sign in" />
            </Stack>
            <br />
            <Divider>or</Divider>
            <br />
            <Stack spacing={ 2 }>
                <Button size="medium" endIcon={ <Image src='/socialMedia/google.png' alt="Google" width={ 20 } height={ 20 } /> } fullwidth variant="outlined" label="Sign in with Google" />
                <Grid justifyContent="center" container spacing={ 1 }>
                    <Typography>
                        Need an account?
                    </Typography>
                    <Typography onClick={ onClickSingUp } color="blue" className="underline cursor-pointer" >
                        Create One
                    </Typography>
                </Grid>
            </Stack>
        </Box>
    );
}
