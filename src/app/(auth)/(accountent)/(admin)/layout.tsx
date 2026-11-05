import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function AdminLayout({ children }: LayoutProps<"/">) {
  const { user, session }: any = await auth.api.getSession({
    headers: await headers(),
  });

  console.log(user);

  return <div>{children}</div>;
}
