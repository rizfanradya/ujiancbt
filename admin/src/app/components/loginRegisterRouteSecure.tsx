import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

export default async function LoginRegisterRouteSecure({
  children,
}: {
  children: ReactNode;
}) {
  const session: any = await getServerSession();
  if (session) {
    redirect("/");
  }

  return <>{children}</>;
}
