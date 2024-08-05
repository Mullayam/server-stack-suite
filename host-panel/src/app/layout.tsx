"use strict";
import "./globals.css";
import type { Metadata } from "next";
import { cal, plusJakarta, work } from "@/styles/fonts";
import { ThemeProvider } from "@/providers/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import NextTopLoader from 'nextjs-toploader';
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.APP_URL
      ? `${process.env.APP_URL}`
      : process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : `http://localhost:${process.env.PORT || 3000}`
  ),
  title: "Server Stack Suite",
  description:
    "ServerStackSuite is your all-in-one solution for comprehensive server management.Simplify your operations with ServerStackSuite, the ultimate platform for modern IT management.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    url: "/",
    title: "Server Stack Suite",
    description:
      "ServerStackSuite is your all-in-one solution for comprehensive server management.Simplify your operations with ServerStackSuite, the ultimate platform for modern IT management.",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Server Stack Suite",
    description:
      "ServerStackSuite is your all-in-one solution for comprehensive server management.Simplify your operations with ServerStackSuite, the ultimate platform for modern IT management."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(plusJakarta.className)}>
        <Toaster />
        <NextTopLoader
          color="#ed4a3cfe"
          initialPosition={0.08}          
          showSpinner={false}
          
        />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
