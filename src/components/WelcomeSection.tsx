"use client";
import { FileText } from "lucide-react";

const WelcomeSection = ({ user }: any) => {
  return (
    <div>
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
                rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold
                text-white shadow-sm transition hover:bg-blue-700"
        >
          <FileText size={17} />
          Export Report
        </button>
      </section>
    </div>
  );
};

export default WelcomeSection;
