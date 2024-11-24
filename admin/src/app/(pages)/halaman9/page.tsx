import SideNav from "@/app/components/sideNav";
import {
  FaCloudDownloadAlt,
  FaCloudUploadAlt,
  FaEdit,
  FaPlusCircle,
  FaRegTrashAlt,
} from "react-icons/fa";

export default function Halaman9() {
  return (
    <SideNav
      docTitle="Halaman9"
      breadcrumbs={[{ name: "halaman9", path: "/" }]}
    >
      <div className="flex items-center justify-between border-b pb-4">
        <h1 className="font-light text-lg">Data Kelas</h1>
        <div className="flex items-center justify-center gap-1">
          <div className="btn bg-info rounded-none btn-sm text-sm font-light text-white">
            <FaCloudUploadAlt size={15} />
            <span>Upload Data Kelas</span>
          </div>
          <div className="btn bg-accent rounded-none btn-sm text-sm font-light text-white">
            <FaCloudDownloadAlt size={15} />
            <span>Rekap Excel Kelas</span>
          </div>
          <div className="btn bg-blue-600 rounded-none btn-sm text-sm font-light text-white">
            <FaPlusCircle size={15} />
            <span>Tambah Kelas & Jurusan</span>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto mt-6">
        <table className="table">
          <thead>
            <tr className="text-[14px] text-black">
              <th className="border font-normal">Nomor</th>
              <th className="border font-normal">Kode Sekolah</th>
              <th className="border font-normal">Kode Level</th>
              <th className="border font-normal">Kode Kelas</th>
              <th className="border font-normal">Jurusan</th>
              <th className="border font-normal">Nama Kelas</th>
              <th className="border font-normal">Edit | Hapus</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border">
              <td className="border-x font-light text-center">1</td>
              <td className="border-x font-light">ALL</td>
              <td className="border-x font-light">IPS</td>
              <td className="border-x font-light">IPS</td>
              <td className="border-x font-light">IPS</td>
              <td className="border-x font-light">Sains-IPS</td>
              <td className="border-x font-light flex items-center gap-2">
                <div className="text-white btn btn-sm rounded-none btn-info">
                  <FaEdit size={15} />
                </div>
                <div className="text-white btn btn-sm rounded-none btn-error">
                  <FaRegTrashAlt size={15} />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </SideNav>
  );
}
