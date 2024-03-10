import { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { RiMenu3Fill } from "react-icons/ri";
import NavlinkItems from "./navlinkItems";
import Logout from "./logout";

export default function SideNav({
  children,
  docTitle,
  breadcrumbs,
}: {
  children: ReactNode;
  docTitle: string;
  breadcrumbs: { name: string; path: string }[];
}) {
  return (
    <>
      <title>{`Admin - ${docTitle}`}</title>
      <div className="flex items-center justify-between bg-slate-700 text-white py-5 px-2 md:px-6 fixed w-full z-10">
        <div className="flex items-center gap-2">
          <Image alt="logo" src={"/tutwuri.png"} width={60} height={60} />
          <div className="text-white">
            <p className="font-bold text-xl -mb-1 font-sans">
              CBT Test Indonesia
            </p>
            <p>CBT Application</p>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <div className="text-info font-semibold sm:text-2xl">AKTIF</div>
          <label htmlFor="my-drawer" className="cursor-pointer lg:hidden">
            <RiMenu3Fill size={25} />
          </label>
        </div>
      </div>

      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />

        <div className="drawer-content">
          <div className="pt-24 pb-10">
            <div className="breadcrumbs px-2 border-b border-black/5">
              <ul>
                {breadcrumbs.map((doc, index) => (
                  <li className="text-slate-500/80" key={index}>
                    <Link href={`/admin/${doc.path}`}>{doc.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex">
              <ul className="menu max-w-72 w-full hidden lg:block border border-black/5 my-4 ml-4 ">
                <NavlinkItems />
                <Logout />
              </ul>
              <div className="pl-7 p-8 border t-10 border-black/5 m-4 h-max w-full">
                {children}
              </div>
            </div>
          </div>
        </div>

        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>

          <ul className="menu p-4 w-72 min-h-full bg-base-200 text-base-content dropdown-content py-20">
            <NavlinkItems />
            <Logout />
          </ul>
        </div>
      </div>
    </>
  );
}
