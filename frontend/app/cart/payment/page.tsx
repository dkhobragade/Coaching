import colors from "@/lib/color";
import { Box, FormControl, Grid, GridLegacy, InputLabel, MenuItem, Select, Stack, TextField, Typography } from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InputField from "@/components/lowLevelComponent/InputField";
import { indianStates } from "@/lib/constant";
import Button from "@/components/lowLevelComponent/Button";

export default function payment ()
{
    return <Box bgcolor={ colors.ChildofLight } width="100%" height="100vh" padding={ 2 } >

        <Box width="80%" maxHeight={ 500 } bgcolor={ colors.White } padding={ 5 } borderRadius={ 5 } >
            <Box display="flex" marginBottom={ 4 } >
                <LocationOnIcon />
                <Typography fontWeight={ 600 } fontSize={ 20 }>
                    Address Form
                </Typography>
            </Box>
            <Stack spacing={ 2 }>
                <Grid container spacing={ 2 }>
                    <Grid size={ 6 }>
                        <InputField fullWidth label="First Name" />
                    </Grid>
                    <Grid size={ 6 }>
                        <InputField fullWidth label="Last Name" />
                    </Grid>
                </Grid>
                <Grid container spacing={ 2 }>
                    <Grid size={ 6 }>
                        <InputField fullWidth label="Email" />
                    </Grid>
                    <Grid size={ 6 }>
                        <InputField fullWidth label="Mobile No. " />
                    </Grid>
                </Grid>
                <Box>
                    <InputField fullWidth label="Resisdence" />
                </Box>
                <Grid container spacing={ 2 }>
                    <Grid size={ 4 }>
                        <InputField fullWidth label="City" />
                    </Grid>
                    <Grid size={ 4 } mt={ 1 }>
                        <FormControl fullWidth>
                            <InputLabel id="select-label">State</InputLabel>
                            <Select
                                labelId="select-label"
                                fullWidth
                                size="small"
                            >
                                { indianStates.map( ( option ) => (
                                    <MenuItem defaultValue='0' key={ option.value } value={ option.value }>
                                        { option.label }
                                    </MenuItem>
                                ) ) }
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid size={ 4 }>
                        <InputField label="ZIP/Postal Code" fullWidth />
                    </Grid>
                </Grid>
                <Button label="Submit" variant="contained" fullwidth />
            </Stack>
        </Box>
    </Box>
}