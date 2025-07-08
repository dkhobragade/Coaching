import Button from "@/components/lowLevelComponent/Button";
import CheckBox from "@/components/lowLevelComponent/Checkbox";
import InputField from "@/components/lowLevelComponent/InputField";
import PasswordField from "@/components/lowLevelComponent/PasswordField";
import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";

export default function signIn ()
{
    return (
        <Grid spacing={ 5 } container padding={ 2 } >
            <Grid size={ { xs: 12, md: 5 } } order={ { xs: 1, md: 1 } } padding={ 2 } >
                <Typography>LOGO</Typography>
                <Stack spacing={ 2 }>
                    <Typography fontWeight={ 600 } fontSize={ 30 }>Sign in</Typography>
                    <span>Please login to continue to your account</span>
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
                        <Typography color="blue" className="underline cursor-pointer" >
                            Create One
                        </Typography>
                    </Grid>
                </Stack>
            </Grid>
            <Grid size={ { xs: 12, md: 7 } } order={ { xs: 2, md: 2 } } >
                <Box height="100vh" bgcolor="red" padding={ 2 } borderRadius={ 2 } >

                </Box>
            </Grid>
        </Grid>
    );
}
