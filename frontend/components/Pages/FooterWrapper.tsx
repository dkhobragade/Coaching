"use client"

import { usePathname } from "next/navigation"
import dynamic from "next/dynamic"

const Footer = dynamic( () => import( '@/components/lowLevelComponent/Footer' ) )

export default function FooterWrapper ()
{
    const pathName = usePathname()
    let showFooter = true

    if ( pathName == "/signIn" || pathName == "/signup" || pathName == "/cart" || pathName == "/cart/payment" )
    {
        showFooter = false
    }

    return showFooter ? <Footer /> : null
}
