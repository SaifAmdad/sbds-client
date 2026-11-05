"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";
import { redirect, useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-toastify";
import GoogleSignin from "@/components/GoogleSignin";
import { string } from "better-auth";

function LoginPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [message, setMessage]: any = useState("");
  const redirectTo = "/";

  const { data: session } = authClient.useSession();
  const user = session?.user;

  console.log(user);

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

  const emailVerify = async () => {
    console.log("Send email");
    const { data, error } = await authClient.sendVerificationEmail({
      email: user?.email as string,
      callbackURL: "/login",
    });

    console.log(data);
    console.log(error);

    if (error) {
      setMessage(error.message);
    } else {
      setMessage(
        "If the account needs verification, an email has been requested.",
      );
    }
    console.log(message);
  };

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
    <>
      <div
        className="hero min-h-[60vh] lg:min-h-screen "
        style={{
          backgroundImage: "url(bg-sbds.webp)",
        }}
      >
        <div className="bg-black/50 w-full px-5 text-neutral-content">
          <div className="container mx-auto sm:w-100 sm:min-h-[60vh] py-10 ">
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

                  <label className="label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="input w-full bg-transparent border border-white/70"
                    placeholder="Email"
                    required
                  />

                  <label className="label">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="input w-full bg-transparent border border-white/70"
                    placeholder="Password"
                    required
                  />

                  <button className="btn bg-white text-blue-400 mt-4">
                    {loading ? (
                      <span className="loading loading-spinner loading-sm "></span>
                    ) : (
                      "Login"
                    )}
                  </button>

                  <p className="text-sm ">
                    <span className=" opacity-75">If you are new, </span>
                    <Link href={"/reg"} className="text-white font-bold">
                      Register
                    </Link>
                  </p>

                  <div className="flex items-center justify-between pt-1">
                    <hr className="border border-white w-[46%] " />
                    <p className="text-white">OR</p>
                    <hr className="border border-white w-[46%] " />
                  </div>
                </fieldset>
              </form>
              <GoogleSignin />
            </fieldset>
          </div>
          <div>
            <button className="btn btn-secondary" onClick={emailVerify}>
              Send verificaion
            </button>
            {user && (
              <button className="btn btn-warning" onClick={logout}>
                logout
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
