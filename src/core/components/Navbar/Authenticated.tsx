"use client";
import { Button } from "../ui/button";
import {
  LogOut,
  User,
  BookUser,
  Store,
  ShoppingCart,
  Truck,
} from "lucide-react";
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
import { useSession } from "next-auth/react";

const Authenticated: React.FC = () => {
  const { data } = useSession();
  console.log(data);
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
          <NavigationMenuItem className="relative">
            <NavigationMenuTrigger>
              <BookUser size={18} />
              <span className="ml-2">Account</span>
            </NavigationMenuTrigger>
            <NavigationMenuContent asChild>
              <div className="flex flex-col p-1.5">
                <NavigationMenuLink href="/orders">
                  <Button
                    variant="ghost"
                    className="flex w-full justify-start gap-2"
                  >
                    <Truck size={18} />
                    <span>Orders</span>
                  </Button>
                </NavigationMenuLink>
                <NavigationMenuLink href="/profile" className="">
                  <Button
                    variant="ghost"
                    className="flex w-full justify-start gap-2"
                  >
                    <User size={18} />
                    <span>Profile</span>
                  </Button>
                </NavigationMenuLink>
                <NavigationMenuLink href="/store">
                  <Button
                    variant="ghost"
                    className="flex w-full justify-start gap-2"
                  >
                    <Store size={18} />
                    <span>Store</span>
                  </Button>
                </NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
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

          <div className="w-0.5 self-stretch bg-slate-400/50" />
          <NavigationMenuItem>
            <Button
              onClick={(e) => {
                signOut({ redirect: true, callbackUrl: "/login" });
              }}
              variant="ghost"
              className="gap-2 border-2 border-transparent transition-colors hover:border-red-500 hover:bg-red-500/20"
            >
              <span>Log out</span>
              <LogOut size={18} />
            </Button>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Authenticated;
