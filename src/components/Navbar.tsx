"use client";
import { authClient } from "@/lib/auth-client";
import { LayoutDashboard, LogOut, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
import { toast } from "react-toastify";

const Navbar = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const path = usePathname();
  console.log(path);

  const logout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          toast.success("Signed Out Successfully");
          redirect("/login");
        },
      },
    });
  };

  return (
    <>
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-[#183c2c]/10 bg-[#fafbf7]/95 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <div className="flex items-center gap-3">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden m-0 p-0"
              >
                <svg
                  aria-label="Menu"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={-1}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link href={"/"} className="my-1 text-sm text-[#183c2c]">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/dashboard"}
                    className="my-1 text-sm text-[#183c2c]"
                  >
                    Dashboard
                  </Link>
                </li>
              </ul>
            </div>

            {/* <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#183c2c] text-xl text-white">
              S
            </div> */}

            <div>
              <p className="font-bold tracking-tight text-[#183c2c]">
                Swapnabaaz
              </p>
              <p className="text-[10px] font-medium uppercase tracking-[2px] text-[#758778]">
                Development Society
              </p>
            </div>
          </div>

          <div className="hidden items-center gap-8 text-sm font-medium md:flex text-[#183c2c] ">
            <Link href="/" className="hover:text-[#b18b47]">
              Home
            </Link>
            <Link href="/dashboard" className="hover:text-[#b18b47]">
              Dashboard
            </Link>
          </div>

          {/* <a
            href="#contact"
            className="rounded-full bg-[#183c2c] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#b18b47]"
          >
            Get in Touch
          </a> */}
          <div className="dropdown dropdown-end">
            {user ? (
              <>
                <div tabIndex={0} role="button" className="m-1 bg-transparent ">
                  {" "}
                  <Image
                    src={user?.image as string}
                    height={50}
                    width={50}
                    alt="SBDS"
                    className="rounded-full h-9 w-9 cursor-pointer"
                  />
                </div>
                <ul
                  tabIndex={-1}
                  className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm text-[#183c2c]"
                >
                  <li>
                    <Link href={"/dashboard"}>
                      {" "}
                      <LayoutDashboard size={15} /> Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link href={"/profile"}>
                      <User size={15} /> Profile
                    </Link>
                  </li>
                  <li>
                    <button onClick={logout} className="text-red-500 ">
                      <LogOut size={15} /> Logout
                    </button>
                  </li>
                </ul>{" "}
              </>
            ) : (
              <Link
                href={"/login"}
                className="btn bg-[#183c2c] text-white rounded-2xl"
              >
                Login
              </Link>
            )}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
