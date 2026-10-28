"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import GoogleSignin from "@/components/GoogleSignin";

function LoginPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const redirectTo = "/";

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const fromData = new FormData(e.currentTarget);
    console.log(fromData);
    const { data, error } = await authClient.signIn.email({
      email: fromData.get("email") as string, // required
      password: fromData.get("password") as string, // required
      rememberMe: true,
    });

    if (data) {
      setLoading(false);

      toast.success("User Loged-in Successfully !");
      // SECURITY CHECK
      if (redirectTo.startsWith("/")) {
        router.replace(redirectTo);
      } else {
        router.replace("/");
      }
    }
    if (error) {
      setLoading(false);

      toast.error(`${error.message}`);
    }
  };
  return (
    <div className="container mx-auto sm:w-100 sm:min-h-[60vh] py-10">
      <fieldset className="fieldset border-2 border-base-300 px-5 pb-10 rounded-box ">
        <legend className="fieldset-legend text-[16px] text-white">
          Login
        </legend>
        <form onSubmit={onSubmit}>
          <fieldset className="fieldset">
            <div className="py-5">
              <h1 className="font-bold text-xl text-center ">
                Welcome back !{" "}
              </h1>
              <p className="text-sm opacity-65 text-center">
                Login to your account
              </p>
            </div>

            <label className="label text-white text-[16px]">Email</label>
            <input
              type="email"
              name="email"
              className="input w-full bg-transparent border border-white/70"
              placeholder="Email"
              required
            />

            <label className="label text-white text-[16px]">Password</label>
            <input
              type="password"
              name="password"
              className="input w-full bg-transparent border border-white/70"
              placeholder="Password"
              required
            />

            <button className="btn bg-indigo-600 text-white mt-4">
              {loading ? (
                <span className="loading loading-spinner loading-sm "></span>
              ) : (
                "Login"
              )}
            </button>

            <p className="text-sm ">
              <span className=" opacity-75">If you are new, </span>
              <Link href={"/reg"} className="text-indigo-600 font-bold">
                Register
              </Link>
            </p>

            <div className="flex items-center justify-between pt-1">
              <hr className="border border-indigo-600 w-[46%] " />
              <p>OR</p>
              <hr className="border border-indigo-600 w-[46%] " />
            </div>
          </fieldset>
        </form>
        <GoogleSignin />
      </fieldset>
    </div>
  );
}

export default LoginPage;
