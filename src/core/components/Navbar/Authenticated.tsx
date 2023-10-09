"use client";
import { Button } from "../ui/button";
import { LogOut, User, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { Session } from "next-auth";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuIndicator,
  ListItem,
} from "@/core/components/ui/navigation-menu";
import { signOut } from "next-auth/react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverAnchor,
  PopoverArrow,
} from "@/core/components/ui/popover";
import Cart from "./Cart";
import ProductMenu from "./ProductMenu";

const Authenticated: React.FC<{ session: Session }> = ({ session }) => {
  return (
    <div className="flex justify-between">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Products</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ProductMenu />
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" className="gap-2">
                  <ShoppingCart size={18} />
                  <span>Cart</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="border-none shadow-realistic-1">
                <Cart />
                <PopoverArrow className="fill-white" />
              </PopoverContent>
            </Popover>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/profile">
              <Button variant="ghost" className="gap-2">
                <User size={18} />
                <span>Profile</span>
              </Button>
            </Link>
          </NavigationMenuItem>
          <div className="w-0.5 self-stretch bg-slate-400/50" />
          <NavigationMenuItem>
            <Button
              onClick={(e) => signOut()}
              variant="ghost"
              className="gap-2 border-2 border-transparent transition-colors hover:border-red-500 hover:bg-red-500/20"
            >
              <span>Log out</span>
              <LogOut size={18} />
            </Button>
          </NavigationMenuItem>
          <NavigationMenuIndicator />
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Authenticated;
