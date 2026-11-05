// app/not-found.tsx
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { AiOutlineHome } from "react-icons/ai";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="card w-full max-w-md bg-base-100 ">
        <div className="card-body items-center text-center">
          <h1 className="text-7xl font-extrabold text-error">404</h1>

          <h2 className="card-title text-2xl mt-2 text-indigo-700">
            Page Not Found
          </h2>

          <p className="text-base-content/70">
            Sorry, the page you’re looking for doesn’t exist.
          </p>

          <div className="card-actions mt-6 gap-3">
            {/* Next.js Link uses 'href' instead of 'to' */}
            <Link
              href="/"
              className="btn bg-indigo-700 border-none text-white hover:bg-[#1b3a2f]"
            >
              <AiOutlineHome size={15} />
              Go Home
            </Link>

            {/* Standard Next.js router navigation */}
            <button
              className="btn btn-outline border-indigo-700 text-indigo-700"
              onClick={() => router.back()}
            >
              <FaArrowLeftLong />
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
