import Image from "next/image";
import Link from "next/link";
import { PiStudentFill } from "react-icons/pi";
import Logout from "./logout";
import PageRouteSecure from "@/app/components/global/pageRouteSecure";

export default async function Dashboard() {
  const data = { user: { nama: "unknown" } };
  // const session: any = await getServerSession();
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

        <div className="flex flex-col items-center justify-center gap-8 px-4 py-4 text-center sm:justify-between sm:flex-row md:px-8 sm:text-start">
          <div className="flex flex-col items-center gap-2 sm:flex-row">
            <Image
              src={"/tutwuri.png"}
              alt="Tut Wuri Handayani"
              width={70}
              height={70}
            />
            <div className="text-white">
              <p className="text-2xl font-semibold">AKM Sekolah</p>
              <p>CBT Application</p>
            </div>
          </div>

          <div>
            <div className="flex flex-col items-center justify-center gap-2 text-sm font-semibold text-center text-white sm:flex-row">
              <div className="flex flex-col order-2 gap-2 capitalize sm:order-1 text-end">
                <p>Peserta {data.user.nama}</p>
                <Logout />
              </div>
              <div className="order-1 p-2 text-white rounded-lg bg-info w-min sm:order-2">
                <PiStudentFill size={"3em"} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-4 md:mt-10">
          <div className="w-full max-w-2xl mx-4 shadow-xl card bg-base-100">
            <div className="card-body">
              <h1 className="text-xl font-semibold text-center">
                Konfirmasi Test
              </h1>

              <div className="mt-6 border-b border-slate-300">
                <p className="mb-2 text-sm font-medium text-slate-500">
                  Nama Test
                </p>
                <p>AKM 2023</p>
              </div>
              <div className="mt-6 border-b border-slate-300">
                <p className="mb-2 text-sm font-medium text-slate-500">
                  Status Test
                </p>
                <p>Aktif</p>
              </div>
              <div className="mt-6 border-b border-slate-300">
                <p className="mb-2 text-sm font-medium text-slate-500">
                  Sub Test
                </p>
                <p>Nama Mapel</p>
              </div>
              <div className="mt-6 border-b border-slate-300">
                <p className="mb-2 text-sm font-medium text-slate-500">
                  Tanggal Test
                </p>
                <p>29 Februari 2024</p>
              </div>
              <div className="mt-6 border-b border-slate-300">
                <p className="mb-2 text-sm font-medium text-slate-500">
                  Waktu Test
                </p>
                <p>08:00</p>
              </div>
              <div className="mt-6 border-b border-slate-300">
                <p className="mb-2 text-sm font-medium text-slate-500">
                  Alokasi Waktu Test
                </p>
                <p>120 Menit</p>
              </div>
              <div className="mt-6 border-b border-slate-300">
                <p className="mb-2 text-sm font-medium text-slate-500">Token</p>
                <p>AUTO</p>
              </div>
            </div>
          </div>

          <div className="w-full max-w-2xl mx-4 shadow-xl card bg-base-100 xl:max-w-sm h-min">
            <div className="card-body">
              <div className="flex flex-col gap-4 text-center">
                <p className="font-light">
                  TOMBOL MULAI hanya akan aktif apabila waktu sekarang sudah
                  melewati waktu mulai test
                </p>

                <Link
                  href={"/"}
                  className="text-white rounded-full btn btn-info"
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
