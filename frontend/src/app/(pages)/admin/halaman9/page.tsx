import AdminSideNav from "@/app/components/admin/sideNav";
import {
  FaCloudDownloadAlt,
  FaCloudUploadAlt,
  FaEdit,
  FaPlusCircle,
  FaRegTrashAlt,
} from "react-icons/fa";

export default function Halaman9() {
  return (
    <AdminSideNav
      docTitle="Halaman9"
      breadcrumbs={[{ name: "halaman9", path: "/" }]}
    >
      <div className="flex items-center justify-between pb-4 border-b">
        <h1 className="text-lg font-light">Data Kelas</h1>
        <div className="flex items-center justify-center gap-1">
          <div className="text-sm font-light text-white rounded-none btn bg-info btn-sm">
            <FaCloudUploadAlt size={15} />
            <span>Upload Data Kelas</span>
          </div>
          <div className="text-sm font-light text-white rounded-none btn bg-accent btn-sm">
            <FaCloudDownloadAlt size={15} />
            <span>Rekap Excel Kelas</span>
          </div>
          <div className="text-sm font-light text-white bg-blue-600 rounded-none btn btn-sm">
            <FaPlusCircle size={15} />
            <span>Tambah Kelas & Jurusan</span>
          </div>
        </div>
      </div>

      <div className="mt-6 overflow-x-auto">
        <table className="table">
          <thead>
            <tr className="text-[14px] text-black">
              <th className="font-normal border">Nomor</th>
              <th className="font-normal border">Kode Sekolah</th>
              <th className="font-normal border">Kode Level</th>
              <th className="font-normal border">Kode Kelas</th>
              <th className="font-normal border">Jurusan</th>
              <th className="font-normal border">Nama Kelas</th>
              <th className="font-normal border">Edit | Hapus</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border">
              <td className="font-light text-center border-x">1</td>
              <td className="font-light border-x">ALL</td>
              <td className="font-light border-x">IPS</td>
              <td className="font-light border-x">IPS</td>
              <td className="font-light border-x">IPS</td>
              <td className="font-light border-x">Sains-IPS</td>
              <td className="flex items-center gap-2 font-light border-x">
                <div className="text-white rounded-none btn btn-sm btn-info">
                  <FaEdit size={15} />
                </div>
                <div className="text-white rounded-none btn btn-sm btn-error">
                  <FaRegTrashAlt size={15} />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </AdminSideNav>
  );
}
