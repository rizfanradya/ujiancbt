import Image from "next/image";
import Link from "next/link";
import { PiStudentFill } from "react-icons/pi";
import Logout from "./logout";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import PageRouteSecure from "@/app/components/pageRouteSecure";
import axios from "axios";

export default async function Dashboard() {
  const session: any = await getServerSession();
  // if (!session) {
  //   redirect("/login");
  // }

  // const { data }: any = await axios.post(
  //   `http://localhost:3000/api/getUserById`,
  //   {
  //     id: parseInt(session.user.name),
  //   }
  // );

  return (
    <PageRouteSecure>
      <title>Dashboard</title>
      <div className="pb-6">
        <div className="bg-[url('/bglogin.png')] bg-no-repeat bg-cover w-full sm:h-56 h-96 border-b-4 border-slate-400 absolute -z-10"></div>

        <div className="flex sm:justify-between flex-col sm:flex-row justify-center gap-8 items-center py-4 px-4 md:px-8 text-center sm:text-start">
          <div className="flex items-center gap-2 flex-col sm:flex-row">
            <Image
              src={"/tutwuri.png"}
              alt="Tut Wuri Handayani"
              width={70}
              height={70}
            />
            <div className="text-white">
              <p className="font-semibold text-2xl">AKM Sekolah</p>
              <p>CBT Application</p>
            </div>
          </div>

          <div>
            <div className="text-white font-semibold text-sm flex items-center justify-center text-center gap-2 flex-col sm:flex-row">
              <div className="order-2 sm:order-1 text-end capitalize flex flex-col gap-2">
                <p>Peserta {"data.user.nama"}</p>
                <Logout />
              </div>
              <div className="text-white bg-info p-2 rounded-lg w-min order-1 sm:order-2">
                <PiStudentFill size={"3em"} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-4 flex-wrap md:mt-10 justify-center">
          <div className="card bg-base-100 shadow-xl mx-4 max-w-2xl w-full">
            <div className="card-body">
              <h1 className="font-semibold text-xl text-center">
                Konfirmasi Test
              </h1>

              <div className="mt-6 border-b border-slate-300">
                <p className="font-medium text-sm mb-2 text-slate-500">
                  Nama Test
                </p>
                <p>AKM 2023</p>
              </div>
              <div className="mt-6 border-b border-slate-300">
                <p className="font-medium text-sm mb-2 text-slate-500">
                  Status Test
                </p>
                <p>Aktif</p>
              </div>
              <div className="mt-6 border-b border-slate-300">
                <p className="font-medium text-sm mb-2 text-slate-500">
                  Sub Test
                </p>
                <p>Nama Mapel</p>
              </div>
              <div className="mt-6 border-b border-slate-300">
                <p className="font-medium text-sm mb-2 text-slate-500">
                  Tanggal Test
                </p>
                <p>29 Februari 2024</p>
              </div>
              <div className="mt-6 border-b border-slate-300">
                <p className="font-medium text-sm mb-2 text-slate-500">
                  Waktu Test
                </p>
                <p>08:00</p>
              </div>
              <div className="mt-6 border-b border-slate-300">
                <p className="font-medium text-sm mb-2 text-slate-500">
                  Alokasi Waktu Test
                </p>
                <p>120 Menit</p>
              </div>
              <div className="mt-6 border-b border-slate-300">
                <p className="font-medium text-sm mb-2 text-slate-500">Token</p>
                <p>AUTO</p>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl mx-4 max-w-2xl xl:max-w-sm w-full h-min">
            <div className="card-body">
              <div className="flex flex-col gap-4 text-center">
                <p className="font-light">
                  TOMBOL MULAI hanya akan aktif apabila waktu sekarang sudah
                  melewati waktu mulai test
                </p>

                <Link
                  href={"/"}
                  className="btn btn-info rounded-full text-white"
                >
                  MULAI
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageRouteSecure>
  );
}
