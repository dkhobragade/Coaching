"use client"

import { useEffect, useState } from "react";
import colors from "@/lib/color";
import { Box, Grid, Stack, Typography } from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InputField from "@/components/lowLevelComponent/InputField";
import Button from "@/components/lowLevelComponent/Button";
import { useAtom } from "jotai";
import { userAtom } from "@/lib/store/userAtom";

export default function payment ()
{
    const [ userAtomState ] = useAtom( userAtom )

    const [ formData, setFormData ] = useState( {
        firstName: userAtomState.user.name,
        lastName: '',
        email: userAtomState.user.email,
        Mobileno: '',
        address: '',
        city: '',
        state: '',
        pinCode: ''
    } )

    useEffect( () =>
    {
        if ( userAtomState.isLoggedIn && userAtomState.user?.name )
        {
            setFormData( ( prev ) => ( {
                ...prev,
                firstName: userAtomState.user.name,
                email: userAtomState.user.email
            } ) );
        }

    }, [ userAtomState ] )


    const onchangeFirstName = ( field: string, e: React.ChangeEvent<HTMLInputElement> ) =>
    {
        setFormData( prev => ( { ...prev, [ field ]: e.target.value } ) );
    }

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
                        <InputField value={ formData.firstName } fullWidth label="First Name" onChange={ ( e: React.ChangeEvent<HTMLInputElement> ) => onchangeFirstName( 'firstName', e ) } />
                    </Grid>
                    <Grid size={ 6 }>
                        <InputField value={ formData.lastName } fullWidth label="Last Name" onChange={ ( e: React.ChangeEvent<HTMLInputElement> ) => onchangeFirstName( 'lastName', e ) } />
                    </Grid>
                </Grid>
                <Grid container spacing={ 2 }>
                    <Grid size={ 6 }>
                        <InputField value={ formData.email } fullWidth label="Email" onChange={ ( e: React.ChangeEvent<HTMLInputElement> ) => onchangeFirstName( 'email', e ) } />
                    </Grid>
                    <Grid size={ 6 }>
                        <InputField value={ formData.Mobileno } type="number" fullWidth label="Mobile No." onChange={ ( e: React.ChangeEvent<HTMLInputElement> ) => onchangeFirstName( 'Mobileno', e ) } />
                    </Grid>
                </Grid>
                <Box>
                    <InputField value={ formData.address } fullWidth label="Resisdence" onChange={ ( e: React.ChangeEvent<HTMLInputElement> ) => onchangeFirstName( 'address', e ) } />
                </Box>
                <Grid container spacing={ 2 }>
                    <Grid size={ 4 }>
                        <InputField value={ formData.city } fullWidth label="City" onChange={ ( e: React.ChangeEvent<HTMLInputElement> ) => onchangeFirstName( 'city', e ) } />
                    </Grid>
                    <Grid size={ 4 }>
                        <InputField value={ formData.state } fullWidth label="State" onChange={ ( e: React.ChangeEvent<HTMLInputElement> ) => onchangeFirstName( 'state', e ) } />
                    </Grid>
                    <Grid size={ 4 }>
                        <InputField value={ formData.pinCode } type="number" label="ZIP/Postal Code" fullWidth onChange={ ( e: React.ChangeEvent<HTMLInputElement> ) => onchangeFirstName( 'pinCode', e ) } />
                    </Grid>
                </Grid>
                <Button label="Submit" variant="contained" fullwidth />
            </Stack>
        </Box>
    </Box>
}