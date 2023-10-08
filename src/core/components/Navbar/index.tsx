import React from "react";
import Image from "next/image";
import name from "../../../../public/name.svg";
import auth from "../../libs/auth/auth";
import Authenticated from "./Authenticated";
import UnAuthenticated from "./UnAuthenticated";
import Link from "next/link";

const Navbar = async () => {
  const session = await auth();

  return (
    <div className="fixed top-0 z-20 flex w-full justify-start gap-4 border-b border-slate-300/50 bg-white/80 px-4 py-4 backdrop-blur-sm xl:px-10">
      <Link href="/" className="inline-flex">
        <Image
          src={name}
          alt="name"
          priority
          className="w-52 cursor-pointer transition-transform hover:scale-105"
        />
      </Link>
      <div className="w-full">
        {session ? <Authenticated session={session} /> : <UnAuthenticated />}
      </div>
    </div>
  );
};

export default Navbar;
