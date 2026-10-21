"use client";

import { useState } from "react";
import {
  LayoutDashboard,
  Users,
  FileText,
  Menu,
  X,
  LogOut,
  BanknoteArrowUp,
  House,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { name: "Home", icon: House, href: "/" },
  { name: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { name: "Users", icon: Users, href: "/users" },
  { name: "Transactions", icon: BanknoteArrowUp, href: "/transactions" },
];

export default function RootLayout({ children }: LayoutProps<"/">) {
  const path = usePathname();

  const [activePage, setActivePage] = useState("Dashboard");
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
          className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col
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
                <LayoutDashboard size={23} />
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

          <div className="mt-auto p-4">
            {/* <div
              className="mb-4 rounded-xl border border-white/10
            bg-white/5 p-4"
            >
              <p className="text-sm font-semibold">Need help?</p>
              <p className="mt-1 text-xs leading-5 text-slate-300">
                Contact support if you need assistance.
              </p>
              <button
                onClick={() => setActivePage("Support")}
                className="mt-3 text-sm font-medium text-blue-300
                hover:text-white"
              >
                Contact Support →
              </button>
            </div> */}

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
          </div>
        </aside>

        {/* Main content */}
        <main className="min-h-screen lg:ml-64">
          {/* Header */}
          <header
            className="sticky top-0 z-30 flex h-20 items-center
          justify-between border-b border-slate-200 bg-white/95
          px-4 backdrop-blur sm:px-8"
          >
            <div className="flex min-w-0 items-center gap-3">
              <button
                onClick={() => setSidebarOpen(true)}
                aria-label="Open menu"
                className="rounded-lg p-2 hover:bg-slate-100 lg:hidden"
              >
                <Menu size={22} />
              </button>
              <div className="min-w-0">
                <h2 className="truncate text-lg font-bold sm:text-xl">
                  {activePage}
                </h2>
                <p className="hidden text-xs text-slate-500 sm:block">
                  Home / {activePage}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-4">
              <img
                // src="https://i.pravatar.cc/100?img=12"
                src={"bg-sbds.webp"}
                alt="Admin profile"
                className="h-10 w-10 rounded-full object-cover"
              />
            </div>
          </header>

          <div className="space-y-7 p-4 sm:p-8">
            {/* Welcome section */}
            <section
              className="flex flex-col justify-between gap-4 sm:flex-row
            sm:items-center"
            >
              <div>
                <h3 className="text-2xl font-bold tracking-tight">
                  Welcome back, Alex! 👋
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  Here&apos;s what&apos;s happening with your business today.
                </p>
              </div>
              <button
                onClick={() => window.print()}
                className="flex items-center justify-center gap-2 self-start
                rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold
                text-white shadow-sm transition hover:bg-blue-700"
              >
                <FileText size={17} />
                Export Report
              </button>
            </section>
            {children}
            <footer className="pb-2 text-center text-xs text-slate-400">
              © 2026 AdminPanel. All rights reserved.
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
}
