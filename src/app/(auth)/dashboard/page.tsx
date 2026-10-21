"use client";

import { useState } from "react";
import {
  LayoutDashboard,
  Users,
  FileText,
  Menu,
  X,
  TrendingUp,
  TrendingDown,
  ShoppingBag,
  MoreHorizontal,
  ArrowUpRight,
  LogOut,
  BanknoteArrowUp,
  BangladeshiTaka,
} from "lucide-react";
import Link from "next/link";

const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { name: "Users", icon: Users, href: "/users" },
  { name: "Transactions", icon: BanknoteArrowUp, href: "/transactions" },
  // { name: "Reports", icon: FileText },
  // { name: "Settings", icon: Settings },
];

const stats = [
  {
    title: "Total Users",
    value: "2,840",
    change: "+12.5%",
    positive: true,
    icon: Users,
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Total Amount",
    value: `12,840`,
    change: "+8.2%",
    positive: true,
    icon: BangladeshiTaka,
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    title: "Total Orders",
    value: "1,240",
    change: "-2.4%",
    positive: false,
    icon: ShoppingBag,
    color: "bg-violet-50 text-violet-600",
  },
  {
    title: "Growth Rate",
    value: "18.6%",
    change: "+4.3%",
    positive: true,
    icon: TrendingUp,
    color: "bg-orange-50 text-orange-600",
  },
];

const chartData = [
  { month: "Jan", value: 35 },
  { month: "Feb", value: 52 },
  { month: "Mar", value: 43 },
  { month: "Apr", value: 68 },
  { month: "May", value: 56 },
  { month: "Jun", value: 82 },
  { month: "Jul", value: 64 },
  { month: "Aug", value: 91 },
  { month: "Sep", value: 73 },
  { month: "Oct", value: 86 },
  { month: "Nov", value: 67 },
  { month: "Dec", value: 96 },
];

export default function DashboardPage() {
  const [activePage, setActivePage] = useState("Dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [period, setPeriod] = useState("This year");

  return (
    // <div className="min-h-screen bg-slate-50 text-slate-800">
    //   {/* Mobile overlay */}
    //   {sidebarOpen && (
    //     <button
    //       aria-label="Close sidebar"
    //       onClick={() => setSidebarOpen(false)}
    //       className="fixed inset-0 z-40 bg-slate-950/40 lg:hidden"
    //     />
    //   )}

    //   {/* Sidebar */}
    //   <aside
    //     className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col
    //       bg-[#172554] text-white transition-transform duration-300
    //       ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
    //       lg:translate-x-0`}
    //   >
    //     <div className="flex h-20 items-center justify-between px-6">
    //       <div className="flex items-center gap-3">
    //         <div
    //           className="flex h-10 w-10 items-center justify-center
    //           rounded-xl bg-blue-500"
    //         >
    //           <LayoutDashboard size={23} />
    //         </div>
    //         <div>
    //           <h1 className="text-lg font-bold">AdminPanel</h1>
    //           <p className="text-xs text-blue-200">Management System</p>
    //         </div>
    //       </div>
    //       <button
    //         onClick={() => setSidebarOpen(false)}
    //         className="lg:hidden"
    //         aria-label="Close menu"
    //       >
    //         <X size={21} />
    //       </button>
    //     </div>

    //     <div className="px-4 pt-7">
    //       <p
    //         className="mb-3 px-3 text-xs font-semibold uppercase
    //         tracking-widest text-slate-400"
    //       >
    //         Main Menu
    //       </p>

    //       <nav className="space-y-1">
    //         {menuItems.map((item) => {
    //           const Icon = item.icon;
    //           const active = activePage === item.name;

    //           return (
    //             <Link
    //               href={item.href}
    //               key={item.name}
    //               onClick={() => {
    //                 setActivePage(item.name);
    //                 setSidebarOpen(false);
    //               }}
    //               className={`flex w-full items-center gap-3 rounded-xl
    //                 px-4 py-3 text-sm font-medium transition
    //                 ${
    //                   active
    //                     ? "bg-blue-600 text-white shadow-lg shadow-blue-950/20"
    //                     : "text-slate-300 hover:bg-white/10 hover:text-white"
    //                 }`}
    //             >
    //               <Icon size={19} />
    //               {item.name}
    //               {item.name === "Users" && (
    //                 <span
    //                   className="ml-auto rounded-md bg-white/10
    //                   px-2 py-0.5 text-xs"
    //                 >
    //                   24
    //                 </span>
    //               )}
    //             </Link>
    //           );
    //         })}
    //       </nav>
    //     </div>

    //     <div className="mt-auto p-4">
    //       <div
    //         className="mb-4 rounded-xl border border-white/10
    //         bg-white/5 p-4"
    //       >
    //         <p className="text-sm font-semibold">Need help?</p>
    //         <p className="mt-1 text-xs leading-5 text-slate-300">
    //           Contact support if you need assistance.
    //         </p>
    //         <button
    //           onClick={() => setActivePage("Support")}
    //           className="mt-3 text-sm font-medium text-blue-300
    //             hover:text-white"
    //         >
    //           Contact Support →
    //         </button>
    //       </div>

    //       <div
    //         className="flex items-center gap-3 border-t
    //         border-white/10 pt-4"
    //       >
    //         <img
    //           src="https://i.pravatar.cc/100?img=12"
    //           alt="Alex Morgan"
    //           className="h-11 w-11 rounded-full border-2
    //             border-white/20 object-cover"
    //         />
    //         <div className="min-w-0 flex-1">
    //           <p className="truncate text-sm font-semibold">Alex Morgan</p>
    //           <p className="text-xs text-slate-400">Administrator</p>
    //         </div>
    //         <button
    //           aria-label="Log out"
    //           title="Log out"
    //           onClick={() => alert("Connect your logout handler here.")}
    //           className="text-slate-400 hover:text-white"
    //         >
    //           <LogOut size={18} />
    //         </button>
    //       </div>
    //     </div>
    //   </aside>

    //   {/* Main content */}
    //   <main className="min-h-screen lg:ml-64">
    //     {/* Header */}
    //     <header
    //       className="sticky top-0 z-30 flex h-20 items-center
    //       justify-between border-b border-slate-200 bg-white/95
    //       px-4 backdrop-blur sm:px-8"
    //     >
    //       <div className="flex min-w-0 items-center gap-3">
    //         <button
    //           onClick={() => setSidebarOpen(true)}
    //           aria-label="Open menu"
    //           className="rounded-lg p-2 hover:bg-slate-100 lg:hidden"
    //         >
    //           <Menu size={22} />
    //         </button>
    //         <div className="min-w-0">
    //           <h2 className="truncate text-lg font-bold sm:text-xl">
    //             {activePage}
    //           </h2>
    //           <p className="hidden text-xs text-slate-500 sm:block">
    //             Home / {activePage}
    //           </p>
    //         </div>
    //       </div>

    //       <div className="flex items-center gap-2 sm:gap-4">
    //         <img
    //           // src="https://i.pravatar.cc/100?img=12"
    //           src={"bg-sbds.webp"}
    //           alt="Admin profile"
    //           className="h-10 w-10 rounded-full object-cover"
    //         />
    //       </div>
    //     </header>

    //     <div className="space-y-7 p-4 sm:p-8">
    //       {/* Welcome section */}
    //       <section
    //         className="flex flex-col justify-between gap-4 sm:flex-row
    //         sm:items-center"
    //       >
    //         <div>
    //           <h3 className="text-2xl font-bold tracking-tight">
    //             Welcome back, Alex! 👋
    //           </h3>
    //           <p className="mt-1 text-sm text-slate-500">
    //             Here&apos;s what&apos;s happening with your business today.
    //           </p>
    //         </div>
    //         <button
    //           onClick={() => window.print()}
    //           className="flex items-center justify-center gap-2 self-start
    //             rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold
    //             text-white shadow-sm transition hover:bg-blue-700"
    //         >
    //           <FileText size={17} />
    //           Export Report
    //         </button>
    //       </section>

    //       {/* Summary cards */}
    //       <section
    //         className="grid grid-cols-1 gap-4 sm:grid-cols-2
    //         xl:grid-cols-4"
    //       >
    //         {stats.map((stat) => {
    //           const Icon = stat.icon;
    //           const ChangeIcon = stat.positive ? TrendingUp : TrendingDown;

    //           return (
    //             <div
    //               key={stat.title}
    //               className="rounded-2xl border border-slate-200
    //                 bg-white p-5 shadow-sm transition hover:-translate-y-1
    //                 hover:shadow-md"
    //             >
    //               <div className="flex items-center justify-between">
    //                 <div className={`rounded-xl p-3 ${stat.color}`}>
    //                   <Icon size={22} />
    //                 </div>
    //                 <button
    //                   aria-label={`More options for ${stat.title}`}
    //                   className="text-slate-400 hover:text-slate-700"
    //                 >
    //                   <MoreHorizontal size={22} />
    //                 </button>
    //               </div>

    //               <p className="mt-5 text-sm font-medium text-slate-500">
    //                 {stat.title}
    //               </p>
    //               <div
    //                 className="mt-1 flex flex-wrap items-end
    //                 justify-between gap-2"
    //               >
    //                 <h4 className="text-2xl font-bold tracking-tight">
    //                   {stat.value}
    //                 </h4>
    //                 <span
    //                   className={`flex items-center gap-1 rounded-lg
    //                     px-2 py-1 text-xs font-semibold
    //                     ${
    //                       stat.positive
    //                         ? "bg-emerald-50 text-emerald-600"
    //                         : "bg-red-50 text-red-600"
    //                     }`}
    //                 >
    //                   <ChangeIcon size={13} />
    //                   {stat.change}
    //                 </span>
    //               </div>
    //               <p className="mt-2 text-xs text-slate-400">
    //                 Compared to last month
    //               </p>
    //             </div>
    //           );
    //         })}
    //       </section>

    //       {/* Chart and activity */}
    //       <section className="grid grid-cols-1 gap-6 xl:grid-cols-3">
    //         <div
    //           className="rounded-2xl border border-slate-200 bg-white
    //           p-5 shadow-sm sm:p-6 xl:col-span-2"
    //         >
    //           <div className="flex flex-wrap items-start justify-between gap-3">
    //             <div>
    //               <h4 className="font-bold">Revenue Overview</h4>
    //               <p className="mt-1 text-sm text-slate-500">
    //                 Track your business performance
    //               </p>
    //             </div>
    //             <select
    //               value={period}
    //               onChange={(e) => setPeriod(e.target.value)}
    //               aria-label="Chart time period"
    //               className="rounded-lg border border-slate-200 bg-white
    //                 px-3 py-2 text-sm outline-none focus:border-blue-500"
    //             >
    //               <option>This year</option>
    //               <option>This month</option>
    //               <option>This week</option>
    //             </select>
    //           </div>

    //           <div className="mt-8 flex h-56 gap-3">
    //             <div
    //               className="flex flex-col justify-between pb-7
    //               text-right text-xs text-slate-400"
    //             >
    //               <span>$10k</span>
    //               <span>$7.5k</span>
    //               <span>$5k</span>
    //               <span>$2.5k</span>
    //               <span>$0</span>
    //             </div>
    //             <div
    //               className="relative flex flex-1 items-end justify-around
    //               gap-1 border-b border-l border-slate-200 pb-0"
    //             >
    //               <div
    //                 className="pointer-events-none absolute inset-0
    //                 flex flex-col justify-between pb-0"
    //               >
    //                 {[0, 1, 2, 3].map((line) => (
    //                   <div
    //                     key={line}
    //                     className="w-full border-t border-dashed
    //                       border-slate-100"
    //                   />
    //                 ))}
    //               </div>
    //               {chartData.map((item, index) => (
    //                 <div
    //                   key={item.month}
    //                   className="group relative z-10 flex h-full flex-1
    //                     flex-col items-center justify-end"
    //                 >
    //                   <div
    //                     title={`${item.month}: ${item.value}%`}
    //                     className={`w-full max-w-7 rounded-t-md transition
    //                       hover:opacity-75 sm:max-w-9 ${
    //                         index === chartData.length - 1
    //                           ? "bg-blue-600"
    //                           : "bg-blue-100 hover:bg-blue-300"
    //                       }`}
    //                     style={{ height: `${item.value}%` }}
    //                   />
    //                   <span
    //                     className="absolute -bottom-6 text-[10px]
    //                     text-slate-400 sm:text-xs"
    //                   >
    //                     {item.month}
    //                   </span>
    //                 </div>
    //               ))}
    //             </div>
    //           </div>

    //           <div className="mt-10 flex items-center gap-2 text-sm">
    //             <span className="h-2.5 w-2.5 rounded-full bg-blue-600" />
    //             <span className="text-slate-500">Revenue performance</span>
    //             <span
    //               className="ml-auto flex items-center gap-1
    //               font-semibold text-emerald-600"
    //             >
    //               <ArrowUpRight size={16} />
    //               18.6%
    //             </span>
    //           </div>
    //         </div>
    //       </section>

    //       <footer className="pb-2 text-center text-xs text-slate-400">
    //         © 2026 AdminPanel. All rights reserved.
    //       </footer>
    //     </div>
    //   </main>
    // </div>
    <>
      {/* Summary cards */}
      <section
        className="grid grid-cols-1 gap-4 sm:grid-cols-2
            xl:grid-cols-4"
      >
        {stats.map((stat) => {
          const Icon = stat.icon;
          const ChangeIcon = stat.positive ? TrendingUp : TrendingDown;

          return (
            <div
              key={stat.title}
              className="rounded-2xl border border-slate-200
                    bg-white p-5 shadow-sm transition hover:-translate-y-1
                    hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <div className={`rounded-xl p-3 ${stat.color}`}>
                  <Icon size={22} />
                </div>
                <button
                  aria-label={`More options for ${stat.title}`}
                  className="text-slate-400 hover:text-slate-700"
                >
                  <MoreHorizontal size={22} />
                </button>
              </div>

              <p className="mt-5 text-sm font-medium text-slate-500">
                {stat.title}
              </p>
              <div
                className="mt-1 flex flex-wrap items-end
                    justify-between gap-2"
              >
                <h4 className="text-2xl font-bold tracking-tight">
                  {stat.value}
                </h4>
                <span
                  className={`flex items-center gap-1 rounded-lg
                        px-2 py-1 text-xs font-semibold
                        ${
                          stat.positive
                            ? "bg-emerald-50 text-emerald-600"
                            : "bg-red-50 text-red-600"
                        }`}
                >
                  <ChangeIcon size={13} />
                  {stat.change}
                </span>
              </div>
              <p className="mt-2 text-xs text-slate-400">
                Compared to last month
              </p>
            </div>
          );
        })}
      </section>

      {/* Chart and activity */}
      <section className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div
          className="rounded-2xl border border-slate-200 bg-white
              p-5 shadow-sm sm:p-6 xl:col-span-2"
        >
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h4 className="font-bold">Revenue Overview</h4>
              <p className="mt-1 text-sm text-slate-500">
                Track your business performance
              </p>
            </div>
            <select
              value={period}
              onChange={(e) => setPeriod(e.target.value)}
              aria-label="Chart time period"
              className="rounded-lg border border-slate-200 bg-white
                    px-3 py-2 text-sm outline-none focus:border-blue-500"
            >
              <option>This year</option>
              <option>This month</option>
              <option>This week</option>
            </select>
          </div>

          <div className="mt-8 flex h-56 gap-3">
            <div
              className="flex flex-col justify-between pb-7
                  text-right text-xs text-slate-400"
            >
              <span>$10k</span>
              <span>$7.5k</span>
              <span>$5k</span>
              <span>$2.5k</span>
              <span>$0</span>
            </div>
            <div
              className="relative flex flex-1 items-end justify-around
                  gap-1 border-b border-l border-slate-200 pb-0"
            >
              <div
                className="pointer-events-none absolute inset-0
                    flex flex-col justify-between pb-0"
              >
                {[0, 1, 2, 3].map((line) => (
                  <div
                    key={line}
                    className="w-full border-t border-dashed
                          border-slate-100"
                  />
                ))}
              </div>
              {chartData.map((item, index) => (
                <div
                  key={item.month}
                  className="group relative z-10 flex h-full flex-1
                        flex-col items-center justify-end"
                >
                  <div
                    title={`${item.month}: ${item.value}%`}
                    className={`w-full max-w-7 rounded-t-md transition
                          hover:opacity-75 sm:max-w-9 ${
                            index === chartData.length - 1
                              ? "bg-blue-600"
                              : "bg-blue-100 hover:bg-blue-300"
                          }`}
                    style={{ height: `${item.value}%` }}
                  />
                  <span
                    className="absolute -bottom-6 text-[10px]
                        text-slate-400 sm:text-xs"
                  >
                    {item.month}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 flex items-center gap-2 text-sm">
            <span className="h-2.5 w-2.5 rounded-full bg-blue-600" />
            <span className="text-slate-500">Revenue performance</span>
            <span
              className="ml-auto flex items-center gap-1
                  font-semibold text-emerald-600"
            >
              <ArrowUpRight size={16} />
              18.6%
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
