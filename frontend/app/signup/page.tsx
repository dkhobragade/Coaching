import Button from "@/components/lowLevelComponent/Button";
import InputField from "@/components/lowLevelComponent/InputField";
import PasswordField from "@/components/lowLevelComponent/PasswordField";
import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import Image from "next/image";

export default function signUp ()
{
    return <Grid spacing={ 5 } container padding={ 2 } >
        <Grid size={ { xs: 12, md: 5 } } order={ { xs: 1, md: 2 } } padding={ 2 } >
            <Typography>LOGO</Typography>
            <Stack spacing={ 2 }>
                <Typography fontWeight={ 600 } fontSize={ 30 }>Sign up</Typography>
                <span>Please login to continue to your account</span>
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
        </Grid>
        <Grid size={ { xs: 12, md: 7 } } order={ { xs: 2, md: 1 } } >
            <Box height="100vh" bgcolor="red" padding={ 2 } borderRadius={ 2 } >

            </Box>
        </Grid>
    </Grid>
}