/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from "react";

export default async function AuthPageRouteSecure({
  children,
}: {
  children: ReactNode;
}) {
  // const session: any = await getServerSession();
  // if (session) {
  //   redirect("/");
  // }

  return <>{children}</>;
}
