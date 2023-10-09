"use client";
import { Button } from "../ui/button";
import { LogIn } from "lucide-react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  ListItem,
} from "@/core/components/ui/navigation-menu";
import React from "react";

const UnAuthenticated = () => {
  return (
    <div className="">
      <NavigationMenu className="ml-auto">
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/register">
              <Button
                variant="ghost"
                className="text-slate-800 hover:bg-white/50"
              >
                Register
              </Button>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/login">
              <Button variant="default" className="gap-2">
                <span>Log in</span>
                <LogIn size={18}/>
              </Button>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default UnAuthenticated;
