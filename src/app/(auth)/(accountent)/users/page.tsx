"use client";

import { useState } from "react";
import {
  LayoutDashboard,
  Users,
  BarChart3,
  FileText,
  Settings,
  Bell,
  Search,
  Menu,
  X,
  TrendingUp,
  TrendingDown,
  ShoppingBag,
  DollarSign,
  MoreHorizontal,
  ArrowUpRight,
  Clock,
  CheckCircle2,
  LogOut,
} from "lucide-react";

const UsersPage = () => {
  const [search, setSearch] = useState("");
  const [activePage, setActivePage] = useState("Dashboard");

  const activities = [
    {
      name: "Sarah Johnson",
      action: "created a new account",
      time: "2 minutes ago",
      status: "Completed",
      initials: "SJ",
      color: "bg-pink-100 text-pink-700",
    },
    {
      name: "Michael Brown",
      action: "placed an order",
      time: "15 minutes ago",
      status: "Pending",
      initials: "MB",
      color: "bg-blue-100 text-blue-700",
    },
    {
      name: "Emily Davis",
      action: "updated her profile",
      time: "1 hour ago",
      status: "Completed",
      initials: "ED",
      color: "bg-violet-100 text-violet-700",
    },
    {
      name: "James Wilson",
      action: "requested support",
      time: "3 hours ago",
      status: "Pending",
      initials: "JW",
      color: "bg-amber-100 text-amber-700",
    },
  ];

  const filteredActivities = activities.filter((activity) =>
    `${activity.name} ${activity.action} ${activity.status}`
      .toLowerCase()
      .includes(search.toLowerCase()),
  );
  return (
    <div>
      {/* Data table */}
      <section
        className="overflow-hidden rounded-2xl border
            border-slate-200 bg-white shadow-sm"
      >
        <div
          className="flex flex-col justify-between gap-3 p-5
              sm:flex-row sm:items-center sm:p-6"
        >
          <div>
            <h4 className="font-bold">Recent Users</h4>
            <p className="mt-1 text-sm text-slate-500">
              Manage and monitor user activity
            </p>
          </div>
          <button
            onClick={() => setActivePage("Users")}
            className="self-start rounded-lg border border-slate-200
                  px-4 py-2 text-sm font-semibold transition
                  hover:bg-slate-50"
          >
            View all users
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[650px] text-left text-sm">
            <thead
              className="bg-slate-50 text-xs uppercase
                  tracking-wider text-slate-500"
            >
              <tr>
                <th className="px-6 py-4 font-semibold">User</th>
                <th className="px-6 py-4 font-semibold">Activity</th>
                <th className="px-6 py-4 font-semibold">Date</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredActivities.map((activity) => (
                <tr
                  key={activity.name}
                  className="transition hover:bg-slate-50/80"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-9 w-9 items-center
                            justify-center rounded-full text-xs font-bold
                            ${activity.color}`}
                      >
                        {activity.initials}
                      </div>
                      <span className="font-semibold">{activity.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-500">
                    {activity.action}
                  </td>
                  <td
                    className="whitespace-nowrap px-6 py-4
                        text-slate-500"
                  >
                    {activity.time}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center gap-1.5
                          rounded-full px-2.5 py-1 text-xs font-semibold
                          ${
                            activity.status === "Completed"
                              ? "bg-emerald-50 text-emerald-700"
                              : "bg-amber-50 text-amber-700"
                          }`}
                    >
                      {activity.status === "Completed" ? (
                        <CheckCircle2 size={13} />
                      ) : (
                        <Clock size={13} />
                      )}
                      {activity.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => alert(`Selected user: ${activity.name}`)}
                      className="font-semibold text-blue-600
                            hover:text-blue-800"
                    >
                      Details
                    </button>
                  </td>
                </tr>
              ))}
              {filteredActivities.length === 0 && (
                <tr>
                  <td
                    colSpan={5}
                    className="px-6 py-10 text-center
                        text-slate-500"
                  >
                    No matching activities found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div
          className="border-t border-slate-100 px-6 py-4
              text-xs text-slate-500"
        >
          Showing {filteredActivities.length} of {activities.length} records
        </div>
      </section>
    </div>
  );
};

export default UsersPage;
