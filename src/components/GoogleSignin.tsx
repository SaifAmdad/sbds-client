"use client";

import { authClient } from "@/lib/auth-client";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

function GoogleSignin() {
  const googleSignUp = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });

    if (!data?.error) {
      toast.success("SignIn Successfully !");
    }
  };

  return (
    <>
      <button
        className="btn btn-outline mt-0.5 w-full border border-white/70 text-white"
        onClick={googleSignUp}
      >
        <FcGoogle color="ghost" size={20} /> Continue with Google
      </button>
    </>
  );
}

export default GoogleSignin;
