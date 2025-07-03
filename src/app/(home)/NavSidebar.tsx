import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";

import { Menu } from "lucide-react";

const NavSidebar = () => {
  return (
    <Sheet defaultOpen={true}>
      <SheetTrigger>
        <Menu />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <ScrollArea className="overflow-y-scroll"></ScrollArea>
      </SheetContent>
    </Sheet>
  );
};

export default NavSidebar;
