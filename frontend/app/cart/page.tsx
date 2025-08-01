"use client"

import InputField from "@/components/lowLevelComponent/InputField";
import colors from "@/lib/color";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { cartPageDeliveryList } from "@/lib/constant";
import { useRouter } from "next/navigation";
import { BounceBox } from "@/components/lowLevelComponent/Animation";
import { useEffect, useState } from "react";
import { emptyCart, viewCart } from "@/lib/helper";
import { toast } from "react-toastify";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { ProductItem } from "@/lib/props";
import GlobalLoading from "../loading";
import { useSetAtom } from "jotai";
import { cartDetails, userCartItems } from "@/lib/store/userAtom";

export default function Cart ()
{

    const router = useRouter()
    const [ cartData, setCartData ] = useState<ProductItem[]>( [] )
    const setCartDetails = useSetAtom( cartDetails )
    const [ total, setTotal ] = useState<number>( 0 )
    const [ isLoading, setIsLoading ] = useState<boolean>( false )
    const setCartItemsVal = useSetAtom( userCartItems );

    useEffect( () =>
    {
        getCartDetails()
    }, [] )


    const getCartDetails = () =>
    {
        setIsLoading( true )

        viewCart().then( ( resp ) =>
        {
            setCartData( resp.cart.items )
            setTotal( resp.total_Amount )
            setIsLoading( false )
        } ).catch( ( error ) =>
        {
            console.log( error )
            toast.error( "Please try again! Refersh the Page." )
        } )
    }

    const column: GridColDef[] = [
        {
            field: 'Image', headerName: '', width: 300, sortable: false,
            filterable: false,
            renderCell: ( params: GridRenderCellParams ) => (
                <Image
                    src={ params.row.imageUrl }
                    alt="Img"
                    width={ 200 }
                    height={ 200 }
                    style={ { objectFit: 'cover', borderRadius: '8px', padding: '20px' } }
                />
            ),
        },
        { field: 'name', headerName: 'Name', minWidth: 150 },
        {
            field: 'description', headerName: 'Description', minWidth: 350, renderCell: ( params: GridRenderCellParams ) => (
                <Typography
                    variant="body2"
                    sx={ {
                        whiteSpace: 'normal',
                        wordWrap: 'break-word',
                        overflowWrap: 'break-word',
                        lineHeight: 1.4,
                    } }
                >
                    { params.row.description }
                </Typography>
            )
        },
        { field: 'price', headerName: 'Price', },
        {
            field: 'quantity', headerName: 'Quantity', width: 150,
            renderCell: ( params: GridRenderCellParams ) => (
                <Typography mx={ 1 }>{ params.row.quantity }</Typography>
            )
        },
        {
            field: '', headerName: 'Total Price', renderCell: ( params: GridRenderCellParams ) => (
                <Typography>
                    { params.row.quantity * params.row.price }
                </Typography>
            )
        },
    ]

    const renderDeliveryInfo = () =>
    {
        return <Grid marginTop={ 2 } container spacing={ 6 } justifyContent="center" >
            { cartPageDeliveryList.map( ( item ) =>
                <Grid key={ item.key } size={ { xs: 12, sm: 4, md: 3 } } display="flex" justifyContent="center" >
                    <Box borderRadius={ 5 } bgcolor={ colors.White } padding={ 1 } width={ { xs: 300, md: 250 } } height="fit-content" >
                        <Box display="flex" gap={ 1 }>
                            <Box display="flex" alignItems="center" justifyContent="center" width={ 70 } height={ 70 } borderRadius={ 5 } bgcolor={ colors[ item.color as keyof typeof colors ] } >
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
        if ( cartData.length == 0 )
        {
            toast.warning( "Please add items to the cart in order to checkout" )
            return
        }
        setCartDetails( {
            totalAmount: total,
            cartDetails: cartData,
        } )
        router.push( '/cart/payment' )
    }

    const onClickEmptyCart = () =>
    {
        setIsLoading( true )
        getCartDetails()

        emptyCart().then( ( resp ) =>
        {
            setCartData( resp.cart.items );
            setCartItemsVal( 0 )
        } ).catch( ( error ) =>
        {
            toast.error( error.message );
        } ).finally( () =>
        {
            getCartDetails();
            setIsLoading( false );
        } );
    }

    const CardTotalAmountAfterDiscount = () =>
    {
        return total * 1
    }

    return <Box sx={ { width: "100%", overflowX: "hidden" } } bgcolor={ colors.ChildofLight } width='100%' minHeight="100vh" padding={ 2 } >
        <Box display="flex" gap={ 1 }>
            <ShoppingCartIcon />
            <Typography fontWeight={ 660 } fontSize={ 20 }>
                Review Your Cart
            </Typography>
        </Box>

        <Box marginBottom={ 3 } sx={ { overflowX: 'hidden' } } bgcolor={ colors.White } padding={ 2 } borderRadius={ 5 } width="100%" minHeight="450px" >
            { isLoading ? (
                <GlobalLoading />
            ) : cartData.length === 0 ? (
                <Typography variant="h6" sx={ { mt: 4, textAlign: 'center', fontWeight: 500, alignSelf: 'center' } }>
                    Your cart is empty.
                </Typography>
            ) : (
                <>
                    <DataGrid
                        columns={ column }
                        rows={ cartData }
                        getRowId={ ( row ) => row._id }
                        getRowHeight={ () => 'auto' }
                    />
                    <Button
                        variant="contained"
                        sx={ {
                            justifySelf: 'end',
                            display: 'flex',
                            marginTop: 2,
                            backgroundColor: colors.Black,
                            color: colors.White,
                            fontWeight: 600,
                            borderRadius: 2,
                            "&:hover": {
                                backgroundColor: "#333",
                            },
                        } }
                        loading={ isLoading }
                        onClick={ onClickEmptyCart }
                    >
                        Empty Cart
                    </Button>
                </>
            ) }

        </Box>

        <Box bgcolor={ colors.White } padding={ 1.5 } borderRadius={ 5 }>
            <Grid container gap={ 0 }>
                <Grid size={ { md: 6, xs: 12, sm: 6 } } padding={ 2 } >
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
                </Grid>
                <Grid size={ { md: 6, xs: 12, sm: 6 } }>
                    <Box padding={ 2 } bgcolor={ colors.HoneyBird } width="100%" borderRadius={ 5 } >
                        <Stack spacing={ 2 }>
                            <Box>
                                <Typography fontWeight={ 700 }>
                                    Card Total
                                </Typography>
                            </Box>
                            <Box>
                                <Stack spacing={ 1 }>
                                    <Box display="flex" justifyContent="space-between" >
                                        <Typography >
                                            Card Subtotal
                                        </Typography>
                                        <Typography>
                                            { total }
                                        </Typography>
                                    </Box>
                                    <Box display="flex" justifyContent="space-between">
                                        <Typography >
                                            Discount
                                        </Typography>
                                        <Typography>
                                            { 0 }
                                        </Typography>
                                    </Box>
                                    <Box display="flex" justifyContent="space-between">
                                        <Typography fontWeight={ 700 } >
                                            Card Total
                                        </Typography>
                                        <Typography>
                                            ₹ { CardTotalAmountAfterDiscount() }
                                        </Typography>
                                    </Box>
                                    <Box onClick={ onClickCheckout } padding={ 1 } className="cursor-pointer" bgcolor={ colors.White } color={ colors.Black } borderRadius={ 5 } width='100%' height='20%' >
                                        <Typography justifySelf="center" fontWeight={ 600 } >
                                            Proceed to Checkout
                                        </Typography>
                                    </Box>
                                </Stack>
                            </Box>
                        </Stack>
                    </Box>
                </Grid>
            </Grid>
        </Box>
        <Grid marginTop={ 2 } container spacing={ 2 }>
            { renderDeliveryInfo() }
        </Grid>
    </Box>
}