import SideNav from "@/app/components/sideNav";
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
    <SideNav
      docTitle="Halaman8"
      breadcrumbs={[{ name: "halaman8", path: "/" }]}
    >
      <div className="flex items-center justify-between border-b pb-4">
        <h1 className="font-light text-lg">Data Peserta Ujian</h1>
        <div className="flex items-center justify-center gap-1">
          <div className="btn bg-info rounded-none btn-sm text-sm font-light text-white">
            <FaCloudUploadAlt size={15} />
            <span>Upload Data Siswa</span>
          </div>
          <div className="btn bg-accent rounded-none btn-sm text-sm font-light text-white">
            <FaCloudDownloadAlt size={15} />
            <span>Rekap Siswa Excel</span>
          </div>
          <div className="btn bg-warning rounded-none btn-sm text-sm font-light text-white">
            <FaPlusCircle size={15} />
            <span>Tambah Siswa</span>
          </div>
          <div className="btn bg-error rounded-none btn-sm text-sm font-light text-white">
            <FaCloudUploadAlt size={15} />
            <span>Upload Foto</span>
          </div>
          <div className="btn btn-outline rounded-none btn-sm text-sm font-light">
            <IoMdPrint size={15} />
            <span>Cetak Foto</span>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto mt-6">
        <table className="table">
          <thead>
            <tr className="text-[14px] text-black">
              <th className="border font-normal">No</th>
              <th className="border font-normal">Kode Sekolah</th>
              <th className="border font-normal">Nomor Peserta | Sesi</th>
              <th className="border font-normal">Nama Peserta</th>
              <th className="border font-normal">Kelas-Jurusan</th>
              <th className="border font-normal">Nama Kelas</th>
              <th className="border font-normal">Agama</th>
              <th className="border font-normal">Mapel Pilihan</th>
              <th className="border font-normal">Edit | Hapus</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border">
              <td className="border-x font-light text-center">1</td>
              <td className="border-x font-light">ALL</td>
              <td className="border-x font-light">U1314005101 | 1</td>
              <td className="border-x font-light">ACHMAD ROIS SAPUTRA</td>
              <td className="border-x font-light">IPS-IPS</td>
              <td className="border-x font-light">Sains-IPS</td>
              <td className="border-x font-light"></td>
              <td className="border-x font-light"></td>
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
