"use client"

import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { fetchWrapper } from "@/lib/fetchWrapper";
import { toast } from "react-toastify";
import colors from "@/lib/color";
import GlobalLoading from "../loading";

export default function Account ()
{
    const [ orderDetails, setOrderDetails ] = useState<any[]>( [] )
    const [ isLoading, setIsLoading ] = useState<boolean>( false )

    useEffect( () =>
    {
        getOrderDetails()
    }, [] )

    const getOrderDetails = async () =>
    {
        setIsLoading( true )
        await fetchWrapper( 'auth/orders' ).then( ( resp ) =>
        {
            setOrderDetails( resp.orderDetails )
        } ).catch( ( error ) =>
        {
            toast.error( error.message )
        } ).finally( () =>
        {
            setIsLoading( false )
        } )
    }

    const renderItems = () =>
    {
        return (
            <Box>
                { orderDetails.map( ( order ) => (
                    <Box key={ order._id } mb={ 4 } p={ 2 } border={ `2px solid ${ order.paymentStatus === "Pending" ? colors.CoralRed : colors.JasmineGreen }` } borderRadius={ 2 }>
                        <Typography variant="h6" gutterBottom>
                            Order ID: { order._id }
                        </Typography>
                        <Box display="flex" gap={ 1 } >
                            <Typography fontSize={ 15 } fontWeight={ 600 }>
                                Total Amount :
                            </Typography>
                            <Typography fontSize={ 15 } fontWeight={ 400 }>
                                ₹{ order.totalAmount }
                            </Typography>
                        </Box>
                        <Box display="flex" gap={ 1 } >
                            <Typography fontSize={ 15 } fontWeight={ 600 }>
                                Payment Status :
                            </Typography>
                            <Typography fontSize={ 15 } fontWeight={ 400 }>
                                { order.paymentStatus }
                            </Typography>
                        </Box>
                        <Box display="flex" gap={ 1 } >
                            <Typography fontSize={ 15 } fontWeight={ 600 }>
                                Date :
                            </Typography>
                            <Typography fontSize={ 15 } fontWeight={ 400 }>
                                { new Date( order.createdAt ).toLocaleString() }
                            </Typography>
                        </Box>
                        { order.items.length > 0 ? (
                            order.items.map( ( item: any ) => (
                                <Box key={ item._id } mt={ 2 } p={ 1 } border={ `1px solid ${ colors.YrielYellow }` } borderRadius={ 1 }>
                                    <Box display="flex" gap={ 1 } >
                                        <Typography fontSize={ 15 } fontWeight={ 600 }>
                                            Name :
                                        </Typography>
                                        <Typography fontSize={ 15 } fontWeight={ 400 }>
                                            { item.name }
                                        </Typography>
                                    </Box>
                                    <Box display="flex" gap={ 1 } >
                                        <Typography fontSize={ 15 } fontWeight={ 600 }>
                                            Price :
                                        </Typography>
                                        <Typography fontSize={ 15 } fontWeight={ 400 }>
                                            { item.price }
                                        </Typography>
                                    </Box>
                                    <Box display="flex" gap={ 1 } >
                                        <Typography fontSize={ 15 } fontWeight={ 600 }>
                                            Quantity :
                                        </Typography>
                                        <Typography fontSize={ 15 } fontWeight={ 400 }>
                                            { item.quantity }
                                        </Typography>
                                    </Box>
                                    { item.description && (
                                        <Box display="flex" gap={ 1 } >
                                            <Typography fontSize={ 15 } fontWeight={ 600 }>
                                                Description:
                                            </Typography>
                                            <Typography fontSize={ 15 } fontWeight={ 400 }>
                                                { item.description }
                                            </Typography>
                                        </Box>
                                    ) }
                                </Box>
                            ) )
                        ) : (
                            <Typography color="text.secondary">No items in this order</Typography>
                        ) }
                    </Box>
                ) )
                }
            </Box >
        );
    };

    return <Box width="100%" minHeight="100vh" padding={ 2 }>
        <Typography fontSize={ 20 } mb={ 2 } fontWeight={ 600 } >
            My Orders
        </Typography>
        { isLoading ? <GlobalLoading /> :
            <Box width="100%" padding={ 2 } borderRadius={ 5 } minHeight="50vh"  >
                { renderItems() }
            </Box>
        }
    </Box>
}