"use client"

import { usePathname } from "next/navigation"
import Cart from "../lowLevelComponent/Cart"
import { useAtom } from "jotai"
import { userCartItems } from "@/lib/store/userAtom"

export default function CartWrapper ()
{
    const pathName = usePathname()
    const [ cartItemsVal ] = useAtom( userCartItems )
    let showSpeedDial = true

    if ( cartItemsVal == 0 || pathName == "/signIn" || pathName == "/signup" || pathName == "/cart" || pathName == '/cart/payment' )
    {
        showSpeedDial = false
    }

    return showSpeedDial ? <Cart /> : null
}
