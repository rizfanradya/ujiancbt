import LoginRegisterRouteSecure from "@/app/components/loginRegisterRouteSecure";
import Link from "next/link";
import FormLogin from "./form";

export default function AdminLogin() {
  return (
    <LoginRegisterRouteSecure>
      <title>Ujian CBT - Admin Login</title>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:h-screen relative">
        <div className="bg-[url('/bgloginadmin.jpg')] h-96 lg:h-full bg-no-repeat bg-cover bg-center"></div>

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
                <Link href={"/admin/login"}>
                  https://cbttestindonesia.sch.id
                </Link>{" "}
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
                ID Server dan periksa registrasi yang telah diberikan
              </p>
            </div>

            <FormLogin />

            <div className="text-sm text-slate-600 absolute bottom-6 right-6">
              CBT TEST Indonesia - Copyright © 2023-2024
            </div>
          </div>
        </div>
      </div>
    </LoginRegisterRouteSecure>
  );
}
