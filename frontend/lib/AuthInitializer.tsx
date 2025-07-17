"use client"

import { useAtom } from "jotai"
import { userAtom } from "./store/userAtom"
import { useEffect } from "react"
import { fetchWrapper } from "./fetchWrapper"

export default function AuthInitializer ()
{
    const [ , setUser ] = useAtom( userAtom )


    useEffect( () =>
    {
        fethUserDetails()
    }, [] )

    const fethUserDetails = async () =>
    {
        try
        {
            const data = await fetchWrapper( 'auth/check' )
            setUser( {
                isLoggedIn: true, user: {
                    name: data.fullName,
                    id: data._id,
                    email: data.email
                }
            } );
        } catch ( error )
        {
            setUser( {
                isLoggedIn: false, user: {
                    name: '',
                    id: '',
                    email: ''
                }
            } );
        }

    }

    return null
}