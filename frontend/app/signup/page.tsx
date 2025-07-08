import Button from "@/components/lowLevelComponent/Button";
import InputField from "@/components/lowLevelComponent/InputField";
import PasswordField from "@/components/lowLevelComponent/PasswordField";
import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import Image from "next/image";
import colors from "@/lib/color";

export default function signUp ()
{
    return <Box padding={ 2 } width='35%' maxHeight={ 600 } justifySelf="center" alignContent="center" bgcolor={ colors.CapeHope } margin={ 2 } borderRadius={ 5 } >
        <Stack spacing={ 2 }>
            <Typography justifyContent="center" display="flex" fontWeight={ 600 } fontSize={ 30 } color={ colors.Black }>Sign up</Typography>
            <span className="flex justify-center">Please login to continue to your account</span>
            <InputField fullWidth label="Name" icon={ <PersonIcon /> } />
            <InputField fullWidth label="Email" icon={ <EmailIcon /> } />
            <InputField fullWidth label="Mobile No." icon={ <CallIcon /> } />
            <PasswordField />
            <Button size="medium" variant="contained" label="Sign up" />
        </Stack>
        <br />
        <Divider>or</Divider>
        <br />
        <Stack spacing={ 2 }>
            <Button size="medium" endIcon={ <Image src='/socialMedia/google.png' alt="Google" width={ 20 } height={ 20 } /> } fullwidth variant="outlined" label="Sign in with Google" />
            <Grid justifyContent="center" container spacing={ 1 }>
                <Typography>
                    Already have an  account?
                </Typography>
                <Typography color="blue" className="underline cursor-pointer" >
                    Sign in
                </Typography>
            </Grid>
        </Stack>
    </Box>
}