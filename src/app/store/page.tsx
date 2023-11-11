import { NextPage } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const links = [
  {
    href: "/store/products",
    name: "Products",
    description: "View your all currently selling products",
  },
  {
    href: "/store/orders",
    name: "Orders",
    description: "View your all requested orders and their status",
  },
];

const page: NextPage = (props) => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="flex items-center justify-between space-x-6 rounded-md border bg-white p-8 transition-colors hover:bg-slate-50"
          >
            <div className="">
              <p className="text-lg font-medium text-slate-800">{link.name}</p>
              <p className="text-sm text-slate-500 [text-wrap:balance]">
                {link.description}
              </p>
            </div>
            <ChevronRight size={24} className="text-blue-500" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default page;
