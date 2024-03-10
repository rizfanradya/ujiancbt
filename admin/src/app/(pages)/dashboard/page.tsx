import PageRouteSecure from "@/app/components/pageRouteSecure";
import SideNav from "@/app/components/sideNav";
import { Archivo_Narrow } from "next/font/google";

const arialNarrow = Archivo_Narrow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Dashboard() {
  return (
    <PageRouteSecure>
      <SideNav
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
          <div className="max-w-xl flex flex-col gap-4">
            <span className="text-info font-semibold text-4xl">AKTIF</span>
            <span className="bg-sky-300/25 p-3 text-normal">
              RCBTsync siap digunakan
            </span>
            <span className="p-8 bg-slate-300/40 pl-3 ">
              Server ID :{" "}
              <span className="bg-sky-400 text-white p-1 pl-9 pr-9 font-semibold">
                U13140051-AXU
              </span>
            </span>
          </div>
        </div>
      </SideNav>
    </PageRouteSecure>
  );
}
