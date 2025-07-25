"use client"

import { useEffect, useState } from "react";
import colors from "@/lib/color";
import { Box, Stack, Typography } from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InputField from "@/components/lowLevelComponent/InputField";
import Button from "@/components/lowLevelComponent/Button";
import { useAtom } from "jotai";
import { userAtom } from "@/lib/store/userAtom";
import { postWrapper } from "@/lib/postWrapper";
import { toast } from "react-toastify";
import QRCode from "@/components/Pages/QRCode";

export default function Payment ()
{
    const [ userAtomState ] = useAtom( userAtom )

    const [ formData, setFormData ] = useState( {
        firstName: userAtomState.user.name,
        lastName: '',
        email: userAtomState.user.email,
        mobileno: '',
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

    const onSubmitAddressDetails = () =>
    {

        postWrapper( 'auth/add-address', {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            mobileno: formData.mobileno,
            address: formData.address,
            city: formData.city,
            state: formData.state,
            pinCode: formData.pinCode
        } ).then( ( resp ) =>
        {
            toast.success( resp.message )

        } ).catch( ( error ) =>
        {
            toast.error( error.message )
        } ).finally( () =>
        {
            setFormData( {
                firstName: '',
                lastName: '',
                email: '',
                mobileno: '',
                address: '',
                city: '',
                state: '',
                pinCode: '',
            } )
        } )

    }

    return <Box bgcolor={ colors.ChildofLight } width="100%" minHeight="100vh" padding={ 2 } >

        <Box width={ { md: '70%', sm: '100%', xs: '100%' } } minHeight="fit-content"
            justifyItems={ { md: 'center', xs: 'normal', sm: 'normal' } }
            justifySelf="center"
            maxHeight={ 500 } bgcolor={ colors.White } padding={ 5 } borderRadius={ 5 } >
            <Box display="flex" marginBottom={ 4 } >
                <LocationOnIcon />
                <Typography fontWeight={ 600 } fontSize={ 20 }>
                    Address Form
                </Typography>
            </Box>
            <Stack spacing={ 0.5 }>
                <Box display="flex" flexDirection={ { md: 'row', sm: 'column', xs: 'column' } } >
                    <InputField value={ formData.firstName } fullWidth label="First Name" onChange={ ( e: React.ChangeEvent<HTMLInputElement> ) => onchangeFirstName( 'firstName', e ) } />
                    <InputField value={ formData.lastName } fullWidth label="Last Name" onChange={ ( e: React.ChangeEvent<HTMLInputElement> ) => onchangeFirstName( 'lastName', e ) } />
                </Box>
                <Box display="flex" flexDirection={ { md: 'row', sm: 'column', xs: 'column' } } >
                    <InputField value={ formData.email } fullWidth label="Email" onChange={ ( e: React.ChangeEvent<HTMLInputElement> ) => onchangeFirstName( 'email', e ) } />
                    <InputField value={ formData.mobileno } type="number" fullWidth label="Mobile No." onChange={ ( e: React.ChangeEvent<HTMLInputElement> ) => onchangeFirstName( 'mobileno', e ) } />
                </Box>
                <Box>
                    <InputField value={ formData.address } fullWidth label="Resisdence" onChange={ ( e: React.ChangeEvent<HTMLInputElement> ) => onchangeFirstName( 'address', e ) } />
                </Box>
                <Box display="flex" flexDirection={ { md: 'row', sm: 'row', xs: 'column' } }>
                    <InputField value={ formData.city } fullWidth label="City" onChange={ ( e: React.ChangeEvent<HTMLInputElement> ) => onchangeFirstName( 'city', e ) } />
                    <InputField value={ formData.state } fullWidth label="State" onChange={ ( e: React.ChangeEvent<HTMLInputElement> ) => onchangeFirstName( 'state', e ) } />
                    <InputField value={ formData.pinCode } type="number" label="ZIP/Postal Code" fullWidth onChange={ ( e: React.ChangeEvent<HTMLInputElement> ) => onchangeFirstName( 'pinCode', e ) } />
                </Box>
                <Button onClick={ onSubmitAddressDetails } label="Submit" variant="contained" fullWidth />
            </Stack>
        </Box>
        <QRCode />
    </Box>
}