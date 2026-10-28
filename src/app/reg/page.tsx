"use client";

import GoogleSignin from "@/components/GoogleSignin";
import LoginPage from "@/components/Login";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

function RegisterPage() {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("/user.webp");
  const [uploaded, setUploaded] = useState(false);

  const uploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const image: any = e.target.files?.[0];
    const formData = new FormData();
    formData.append("image", image);
    const res = await fetch(
      "https://api.imgbb.com/1/upload?key=04efc9c978b56156b397800ad12c5272",
      {
        method: "POST",
        body: formData,
      },
    );
    console.log(e.target.files);
    const { data } = await res.json();
    setImageUrl(data.url);
    setUploaded(true);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const { data, error } = await authClient.signUp.email({
      name: formData.get("name") as string, // required
      email: formData.get("email") as string, // required
      password: formData.get("name") as string, // required
      image: imageUrl,
      callbackURL: "/",
    });

    if (data) {
      setLoading(false);

      toast.success("User Registered Successfully !");
      redirect("/");
    }

    if (error) {
      setLoading(false);

      toast.error(`${error.message}`);
    }
  };

  return (
    <div
      className="hero min-h-[60vh] lg:min-h-screen "
      style={{
        backgroundImage: "url(bg-sbds.webp)",
      }}
    >
      <div className="bg-black/50 w-full px-5 text-neutral-content">
        <div className="container mx-auto sm:w-100 sm:min-h-[60vh] py-10 ">
          <fieldset className="fieldset px-5 border-2 border-base-300 pb-10 rounded-box">
            <legend className="fieldset-legend text-[16px] text-white">
              Register
            </legend>
            <form onSubmit={onSubmit}>
              <fieldset className="fieldset">
                <div className="py-5">
                  <h1 className="font-bold text-xl text-center ">
                    Create Your Account{" "}
                  </h1>
                  <p className="text-sm opacity-65 text-center">
                    Register to get your Account
                  </p>
                </div>

                <Image
                  height={100}
                  width={100}
                  src={imageUrl}
                  alt="User"
                  className="h-25 w-25 mx-auto border border-white/60 rounded-full"
                />

                <label className="label text-white text-[16px]">Name</label>
                <input
                  type="text"
                  name="name"
                  className="input w-full bg-transparent border border-white/70"
                  placeholder="Your name"
                  required
                />

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

                <label className="label text-white text-[16px]">Image</label>
                <input
                  type="file"
                  disabled={uploaded}
                  name="img"
                  id="img"
                  onChange={uploadImage}
                  className="file-input file-input-ghost w-full bg-transparent border border-white/70"
                />

                <button className="btn bg-white text-blue-400 mt-4">
                  {loading ? (
                    <span className="loading loading-spinner loading-sm "></span>
                  ) : (
                    "Register"
                  )}
                </button>
                <p className="text-sm ">
                  <span className=" opacity-75">
                    If you are already registered,{" "}
                  </span>
                  <Link href={"/login"} className="text-white font-bold">
                    Login
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
      </div>
    </div>
  );
}

export default RegisterPage;
