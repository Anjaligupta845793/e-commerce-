import React from "react";
import { Poppins } from "next/font/google";
import Link from "next/link";

import { cn } from "@/lib/utils";

const popins = Poppins({
  weight: ["500"],
  subsets: ["latin"],
});

const Navbar = () => {
  return (
    <div className="">
      <Link href={"/"}>
        {" "}
        <span className={cn("text-2xl ", popins.className)}>popines</span>
      </Link>
    </div>
  );
};

export default Navbar;
