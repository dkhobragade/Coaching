"use client"

import { useEffect, useState } from "react";
import { Box, Button, IconButton, Stack, styled, Typography } from "@mui/material";
import { fetchWrapper } from "@/lib/fetchWrapper";
import { toast } from "react-toastify";
import { DataGrid, GridActionsCellItem, GridColDef, GridRowParams } from '@mui/x-data-grid';
import InputField from "@/components/lowLevelComponent/InputField";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { postWrapper } from "@/lib/postWrapper";
import { ScaleButton } from "@/components/lowLevelComponent/Animation";
import Image from "next/image";
import DeleteIcon from '@mui/icons-material/Delete';
import { error } from "console";

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
    const [ isLoading, setIsLoading ] = useState<boolean>( false )
    const [ selectedImg, setSelectedImg ] = useState<string | any>( null )
    const [ productList, setProductList ] = useState<any[]>( [] )

    useEffect( () =>
    {
        getUserList()
        getBookList()
    }, [] )

    const Bookscolumns: GridColDef[] = [
        { field: 'name', headerName: 'Name', width: 130 },
        {
            field: 'description',
            headerName: 'Description',
            width: 250,
        },
        {
            field: 'category',
            headerName: 'Category',
            width: 150,
        },
        {
            field: 'price',
            headerName: 'Price',
            width: 160,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 100,
            type: 'actions',
            getActions: ( params: GridRowParams ) => [
                <GridActionsCellItem
                    icon={ <DeleteIcon /> }
                    label="Delete"
                    onClick={ () => handleDelete( params.row._id ) }
                />,
            ],

        }
    ];


    const handleDelete = ( id: string ) =>
    {
        postWrapper( 'auth/del-product', { id: id } ).then( ( resp ) =>
        {
            toast.success( resp.message )
        } ).catch( ( error ) =>
        {
            toast.error( error.message )
        } ).finally( () =>
        {
            getBookList()
        } )
    }


    const getBookList = () =>
    {
        fetchWrapper( 'auth/products' ).then( ( resp ) =>
        {
            console.log( "products", resp )
            setProductList( resp.items )
        } ).catch( ( error ) =>
        {
            toast.error( error.message )
        } )
    }

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
        setIsLoading( true )
        const file = e.target.files[ 0 ];
        if ( !file ) return

        const reader = new FileReader()
        reader.readAsDataURL( file )

        reader.onload = async () =>
        {
            const base64Img = reader.result
            setSelectedImg( base64Img )
            await postWrapper( 'auth/img-upload', { imageUrl: base64Img } ).then( ( resp ) =>
            {
                setFormData( prev => ( { ...prev, imageUrl: resp.imageUrl } ) );
            } ).catch( ( error ) =>
            {
                toast.error( error.message )
            } ).finally( () =>
            {
                setIsLoading( false )
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
                <Typography fontSize={ 20 } fontWeight={ 500 } >
                    All Books
                </Typography>
                <DataGrid columns={ Bookscolumns } rows={ productList } getRowId={ ( row ) => row._id } />
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
                    { isLoading &&
                        <Image src={ selectedImg } alt="Image" width={ 300 } height={ 300 } />
                    }
                    <ScaleButton text="Submit" onClick={ handleSubmit } />
                </Box>
            </Box>
        </Stack>
    </Box>
}