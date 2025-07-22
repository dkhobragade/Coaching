"use client"

import { useAtom, useSetAtom } from "jotai"
import { userAtom, userCartItems } from "./store/userAtom"
import { useEffect } from "react"
import { fetchWrapper } from "./fetchWrapper"
import { getUserCartItems } from "./cartHelper"

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
        try
        {
            const data = await fetchWrapper( 'auth/check' )
            setUser( {
                isLoggedIn: true, user: {
                    name: data.fullName,
                    id: data._id,
                    email: data.email,
                    mobile: data.mobile,
                    role: data.role,
                    img: data.profilePic
                }
            } );
        } catch ( error )
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
        }

    }

    return null
}