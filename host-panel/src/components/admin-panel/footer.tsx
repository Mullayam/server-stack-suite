import Link from "next/link";

export function Footer() {
  return (
    
    <div className="z-20 w-full bg-background/95 shadow backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-4 md:mx-8 flex h-14 items-center ">
        <p className="text-xs md:text-sm leading-loose text-muted-foreground text-left">
          
        Crafted By {" "}
            <Link
              href="https://cozinco"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline underline-offset-4"
            >
              <strong>CozinCo Innovations</strong>
            </Link> with 💝.

            Copyright © {new Date().getFullYear()} All rights reserved and Powered By <strong>ENJOYS</strong> 
        </p>
       
          
      </div>
    </div>
  );
}
