import AdminSideNav from "@/app/components/admin/sideNav";
import { FaPlusCircle } from "react-icons/fa";

export default function Halaman2() {
  return (
    <AdminSideNav
      docTitle="Halaman2"
      breadcrumbs={[{ name: "halaman2", path: "/" }]}
    >
      <div className="flex items-center justify-between pb-4 border-b">
        <h1 className="text-lg font-light">Daftar Sekolah</h1>
        <div className="flex items-center justify-center gap-3">
          <div className="text-sm font-light text-white transition rounded-none btn bg-blue-600/75 hover:bg-blue-700/75 btn-sm">
            <FaPlusCircle size={15} />
            <span>Tambah Sekolah</span>
          </div>
        </div>
      </div>

      <div className="mt-6 overflow-x-auto">
        <table className="table">
          <thead>
            <tr className="text-[14px] text-black">
              <th className="font-normal border">No.</th>
              <th className="font-normal border">Kode Sekolah</th>
              <th className="font-normal border">Nama Sekolah</th>
              <th className="font-normal border">Alamat</th>
              <th className="font-normal border">Status Sinkron</th>
              <th className="font-normal border">Reset Sinkron</th>
              <th className="font-normal border">Status Server</th>
              <th className="font-normal border">Tindakan</th>
            </tr>
          </thead>
        </table>
      </div>
    </AdminSideNav>
  );
}
