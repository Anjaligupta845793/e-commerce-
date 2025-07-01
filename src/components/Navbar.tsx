import React from "react";
import { Poppins } from "next/font/google";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

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
}
const NavbarItem = ({ href, label }: navbarItemProps) => {
  return (
    <Link href={href}>
      <Button
        variant={"outline"}
        size={"lg"}
        className="border-transparent rounded-3xl bg-transparent hover:bg-black hover:text-white"
      >
        {label}
      </Button>
    </Link>
  );
};

const Navbar = () => {
  return (
    <div className="py-5 px-2 flex justify-between max-w-[1200px] mx-auto">
      <Link href={"/"}>
        {" "}
        <span
          className={cn(
            "text-2xl font-extrabold flex items-center",
            poppins.className
          )}
        >
          popines
        </span>
      </Link>
      {/* Nav Links */}
      <div className="flex gap-4">
        {navbarLinks.map((item) => (
          <NavbarItem key={item.id} href={item.href} label={item.label} />
        ))}
      </div>
    </div>
  );
};

export default Navbar;
