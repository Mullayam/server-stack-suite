"use client";

import { LogOut } from "lucide-react";
import { Button } from "../ui/button";
export function SignOut(props: any) {
    async function signOutHandler() {

    }

    return (
        <Button title="Sign out" onClick={signOutHandler} {...props}>
            <LogOut className="size-4" />
        </Button>
    );
}