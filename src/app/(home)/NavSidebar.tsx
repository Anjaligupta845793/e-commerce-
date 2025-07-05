import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";

import { Menu } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface navLinks {
  id: number;
  href: string;
  label: string;
}

interface navBarItem {
  item: navLinks[];
}

const NavSidebar = ({ item }: navBarItem) => {
  const [open, setopen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setopen}>
      <SheetTrigger>
        <Menu />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <ScrollArea className="overflow-y-scroll flex flex-col">
          {item.map((item: navLinks) => (
            <Link
              onClick={() => setopen(false)}
              key={item.id}
              href={item.href}
              className={cn(
                "p-2 text-left block w-full  items-center text-base  hover:bg-black hover:text-white"
              )}
            >
              {item.label}
            </Link>
          ))}
          <div className="flex flex-col">
            <Link href={"/signin"} className="p-2 text-left w-full text-base">
              Sign in
            </Link>
            <Link href={"/login"} className="p-2 text-left w-full text-base">
              Start Selling
            </Link>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};

export default NavSidebar;
