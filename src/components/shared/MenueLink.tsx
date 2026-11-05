"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MenueLink = ({ href, route, icon }: any) => {
  const pathName = usePathname();
  return (
    <>
      <Link
        href={href}
        className={`text-[16px] flex items-center gap-3 ${href == pathName ? "font-extrabold bg-indigo-700 text-white" : " text-gray-500"}`}
      >
        {icon} {route}
      </Link>
    </>
  );
};

export default MenueLink;
