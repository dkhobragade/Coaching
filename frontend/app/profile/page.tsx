import colors from "@/lib/color";
import { Box, Stack, Typography } from "@mui/material";

export default function Profile ()
{

    return <Box width="100%" minHeight="100vh">
        <Box width="50%" justifyContent="center" justifySelf="center" margin={ 2 } borderRadius={ 5 } padding={ 2 } bgcolor={ colors.Babe } >
            <Typography fontSize={ 20 } fontWeight={ 600 }  >
                Personal Info
            </Typography>
            <Box justifySelf="center" width={ 120 } borderRadius={ 50 } height={ 120 } bgcolor={ colors.BlueAstro } >
            </Box>
            <Box width="100%" bgcolor={ colors.White } padding={ 2 } marginTop={ 5 } justifySelf="center" borderRadius={ 5 } >
                <Stack spacing={ 2 }>
                    <Box>
                        <Typography fontSize={ 15 } fontWeight={ 500 } >
                            Name
                        </Typography>
                        <Box width="100%" className='cursor-pointer' bgcolor={ colors.BitSugar } padding={ 1 } borderRadius={ 2 } >
                            Dikshant
                        </Box>
                    </Box>
                    <Box>
                        <Typography fontSize={ 15 } fontWeight={ 500 } >
                            Mobile No.
                        </Typography>
                        <Box width="100%" className='cursor-pointer' bgcolor={ colors.BitSugar } padding={ 1 } borderRadius={ 2 } >
                            Dikshant
                        </Box>
                    </Box>
                    <Box>
                        <Typography fontSize={ 15 } fontWeight={ 500 } >
                            Email
                        </Typography>
                        <Box width="100%" className='cursor-pointer' bgcolor={ colors.BitSugar } padding={ 1 } borderRadius={ 2 } >
                            Dikshant
                        </Box>
                    </Box>
                    <Box>
                        <Typography fontSize={ 15 } fontWeight={ 500 } >
                            Role
                        </Typography>
                        <Box width="100%" className='cursor-pointer' bgcolor={ colors.BitSugar } padding={ 1 } borderRadius={ 2 } >
                            Dikshant
                        </Box>
                    </Box>
                </Stack>
            </Box>
        </Box>
    </Box>
}
