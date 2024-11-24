import { ReactNode } from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function PageRouteSecure({
  children,
}: {
  children: ReactNode;
}) {
  const session: any = await getServerSession();
  // if (!session) {
  //   redirect("/login");
  // }

  return <>{children}</>;
}
