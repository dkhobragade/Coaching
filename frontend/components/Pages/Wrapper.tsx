"use client"

import { usePathname } from "next/navigation"
import dynamic from "next/dynamic"

const Footer = dynamic( () => import( '@/components/lowLevelComponent/Footer' ) )
const Header = dynamic( () => import( '@/components/lowLevelComponent/Header' ) )

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


export function HeaderWrapper ()
{
    const pathName = usePathname()
    let showHeader = true

    if ( pathName == "/signIn" || pathName == "/signup" || pathName == "/cart" || pathName == "/cart/payment" )
    {
        showHeader = false
    }


    return showHeader ? <Header /> : null

}