import { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { RiMenu3Fill } from "react-icons/ri";
import AdminLogout from "../logout";
import AdminNavlinkItems from "../navlinkItems";

export default async function AdminSideNav({
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
      <div className="fixed z-10 flex items-center justify-between w-full px-2 py-5 text-white bg-slate-700 md:px-6">
        <Link href={"/"} className="flex items-center gap-2">
          <Image alt="logo" src={"/tutwuri.png"} width={60} height={60} />
          <div className="text-white">
            <p className="-mb-1 font-sans text-xl font-bold">
              CBT Test Indonesia
            </p>
            <p>CBT Application</p>
          </div>
        </Link>

        <div className="flex items-center gap-2 sm:gap-4">
          <div className="font-semibold text-info sm:text-2xl">AKTIF</div>
          <label htmlFor="my-drawer" className="cursor-pointer lg:hidden">
            <RiMenu3Fill size={25} />
          </label>
        </div>
      </div>

      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />

        <div className="drawer-content">
          <div className="px-3 pt-24 bg-slate-700">
            <div className="bg-white">
              <div className="px-2 border-b breadcrumbs border-black/5">
                <ul>
                  {breadcrumbs.map((doc, index) => (
                    <li className="text-slate-500/80" key={index}>
                      <Link href={`/${doc.path}`}>{doc.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex">
                <ul className="hidden w-full my-4 ml-4 border menu max-w-72 lg:block border-black/5 ">
                  <AdminNavlinkItems />
                  <AdminLogout />
                </ul>
                <div className="w-full p-8 m-4 overflow-hidden border pl-7 t-10 border-black/5 h-max">
                  {children}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center w-full text-sm bg-slate-700">
              <span className="w-full py-2 my-3 text-center bg-white">
                CBT TEST Indonesia - Copyright © 2023-2024
              </span>
            </div>
          </div>
        </div>

        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>

          <ul className="min-h-full p-4 py-20 menu w-72 bg-base-200 text-base-content dropdown-content">
            <AdminNavlinkItems />
            <AdminLogout />
          </ul>
        </div>
      </div>
    </>
  );
}
