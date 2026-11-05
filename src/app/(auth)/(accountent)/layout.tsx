import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

export const instant = false;

export default async function AccountentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, session }: any = await auth.api.getSession({
    headers: await headers(),
  });

  if (user?.role !== "admin" && user?.role !== "accountent") {
    redirect("/unauthorize");
  }

  console.log(user?.role);

  return <div>{children}</div>;
}
