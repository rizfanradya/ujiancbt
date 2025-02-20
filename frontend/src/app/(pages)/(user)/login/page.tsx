import Image from "next/image";
import FormLogin from "./form";
import { Archivo_Narrow } from "next/font/google";
import AuthPageRouteSecure from "@/app/components/global/authPageRouteSecure";

const arialNarrow = Archivo_Narrow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default async function Login() {
  return (
    <AuthPageRouteSecure>
      <title>CBT Aplication - AKM Sekolah</title>
      <div className="flex justify-center bg-base-300">
        <div className="bg-[url('/bglogin.png')] bg-no-repeat bg-cover w-screen h-56 border-b-4 border-slate-400"></div>

        <div className="absolute flex flex-col items-center justify-center py-6">
          <div className="flex items-center gap-2 mb-6">
            <Image
              src={"/tutwuri.png"}
              alt="Tut Wuri Handayani"
              width={80}
              height={80}
            />
            <div className="text-white">
              <p className="-mb-1 font-sans text-2xl font-semibold">
                CBT Test Indonesia
              </p>
              <p>CBT Application</p>
            </div>
          </div>

          <div className="max-w-md pt-3 m-4 bg-white shadow-xl card">
            <div className="pt-5 card-body pm-5">
              <div className="mt-5 pl-9 pr-9 m5-5">
                <h1
                  className={`card-title text-2xl font-normal mb-1 ${arialNarrow.className}`}
                >
                  Selamat Datang
                </h1>
                <p className="mb-4 text-sm font-light">
                  Silahkan login menggunakan Username dan Password yang anda
                  miliki
                </p>
                <FormLogin />
                <div className="pt-2 text-xs italic font-semibold text-center text-red-500">
                  <span className="flex items-center justify-center gap-14">
                    <span>*</span>
                    <span>Username Wajib Diisi</span>
                  </span>
                  <span className="flex items-center justify-center gap-14">
                    <span>*</span>
                    <span>Password Wajib Diisi</span>
                  </span>
                </div>
              </div>
            </div>

            <p className="py-2 text-xs font-light text-center border-t-2">
              Copyright © 2024 <span className="font-medium">AKM Sekolah</span>{" "}
              - V.1.0.0
            </p>
          </div>
        </div>
      </div>
    </AuthPageRouteSecure>
  );
}
