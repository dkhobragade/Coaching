"use client"

import { Box, Divider, Grid, Typography } from "@mui/material";
import { CartAnimatedBox } from "../lowLevelComponent/Animation";
import colors from "@/lib/color";
import { useEffect, useState } from "react";
import { fetchWrapper } from "@/lib/fetchWrapper";
import { toast } from "react-toastify";

export default function AllBooks ()
{
    const [ productList, setProductList ] = useState<any[]>( [] )

    useEffect( () =>
    {
        getFetchAllProduct()
    }, [] )


    const getFetchAllProduct = () =>
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

    return <Box width="100%" minHeight="100vh" padding={ 5 } bgcolor={ colors.BitSugar } >
        <Divider>
            <Typography fontSize={ 30 } fontWeight={ 900 } >
                Popular Books
            </Typography>

        </Divider>
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
                            <CartAnimatedBox title={ book.name } price={ book.price } src={ book.imageUrl } alt={ "" } id={ book._id } />
                        </Grid>
                    ) ) }
                </Grid>
            </Box>
        </Box>
    </Box>
}