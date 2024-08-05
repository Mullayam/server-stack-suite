import React from 'react'
import Link from "next/link";
import { PanelsTopLeft } from "lucide-react";
import { ExitIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import Image from 'next/image';
import Logo from '@/components/admin-panel/logo';

const DefaultHeader = () => {
    return (
        <header className="z-[50] sticky top-0 w-full bg-background/95 border-b backdrop-blur-sm dark:bg-black/[0.6] border-border/40">
            <div className="container h-14 flex items-center">
                <Link
                    href="/"
                    className="flex justify-start items-center hover:opacity-85 transition-opacity duration-300 gap-2"
                >
                   <Logo/>
                    <span className="font-bold">CozinCo Innovations</span>
                    <span className="sr-only">CozinCo Innovations</span>
                </Link>
                <nav className="ml-auto flex items-center gap-2">
                    <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full w-8 h-8 bg-background"
                        asChild
                    >
                        <Link href="#">
                            <ExitIcon className="h-[1.2rem] w-[1.2rem]" />
                        </Link>
                    </Button>
                    <ModeToggle />
                </nav>
            </div>
        </header>
    )
}

export default DefaultHeader