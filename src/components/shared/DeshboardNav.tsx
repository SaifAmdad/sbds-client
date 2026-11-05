"use client";
import { usePathname } from "next/navigation";
import { MdMenuOpen } from "react-icons/md";

const DeshboardNav = () => {
  const pathName = usePathname();
  const item = pathName.split("/");
  const name = item[item.length - 1].toLocaleUpperCase();

  return (
    <nav className="navbar w-full bg-base-300 rounded-2xl">
      <label
        htmlFor="my-drawer-4"
        aria-label="open sidebar"
        className="btn btn-square btn-ghost drawer-button"
      >
        {/* Sidebar toggle icon */}
        <MdMenuOpen size={25} className="lg:hidden block" />
      </label>

      <p className="ml-2 font-semibold">{name}</p>
    </nav>
  );
};

export default DeshboardNav;
