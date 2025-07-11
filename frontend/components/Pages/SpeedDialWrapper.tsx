"use client"

import dynamic from "next/dynamic"
import { usePathname } from "next/navigation"

const GlobalSpeedDial = dynamic( () => import( '@/components/lowLevelComponent/SpeedDial' ) )

export default function SpeedDialWrapper ()
{
    const pathName = usePathname()
    let showSpeedDial = true

    if ( pathName == "/signIn" || pathName == "/signup" )
    {
        showSpeedDial = false
    }

    return showSpeedDial ? <GlobalSpeedDial /> : null
}
