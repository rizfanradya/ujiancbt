import SideNav from "@/app/components/sideNav";
import { FaPlusCircle } from "react-icons/fa";

export default function Halaman2() {
  return (
    <SideNav
      docTitle="Halaman2"
      breadcrumbs={[{ name: "halaman2", path: "/" }]}
    >
      <div className="flex items-center justify-between border-b pb-4">
        <h1 className="font-light text-lg">Daftar Sekolah</h1>
        <div className="flex items-center justify-center gap-3">
          <div className="btn bg-blue-600/75 hover:bg-blue-700/75 transition rounded-none btn-sm text-sm font-light text-white">
            <FaPlusCircle size={15} />
            <span>Tambah Sekolah</span>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto mt-6">
        <table className="table">
          <thead>
            <tr className="text-[14px] text-black">
              <th className="border font-normal">No.</th>
              <th className="border font-normal">Kode Sekolah</th>
              <th className="border font-normal">Nama Sekolah</th>
              <th className="border font-normal">Alamat</th>
              <th className="border font-normal">Status Sinkron</th>
              <th className="border font-normal">Reset Sinkron</th>
              <th className="border font-normal">Status Server</th>
              <th className="border font-normal">Tindakan</th>
            </tr>
          </thead>
        </table>
      </div>
    </SideNav>
  );
}
