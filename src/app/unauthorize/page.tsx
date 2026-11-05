import Link from "next/link";
import { ShieldAlert, ArrowLeft } from "lucide-react";
import UnauthorizedToast from "@/components/shared/Toast";

export default function UnauthorizedPage() {
  return (
    <>
      <UnauthorizedToast />
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full text-center space-y-6 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-600 mb-2">
            <ShieldAlert className="w-8 h-8" />
          </div>

          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
            403
          </h1>
          <h2 className="text-xl font-semibold text-gray-800">Access Denied</h2>

          <p className="text-gray-500 text-sm leading-relaxed">
            You don't have permission to access this page. Please log in with
            authorized credentials or return to safety.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go to Home
            </Link>

            {/* <Link
            href="/login"
            className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors shadow-sm"
          >
            Sign In
          </Link> */}
          </div>
        </div>
      </div>
    </>
  );
}
