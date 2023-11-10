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
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="flex items-center justify-between space-x-6 rounded-md bg-white p-8 hover:bg-slate-50 border transition-colors"
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
