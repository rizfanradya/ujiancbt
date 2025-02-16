/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import FormLogin from "./form";
import LoginCarousel from "./carousel";

export default async function AdminLogin() {
  // const session: any = await getServerSession();
  // if (session) {
  //   redirect("/");
  // }

  return (
    <div className="relative grid grid-cols-1 lg:grid-cols-2 lg:h-screen">
      <title>Ujian CBT - Admin Login</title>
      <LoginCarousel />

      <div>
        <div className="py-2 bg-base-300 text-slate-700">
          <div className="px-2 py-1 text-white shadow-lg bg-info w-max">
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
            <h1 className="mb-6 text-xl lg:text-3xl text-slate-600">
              CBT TEST INDONESIA
            </h1>
            <p className="text-xs text-slate-500 lg:text-sm">
              Selamat datang di aplikasi CBT Test Indonesia. Silahkan masukkan
              Username dan Password yang telah diberikan
            </p>
          </div>

          <FormLogin />

          <div className="absolute text-sm text-slate-600 bottom-6 right-6">
            CBT TEST Indonesia - Copyright © 2023-2024
          </div>
        </div>
      </div>
    </div>
  );
}
