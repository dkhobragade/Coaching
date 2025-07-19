"use client"

import { useAtom } from "jotai";
import { userAtom } from "@/lib/store/userAtom";
import Admin from "../lowLevelComponent/Admin";
import { usePathname } from "next/navigation";

export default function AdminWrapper ()
{
    const [ userState ] = useAtom( userAtom );
    const pathName = usePathname()
    let showAdmin = true

    if ( pathName == "/signIn" || pathName == "/signup" )
    {
        showAdmin = false
    }
    console.log( userState )

    return showAdmin ? <Admin /> : null
}
