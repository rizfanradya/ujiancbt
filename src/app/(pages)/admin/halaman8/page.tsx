import AdminSideNav from "@/app/components/admin/sideNav";
import {
  FaCloudDownloadAlt,
  FaCloudUploadAlt,
  FaEdit,
  FaPlusCircle,
  FaRegTrashAlt,
} from "react-icons/fa";
import { IoMdPrint } from "react-icons/io";

export default function Halaman8() {
  return (
    <AdminSideNav
      docTitle="Halaman8"
      breadcrumbs={[{ name: "halaman8", path: "/" }]}
    >
      <div className="flex items-center justify-between pb-4 border-b">
        <h1 className="text-lg font-light">Data Peserta Ujian</h1>
        <div className="flex items-center justify-center gap-1">
          <div className="text-sm font-light text-white rounded-none btn bg-info btn-sm">
            <FaCloudUploadAlt size={15} />
            <span>Upload Data Siswa</span>
          </div>
          <div className="text-sm font-light text-white rounded-none btn bg-accent btn-sm">
            <FaCloudDownloadAlt size={15} />
            <span>Rekap Siswa Excel</span>
          </div>
          <div className="text-sm font-light text-white rounded-none btn bg-warning btn-sm">
            <FaPlusCircle size={15} />
            <span>Tambah Siswa</span>
          </div>
          <div className="text-sm font-light text-white rounded-none btn bg-error btn-sm">
            <FaCloudUploadAlt size={15} />
            <span>Upload Foto</span>
          </div>
          <div className="text-sm font-light rounded-none btn btn-outline btn-sm">
            <IoMdPrint size={15} />
            <span>Cetak Foto</span>
          </div>
        </div>
      </div>

      <div className="mt-6 overflow-x-auto">
        <table className="table">
          <thead>
            <tr className="text-[14px] text-black">
              <th className="font-normal border">No</th>
              <th className="font-normal border">Kode Sekolah</th>
              <th className="font-normal border">Nomor Peserta | Sesi</th>
              <th className="font-normal border">Nama Peserta</th>
              <th className="font-normal border">Kelas-Jurusan</th>
              <th className="font-normal border">Nama Kelas</th>
              <th className="font-normal border">Agama</th>
              <th className="font-normal border">Mapel Pilihan</th>
              <th className="font-normal border">Edit | Hapus</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border">
              <td className="font-light text-center border-x">1</td>
              <td className="font-light border-x">ALL</td>
              <td className="font-light border-x">U1314005101 | 1</td>
              <td className="font-light border-x">ACHMAD ROIS SAPUTRA</td>
              <td className="font-light border-x">IPS-IPS</td>
              <td className="font-light border-x">Sains-IPS</td>
              <td className="font-light border-x"></td>
              <td className="font-light border-x"></td>
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
