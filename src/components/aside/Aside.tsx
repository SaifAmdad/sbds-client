"use client";
import {
  BanknoteArrowUp,
  LayoutDashboard,
  ShieldUser,
  Users,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const menuItems = [
  // { name: "Home", icon: House, href: "/" },
  { name: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { name: "Users", icon: Users, href: "/users" },
  { name: "Transactions", icon: BanknoteArrowUp, href: "/transactions" },
];

const Aside = ({ activepage, sidebar, sidebaropen }: any) => {
  //   const [activePage, setActivePage] = useState("Dashboard");
  //   const [sidebarOpen, setSidebarOpen] = useState(false);
  const path = usePathname();

  const { setActivePage } = activepage;
  const { setSidebarOpen } = sidebar;
  const { sidebarOpen } = sidebaropen;
  return (
    <>
      {/* Sidebar */}
      <aside
        className={`fixed h-full left-0 z-50 flex w-64 flex-col
          bg-[#172554] text-white transition-transform duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0`}
      >
        <div className="flex h-20 items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <div
              className="flex h-10 w-10 items-center justify-center
              rounded-xl bg-blue-500"
            >
              <ShieldUser size={23} />
            </div>
            <div>
              <h1 className="text-lg font-bold">AdminPanel</h1>
              <p className="text-xs text-blue-200">Management System</p>
            </div>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden"
            aria-label="Close menu"
          >
            <X size={21} />
          </button>
        </div>

        <div className="px-4 pt-7">
          <p
            className="mb-3 px-3 text-xs font-semibold uppercase
            tracking-widest text-slate-400"
          >
            Main Menu
          </p>

          <nav className="space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const active = path === item.href;

              return (
                <Link
                  href={item.href}
                  key={item.name}
                  onClick={() => {
                    setSidebarOpen(false);
                  }}
                  className={`flex w-full items-center gap-3 rounded-xl
                    px-4 py-3 text-sm font-medium transition
                    ${
                      active
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-950/20"
                        : "text-slate-300 hover:bg-white/10 hover:text-white"
                    }`}
                >
                  <Icon size={19} />
                  {item.name}
                  {item.name === "Users" && (
                    <span
                      className="ml-auto rounded-md bg-white/10
                      px-2 py-0.5 text-xs"
                    >
                      24
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* <div className="mt-auto p-4">
            <div
              className="flex items-center gap-3 border-t
            border-white/10 pt-4"
            >
              <img
                src="https://i.pravatar.cc/100?img=12"
                alt="Alex Morgan"
                className="h-11 w-11 rounded-full border-2
                border-white/20 object-cover"
              />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold">Alex Morgan</p>
                <p className="text-xs text-slate-400">Administrator</p>
              </div>
              <button
                aria-label="Log out"
                title="Log out"
                onClick={() => alert("Connect your logout handler here.")}
                className="text-slate-400 hover:text-white"
              >
                <LogOut size={18} />
              </button>
            </div>
          </div> */}
      </aside>
    </>
  );
};

export default Aside;
