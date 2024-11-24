import Link from "next/link";
import FormLogin from "./form";
import LoginCarousel from "./carousel";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function AdminLogin() {
  const session: any = await getServerSession();
  if (session) {
    redirect("/");
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:h-screen relative">
      <title>Ujian CBT - Admin Login</title>
      <LoginCarousel />

      <div>
        <div className="bg-base-300 py-2 text-slate-700">
          <div className="bg-info py-1 px-2 shadow-lg w-max text-white">
            NAMA SERVER
          </div>
          <div className="flex flex-col gap-1 p-8">
            <span className="text-xl lg:text-2xl">
              TERIMAKASIH TELAH MENGGUNAKAN CBT TEST INDONESIA - U13140051
            </span>
            <span className="lg:text-lg">
              SILAHKAN LAKUKAN PENGATURAN DI MENU ADMINISTRATOR
            </span>
            <span className="text-xs lg:text-sm">
              Web :{" "}
              <Link href={"/admin/login"}>https://cbttestindonesia.sch.id</Link>{" "}
              - Telp : 0821-5598-1378
            </span>
          </div>
        </div>

        <div className="m-4 lg:m-16">
          <div className="mb-10">
            <h1 className="text-xl lg:text-3xl text-slate-600 mb-6">
              CBT TEST INDONESIA
            </h1>
            <p className="text-slate-500 text-xs lg:text-sm">
              Selamat datang di aplikasi CBT Test Indonesia. Silahkan masukkan
              Username dan Password yang telah diberikan
            </p>
          </div>

          <FormLogin />

          <div className="text-sm text-slate-600 absolute bottom-6 right-6">
            CBT TEST Indonesia - Copyright © 2023-2024
          </div>
        </div>
      </div>
    </div>
  );
}
