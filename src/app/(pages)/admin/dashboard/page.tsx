import AdminSideNav from "@/app/components/admin/sideNav";
import { Archivo_Narrow } from "next/font/google";

const arialNarrow = Archivo_Narrow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function AdminDashboard() {
  return (
    <AdminSideNav
      docTitle="Dashboard"
      breadcrumbs={[
        { name: "Dashboard", path: "dashboard" },
        { name: "Beranda", path: "dashboard" },
      ]}
    >
      <div>
        <h1
          className={`text-3xl border-b border-black/5 mb-8 pb-2 text-slate-400/95 ${arialNarrow.className}`}
        >
          Dashboard
        </h1>
        <div className="flex flex-col max-w-xl gap-4">
          <span className="text-4xl font-semibold text-info">AKTIF</span>
          <span className="p-3 bg-sky-300/25 text-normal">
            RCBTsync siap digunakan
          </span>
          <span className="p-8 pl-3 bg-slate-300/40 ">
            Server ID :{" "}
            <span className="p-1 font-semibold text-white bg-sky-400 pl-9 pr-9">
              U13140051-AXU
            </span>
          </span>
        </div>
      </div>
    </AdminSideNav>
  );
}
