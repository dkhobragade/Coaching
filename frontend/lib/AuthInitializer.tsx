"use client"

import { useAtom, useSetAtom } from "jotai"
import { userAtom, userCartItems } from "./store/userAtom"
import { useEffect } from "react"
import { fetchWrapper } from "./fetchWrapper"
import { getUserCartItems } from "./helper"

export default function AuthInitializer ()
{
    const [ , setUser ] = useAtom( userAtom )
    const setCartItemsVal = useSetAtom( userCartItems );

    useEffect( () =>
    {
        fethUserDetails()
        fetchCartDetails()
    }, [] )


    const fetchCartDetails = async () =>
    {
        const cartLength = await getUserCartItems()
        setCartItemsVal( cartLength )
    }

    const fethUserDetails = async () =>
    {

        await fetchWrapper( 'auth/check' ).then( ( resp ) =>
        {
            setUser( {
                isLoggedIn: true, user: {
                    name: resp.fullName,
                    id: resp._id,
                    email: resp.email,
                    mobile: resp.mobile,
                    role: resp.role,
                    img: resp.profilePic
                }
            } );
        } ).catch( () =>
        {
            setUser( {
                isLoggedIn: false, user: {
                    name: '',
                    id: '',
                    email: '',
                    mobile: '',
                    role: '',
                    img: ''
                }
            } );
        } )
    }

    return null
}