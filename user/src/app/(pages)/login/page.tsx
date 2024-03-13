import Image from "next/image";
import FormLogin from "./form";
import LoginRegisterRouteSecure from "@/app/components/loginRegisterRouteSecure";
import { Archivo_Narrow } from "next/font/google";

const arialNarrow = Archivo_Narrow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default async function Login() {
  return (
    <LoginRegisterRouteSecure>
      <title>CBT Aplication - AKM Sekolah</title>
      <div className="bg-base-300 flex justify-center">
        <div className="bg-[url('/bglogin.png')] bg-no-repeat bg-cover w-screen h-56 border-b-4 border-slate-400"></div>

        <div className="absolute flex flex-col justify-center items-center py-6">
          <div className="flex items-center gap-2 mb-6">
            <Image
              src={"/tutwuri.png"}
              alt="Tut Wuri Handayani"
              width={80}
              height={80}
            />
            <div className="text-white">
              <p className="font-semibold text-2xl -mb-1 font-sans">
                CBT Test Indonesia
              </p>
              <p>CBT Application</p>
            </div>
          </div>

          <div className="card max-w-md shadow-xl m-4 bg-white pt-3">
            <div className="card-body pt-5 pm-5">
              <div className="pl-9 pr-9 mt-5 m5-5">
                <h1
                  className={`card-title text-2xl font-normal mb-1 ${arialNarrow.className}`}
                >
                  Selamat Datang
                </h1>
                <p className="font-light mb-4 text-sm">
                  Silahkan login menggunakan Username dan Password yang anda
                  miliki
                </p>
                <FormLogin />
                <div className="font-semibold text-xs text-red-500 italic text-center pt-2">
                  <span className="flex items-center gap-14 justify-center">
                    <span>*</span>
                    <span>Username Wajib Diisi</span>
                  </span>
                  <span className="flex items-center gap-14 justify-center">
                    <span>*</span>
                    <span>Password Wajib Diisi</span>
                  </span>
                </div>
              </div>
            </div>

            <p className="text-center py-2 font-light border-t-2 text-xs">
              Copyright © 2024 <span className="font-medium">AKM Sekolah</span>{" "}
              - V.1.0.0
            </p>
          </div>
        </div>
      </div>
    </LoginRegisterRouteSecure>
  );
}
