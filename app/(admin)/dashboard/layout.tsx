import type { Metadata } from "next";
import { NavAdmin } from "../components/navbar-admin";
import { ModeToggle } from "@/components/theme-toggle";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { ButtonExit } from "../components/exit-button";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header className="flex justify-between border-b items-center py-5 px-10">
        <div>
          <NavAdmin />
        </div>
        <div className="flex space-x-4 justify-center items-center">
          {/* <ModeToggle /> */}
          <ButtonExit />
          {/* <Link className={buttonVariants({variant: 'secondary'})} href={'/login'}>Keluar</Link> */}
        </div>
      </header>
      {children}
    </>
  );
}
