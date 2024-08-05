import React from 'react'
import Link from "next/link";

const DefaultFooter = () => {
  return (
    <footer className="py-6 md:py-0 border-t border-border/40">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">

          <p className="text-balance text-center text-sm leading-loose text-muted-foreground">
            Crafted By {" "}
            <Link
              href="https://cozinco"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline underline-offset-4"
            >
              <strong>CozinCo Innovations</strong>
            </Link> with 💝

            Copyright © {new Date().getFullYear()} All rights reserved.
          </p>
          <div className="flex text-balance text-center text-sm leading-loose text-muted-foreground gap-2">
            <Link
              href="/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Terms
            </Link>
            <p>and Powered By <strong>ENJOYS</strong></p>
          </div>
        </div>
      </footer>
  )
}

export default DefaultFooter