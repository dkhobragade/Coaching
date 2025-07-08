"use client"

import { usePathname } from "next/navigation"
import Cart from "../lowLevelComponent/Cart"

export default function CartWrapper ()
{
    const pathName = usePathname()
    console.log( pathName )
    let showSpeedDial = true

    if ( pathName == "/signIn" || pathName == "/signup" || pathName == "/cart" )
    {
        showSpeedDial = false
    }

    return showSpeedDial ? <Cart /> : null
}
