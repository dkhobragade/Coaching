"use client"

import InputField from "@/components/lowLevelComponent/InputField";
import colors from "@/lib/color";
import { Box, Button, Divider, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { cartPageDeliveryList } from "@/lib/constant";
import { useRouter } from "next/navigation";
import { BounceBox } from "@/components/lowLevelComponent/Animation";
import { useEffect, useState } from "react";
import { viewCart } from "@/lib/cartHelper";
import { toast } from "react-toastify";
import { fetchWrapper } from "@/lib/fetchWrapper";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

export default function Cart ()
{

    const router = useRouter()
    const [ cartData, setCartData ] = useState<any[]>( [] )

    useEffect( () =>
    {
        getCartDetails()
    }, [] )


    const getCartDetails = () =>
    {

        viewCart().then( ( resp ) =>
        {
            setCartData( resp.cart.items )
        } ).catch( ( error ) =>
        {
            console.log( error )
            toast.error( "Please after some time." )
        } )

    }

    const column: GridColDef[] = [
        { field: 'name', headerName: 'Product', },
        { field: 'price', headerName: 'Price', },
        { field: 'quantity', headerName: 'Quantity', },
        { field: '', headerName: 'Total Price', },
    ]

    const renderDeliveryInfo = () =>
    {
        return <Grid marginTop={ 2 } container spacing={ 6 } justifyContent="center" >
            { cartPageDeliveryList.map( ( item ) =>
                <Grid key={ item.key } size={ { xs: 12, sm: 4, md: 3 } } display="flex" justifyContent="center" >
                    <Box borderRadius={ 5 } bgcolor={ colors.White } padding={ 1 } width={ { xs: 300, md: 250 } } height={ 90 } >
                        <Box display="flex" gap={ 1 }>
                            <Box alignContent="center" justifyItems="center" width={ 70 } height={ 70 } borderRadius={ 5 } bgcolor={ colors[ item.color as keyof typeof colors ] } >
                                <BounceBox>
                                    <Image loading="lazy" src={ item.img } alt={ item.alt } width={ item.width } height={ item.height } />
                                </BounceBox>
                            </Box>
                            <Box alignContent="center" justifyItems="start" >
                                <Typography fontWeight={ 600 } >{ item.text }</Typography>
                                <Typography>{ item.desc }</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            ) }
        </Grid>
    }

    const onClickCheckout = () =>
    {
        router.push( '/cart/payment' )
    }

    const onClickEmptyCart = () =>
    {
        fetchWrapper( 'auth/empty-cart' ).then( ( resp ) =>
        {
            setCartData( resp.cart.items )
        } ).catch( ( error ) =>
        {
            toast.error( error.message )
        } )
    }

    return <Box sx={ { width: "100%", overflowX: "hidden" } } bgcolor={ colors.ChildofLight } width='100%' minHeight="100vh" padding={ 2 } >
        <Box display="flex" gap={ 1 }>
            <ShoppingCartIcon />
            <Typography fontWeight={ 660 } fontSize={ 20 }>
                Review Your Cart
            </Typography>
        </Box>
        <Grid container spacing={ 1 }>
            <Grid size={ { xs: 12, md: 8 } } order={ { xs: 1 } } padding={ 2 }>
                <Box sx={ { overflowX: 'hidden' } } bgcolor={ colors.White } padding={ 2 } borderRadius={ 5 } width="100%" maxHeight='450px' minHeight="450px" >
                    <DataGrid columns={ column } rows={ cartData } getRowId={ ( row ) => row._id } />
                </Box>
                <Box mt={ 2 } justifySelf="end"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    onClick={ onClickEmptyCart } className="cursor-pointer" bgcolor={ colors.Black } color={ colors.White } borderRadius={ 5 } width='40%' height='8%' >
                    <Typography fontWeight={ 600 } >
                        Empty Cart
                    </Typography>
                </Box>
            </Grid>
            <Grid size={ { xs: 12, md: 4 } } order={ { xs: 2 } } padding={ 2 }  >
                <Box bgcolor={ colors.White } padding={ 1.5 } borderRadius={ 5 }>
                    <Stack>
                        <Typography fontWeight={ 700 } mb={ 1 } >Coupon Code</Typography>
                        <Typography fontSize="0.875rem" color="text.secondary" mb={ 1 }>
                            Enter your code to get discounts on your cart total.
                        </Typography>
                        <InputField label="Coupon Code " />
                        <Button
                            variant="contained"
                            fullWidth
                            sx={ {
                                marginTop: 2,
                                backgroundColor: colors.Black,
                                color: colors.White,
                                fontWeight: 600,
                                borderRadius: 2,
                                "&:hover": {
                                    backgroundColor: "#333",
                                },
                            } }
                        >
                            Apply
                        </Button>
                    </Stack>
                    <Divider sx={ { my: 2, borderBottomWidth: 1.5, borderColor: '#999' } } />
                    <Box padding={ 2 } bgcolor={ colors.HoneyBird } width="100%" borderRadius={ 5 } >
                        <Stack spacing={ 2 }>
                            <Box>
                                <Typography fontWeight={ 700 }>
                                    Card Total
                                </Typography>
                            </Box>
                            <Box>
                                <Stack spacing={ 1 }>
                                    <Typography >
                                        Card Subtotal
                                    </Typography>
                                    <Typography >
                                        Discount
                                    </Typography>
                                    <Typography fontWeight={ 700 }>
                                        Card Total
                                    </Typography>
                                    <Box onClick={ onClickCheckout } padding={ 1 } className="cursor-pointer" bgcolor={ colors.White } color={ colors.Black } borderRadius={ 5 } width='100%' height='20%' >
                                        <Typography justifySelf="center" fontWeight={ 600 } >
                                            Proceed to Checkout
                                        </Typography>
                                    </Box>
                                </Stack>
                            </Box>
                        </Stack>
                    </Box>
                </Box>
            </Grid>
        </Grid>
        <Grid marginTop={ 2 } container spacing={ 2 }>
            { renderDeliveryInfo() }
        </Grid>
    </Box>
}