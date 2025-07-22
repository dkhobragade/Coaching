"use client"

import { useAtom } from "jotai";
import { userAtom } from "@/lib/store/userAtom";
import Admin from "../lowLevelComponent/Admin";

export default function AdminWrapper ()
{
    const [ userState ] = useAtom( userAtom );
    let showAdmin = true

    if ( userState.user.role != "admin" )
    {
        showAdmin = false
    }

    return showAdmin ? <Admin /> : null
}
