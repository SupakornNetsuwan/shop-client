"use client";
import React from "react";
import Image from "next/image";
import name from "../../../../public/name.svg";
import Authenticated from "./Authenticated";
import UnAuthenticated from "./UnAuthenticated";
import Link from "next/link";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const session = useSession();
  if (session.status === "loading") {
    return (
      <div className="fixed top-0 z-40 flex w-full justify-start gap-4 border-b border-slate-300/50 bg-white/80 px-4 py-4 opacity-50 backdrop-blur-sm xl:px-10">
        <Link href="/" className="inline-flex">
          <Image
            src={name}
            alt="name"
            priority
            className="w-52 cursor-pointer transition-transform hover:scale-105"
          />
        </Link>
        <div className="flex w-full justify-end gap-x-2 h-10 items-center">
          <div className="w-12 bg-slate-200 rounded-full h-4" />
          <div className="w-24 bg-slate-200 rounded-full h-4" />
        </div>
      </div>
    );
  }
  return (
    <div className="fixed top-0 z-40 flex w-full justify-start gap-4 border-b border-slate-300/50 bg-white/80 px-4 py-4 backdrop-blur-sm xl:px-10">
      <Link href="/" className="inline-flex">
        <Image
          src={name}
          alt="name"
          priority
          className="w-52 cursor-pointer transition-transform hover:scale-105"
        />
      </Link>
      <div className="w-full">
        {session.status === "authenticated" ? (
          <Authenticated />
        ) : (
          <UnAuthenticated />
        )}
      </div>
    </div>
  );
};

export default Navbar;
