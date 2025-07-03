"use client";
import React from "react";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Button } from "../../components/ui/button";
import NavSidebar from "./NavSidebar";

const poppins = Poppins({
  weight: ["500"],
  subsets: ["latin"],
});

const navbarLinks = [
  {
    id: 1,
    href: "/",
    label: "Home",
  },
  {
    id: 2,
    href: "/about",
    label: "About",
  },
  {
    id: 3,
    href: "/contact",
    label: "Contact",
  },
  {
    id: 4,
    href: "/pricing",
    label: "Pricing",
  },
];

interface navbarItemProps {
  href: string;
  label: string;
  isActive?: boolean;
}
const NavbarItem = ({ href, label, isActive }: navbarItemProps) => {
  return (
    <Link href={href}>
      <Button
        variant={"outline"}
        size={"lg"}
        className={cn(
          "border-transparent rounded-3xl bg-transparent hover:bg-black hover:text-white",
          isActive && "bg-black text-white"
        )}
      >
        {label}
      </Button>
    </Link>
  );
};

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="border-b border-gray-400 shadow-xl h-20">
      <div className="flex items-stretch justify-between max-w-[1200px] h-full mx-auto px-2">
        {/* Logo */}
        <Link
          href="/"
          className={cn(
            "text-2xl font-extrabold flex items-center",
            poppins.className
          )}
        >
          <span>popines</span>
        </Link>

        {/* Nav Links */}
        <div className="md:flex hidden items-center gap-4">
          {navbarLinks.map((item) => (
            <NavbarItem
              key={item.id}
              href={item.href}
              label={item.label}
              isActive={pathname === item.href}
            />
          ))}
        </div>

        {/* Login & Signup Buttons */}
        <div className="hidden items-stretch md:flex">
          <Button className="h-full bg-transparent border border-black text-black rounded-none hover:bg-pink-500">
            Login
          </Button>
          <Button className="h-full bg-black text-white rounded-none hover:bg-white hover:text-black hover:border-1 border-black">
            Signup
          </Button>
        </div>
        <div className="md:hidden flex items-center">
          <NavSidebar />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
