"use client"
import { usePathname } from "next/navigation"
import GlobalSpeedDial from "../lowLevelComponent/SpeedDial"

export default function SpeedDialWrapper ()
{
    const pathName = usePathname()
    console.log( pathName )
    let showSpeedDial = true

    if ( pathName == "/signIn" || pathName == "/signup" )
    {
        showSpeedDial = false
    }

    return showSpeedDial ? <GlobalSpeedDial /> : null
}
