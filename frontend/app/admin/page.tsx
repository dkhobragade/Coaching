"use client"

import { useEffect, useState } from "react";
import { Box, Button, Stack, styled, Typography } from "@mui/material";
import { fetchWrapper } from "@/lib/fetchWrapper";
import { toast } from "react-toastify";
import { DataGrid } from '@mui/x-data-grid';
import InputField from "@/components/lowLevelComponent/InputField";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { postWrapper } from "@/lib/postWrapper";
import { ScaleButton } from "@/components/lowLevelComponent/Animation";

const columns = [
    { field: 'fullName', headerName: 'First name', width: 130 },
    {
        field: 'email',
        headerName: 'Email',
        width: 250,
    },
    {
        field: 'mobile',
        headerName: 'Mobile No.',
        width: 150,
    },
    {
        field: 'role',
        headerName: 'Role',
        width: 160,
    },
    {
        field: 'createdAt',
        headerName: 'Created At',
        width: 250,
    },
];

const VisuallyHiddenInput = styled( 'input' )( {
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
} );

export default function Admin ()
{

    const [ userList, setUserList ] = useState<any[]>( [] )
    const [ formData, setFormData ] = useState( {
        name: '',
        description: '',
        price: '',
        category: '',
        imageUrl: '',
    } );

    useEffect( () =>
    {
        getUserList()
    }, [] )

    const getUserList = () =>
    {
        fetchWrapper( 'auth/get-users' ).then( ( resp ) =>
        {
            setUserList( resp )

        } ).catch( ( error ) =>
        {
            toast.error( "Error while getting the user list" )
        } )
    }

    const onChangeName = ( e: React.ChangeEvent<HTMLInputElement> ) =>
    {
        setFormData( prev => ( { ...prev, name: e.target.value } ) );
    }
    const onChangeDescription = ( e: React.ChangeEvent<HTMLInputElement> ) =>
    {
        setFormData( prev => ( { ...prev, description: e.target.value } ) );
    }
    const onChangeCategory = ( e: React.ChangeEvent<HTMLInputElement> ) =>
    {
        setFormData( prev => ( { ...prev, category: e.target.value } ) );
    }
    const onChangePrice = ( e: React.ChangeEvent<HTMLInputElement> ) =>
    {
        setFormData( prev => ( { ...prev, price: e.target.value } ) );
    }

    const handleImgChange = async ( e: any ) =>
    {
        const file = e.target.files[ 0 ];
        if ( !file ) return

        const reader = new FileReader()
        reader.readAsDataURL( file )

        reader.onload = async () =>
        {
            const base64Img = reader.result
            await postWrapper( 'auth/img-upload', { imageUrl: base64Img } ).then( ( resp ) =>
            {
                setFormData( prev => ( { ...prev, imageUrl: resp.imageUrl } ) );
            } ).catch( ( error ) =>
            {
                toast.error( error.message )
            } )
        }
    }

    const handleSubmit = () =>
    {

        postWrapper( 'auth/add-product', {
            name: formData.name,
            description: formData.description,
            price: formData.price,
            category: formData.category,
            imageUrl: formData.imageUrl
        } ).then( ( resp ) =>
        {
            toast.success( resp.message )
        } ).catch( ( error ) =>
        {
            toast.error( error.message )
        } ).finally( () =>
        {
            setFormData( {
                name: '',
                description: '',
                price: '',
                category: '',
                imageUrl: ''
            } )
        } )
    }

    return <Box width="100%" minHeight="100vh" p={ 2 }>
        <Stack spacing={ 10 }>
            <Box>
                <Typography fontSize={ 20 } fontWeight={ 500 } >
                    All Users
                </Typography>
                <DataGrid columns={ columns } rows={ userList } getRowId={ ( row ) => row._id } />
            </Box>
            <Box>
                <Typography fontSize={ 20 } fontWeight={ 500 }>
                    Add Books
                </Typography>
                <Box display="flex" flexDirection="column" >
                    <InputField onChange={ onChangeName } value={ formData.name } label="Name" />
                    <InputField onChange={ onChangeDescription } value={ formData.description } label="Description" />
                    <InputField onChange={ onChangeCategory } value={ formData.category } label="Category" />
                    <InputField type="number" onChange={ onChangePrice } value={ formData.price } label="Price" />
                    <Button component="label" variant="contained" startIcon={ <CloudUploadIcon /> } >
                        Add Image
                        <VisuallyHiddenInput
                            type="file"
                            onChange={ handleImgChange }
                            multiple
                        />
                    </Button>
                    <ScaleButton text="Submit" onClick={ handleSubmit } />
                </Box>
            </Box>
        </Stack>
    </Box>
}