import { ReactNode } from "react";

export default async function PageRouteSecure({
  children,
}: {
  children: ReactNode;
}) {
  // const session: any = await getServerSession();
  // if (!session) {
  //   redirect("/login");
  // }

  return <>{children}</>;
}
