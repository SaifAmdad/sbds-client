"use client";
import Aside from "@/components/aside/Aside";
import DeshboardNav from "@/components/shared/DeshboardNav";
import ManueDeshboard from "@/components/shared/ManueDeshboard";
import WelcomeSection from "@/components/WelcomeSection";

import { authClient } from "@/lib/auth-client";
import {
  Banknote,
  BanknoteArrowUp,
  CircleUser,
  FileText,
  HandCoins,
  House,
  LayoutDashboard,
  LogOut,
  Menu,
  ShieldUser,
  Users,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Suspense, useState } from "react";

type menu = { name: string; icon: any; href: string }[];

const menuItems = [
  // { name: "Home", icon: House, href: "/" },
  { name: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { name: "Profile", icon: CircleUser, href: "/profile" },
  { name: "MySavings", icon: HandCoins, href: "/savings" },
  { name: "Users", icon: Users, href: "/users" },
  { name: "Transactions", icon: Banknote, href: "/transactions" },
  { name: "Add Fund", icon: BanknoteArrowUp, href: "/add-fund" },
];

const adminMenu: menu = [
  { name: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { name: "Users", icon: Users, href: "/users" },
  { name: "Transactions", icon: BanknoteArrowUp, href: "/transactions" },
];

const memberMenu: menu = [
  { name: "Home", icon: House, href: "/" },
  { name: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
];

export default function AuthLayout({ children }: any) {
  const path = usePathname();

  const { data: session } = authClient.useSession();
  const user: any = session?.user;

  if (!user) {
    console.log("User not Found");
  }

  const [activePage, setActivePage] = useState(
    path.slice(1, path.length).toLocaleUpperCase(),
  );
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className=" min-h-screen">
      <div className="min-h-screen bg-slate-50 text-slate-800">
        {/* Mobile overlay */}
        {sidebarOpen && (
          <button
            aria-label="Close sidebar"
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 z-40 bg-slate-950/40 lg:hidden"
          />
        )}

        {/* Sidebar */}
        <aside
          className={`fixed h-full left-0 z-50 flex w-64 flex-col
          bg-[#183c2c] text-white transition-transform duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0`}
        >
          <div className="flex h-20 items-center justify-between px-6">
            <div className="flex items-center gap-3">
              <div
                className="flex h-10 w-10 items-center justify-center
              rounded-xl bg-[#183c2c]"
              >
                <ShieldUser size={23} />
              </div>
              <div>
                <h1 className="text-lg font-bold">
                  {user?.name.split(" ")[0]}
                </h1>
                <p className="text-xs text-blue-200">
                  {user?.role.toUpperCase()}
                </p>
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
                      setActivePage(item.name);
                    }}
                    className={`flex w-full items-center gap-3 rounded-xl
                    px-4 py-3 text-sm font-medium transition
                    ${
                      active
                        ? "bg-[#183c] text-white shadow-lg shadow-blue-950/20"
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
        </aside>

        {/* <Aside
          sidebar={setSidebarOpen}
          activepage={setActivePage}
          sidebaropen={sidebarOpen}
        /> */}

        {/* Main content */}
        <main className="min-h-screen lg:ml-64">
          <div className="space-y-7 p-4 sm:p-8">
            {/* Welcome section */}
            <section
              className="flex flex-col justify-between gap-4 sm:flex-row
            sm:items-center"
            >
              <div>
                <h3 className="text-2xl font-bold tracking-tight">
                  Welcome, {user?.name.split(" ")[0]} 👋
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  Here&apos;s what&apos;s happening with your business today.
                </p>
              </div>
              <button
                onClick={() => window.print()}
                className="flex items-center justify-center gap-2 self-start
                rounded-xl bg-[#183c2c] px-4 py-2.5 text-sm font-semibold
                text-white shadow-sm transition hover:bg-blue-700"
              >
                <FileText size={17} />
                Export Report
              </button>
            </section>

            {/* Header */}
            <header
              className="sticky top-0 z-30 flex items-center
          justify-between border-b border-slate-200 py-2 bg-[#183c2c] rounded-2xl
          px-4 backdrop-blur sm:px-8"
            >
              <div className="flex min-w-0 items-center gap-3">
                <button
                  onClick={() => setSidebarOpen(true)}
                  aria-label="Open menu"
                  className="rounded-lg p-2 hover:bg-slate-100 lg:hidden"
                >
                  <Menu size={22} color="white" />
                </button>
                <div className="min-w-0"></div>
              </div>

              <div className="flex items-center gap-2 sm:gap-4 font-bold ">
                <h2 className="truncate text-lg font-bold sm:text-xl text-white">
                  {activePage}
                </h2>
              </div>
            </header>

            {/* contants ---------------------------------------------------------------- */}

            <Suspense fallback={<div>Loading dashboard...</div>}>
              {children}
            </Suspense>
          </div>
        </main>
      </div>
    </div>
  );
}
