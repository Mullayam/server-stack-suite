"use client";

import { cn } from "@/lib/utils";
import { useStore } from "@/hooks/use-store";
import { Footer } from "@/components/admin-panel/footer";
import { Sidebar } from "@/components/admin-panel/sidebar";
import { useSidebarToggle } from "@/hooks/use-sidebar-toggle";
import RightSideBar from "./right-sidebar";
import React from "react";
import { Navbar } from "./navbar";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import BackButton from "../common/buttons/BackButton";
const queryClient = new QueryClient()
export default function AdminPanelLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const sidebar = useStore(useSidebarToggle, (state) => state);

  if (!sidebar) return null;

  return (
    <QueryClientProvider client={queryClient}>
      
      <Sidebar />
      <main
        className={cn(
          "min-h-[calc(100vh_-_56px)] bg-zinc-50 dark:bg-zinc-900 transition-[margin-left] ease-in-out duration-300",
          sidebar?.isOpen === false ? "lg:ml-[90px]" : "lg:ml-72"
        )}
      >
        <Navbar />
        <div className="container pt-8 pb-8 px-4 sm:px-8">
          <BackButton/>
          {children}
          </div>
        {/* <div className="hidden lg:block lg:w-64 lg:fixed lg:right-0 lg:top-0 lg:bottom-0 lg:h-full">
          <RightSideBar />
        </div> */}
      </main>

      <footer
        className={cn(
          "transition-[margin-left] ease-in-out duration-300",
          sidebar?.isOpen === false ? "lg:ml-[90px]" : "lg:ml-72"
        )}
      >
        <Footer />
      </footer>
    </QueryClientProvider>
  );
}
