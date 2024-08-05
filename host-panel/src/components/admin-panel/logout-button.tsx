import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { SignOut } from './signout'
const LogoutButton = () => {
    return (
        <>
            <Avatar className="m-auto">
                {/* <AvatarImage src={user?.image ?? undefined} /> */}
                <AvatarFallback>
                    ggg
                </AvatarFallback>
            </Avatar>

            <div className="w-full font-medium">
                <p className="line-clamp-1 text-sm">
                    sfddsd
                </p>
                <p className="line-clamp-1 text-xs text-muted-foreground">
                    Free plan
                </p>
            </div>

            <SignOut
                size="icon"
                variant="ghost"
                className="ml-auto shrink-0 rounded-full text-muted-foreground"
            />
        </>

    )
}

export default LogoutButton