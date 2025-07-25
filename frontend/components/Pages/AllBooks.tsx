"use client"

import { Box, Divider, Grid, Typography } from "@mui/material";
import { CartAnimatedBox } from "../lowLevelComponent/Animation";
import colors from "@/lib/color";
import { useEffect, useState } from "react";
import { fetchWrapper } from "@/lib/fetchWrapper";
import { toast } from "react-toastify";
import { ProductItem } from "@/lib/props";
import GlobalLoading from "@/app/loading";

export default function AllBooks ()
{
    const [ productList, setProductList ] = useState<ProductItem[]>( [] )
    const [ isLoading, setIsLoading ] = useState<boolean>( false )

    useEffect( () =>
    {
        getFetchAllProduct()
    }, [] )


    const getFetchAllProduct = () =>
    {
        setIsLoading( true )
        fetchWrapper( 'auth/products' ).then( ( resp ) =>
        {
            setProductList( resp.items )
        } ).catch( ( error ) =>
        {
            toast.error( error.message )
        } ).finally( () =>
        {
            setIsLoading( false )
        } )

    }

    return <Box width="100%" minHeight="100vh" padding={ 5 } bgcolor={ colors.BitSugar } >
        <Divider>
            <Typography fontSize={ 30 } fontWeight={ 900 } >
                Popular Books
            </Typography>

        </Divider>
        { isLoading ? <GlobalLoading /> :
            <Box display="flex" justifyContent="center" pt={ 5 } >
                <Box display="flex" gap={ 5 } >
                    <Grid container spacing={ 3 } justifyContent="center">
                        { productList.map( ( book, index ) => (
                            <Grid
                                key={ index }
                                size={ { xs: 12, sm: 6, md: 3 } }
                                display="flex"
                                justifyContent="center"
                            >
                                <CartAnimatedBox title={ book.name } price={ book.price } src={ book.imageUrl } alt="Image" id={ book._id } />
                            </Grid>
                        ) ) }
                    </Grid>
                </Box>
            </Box>
        }
    </Box>
}