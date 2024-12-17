import AdminSideNav from "@/app/components/admin/sideNav";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";

export default function Halaman11() {
  return (
    <AdminSideNav
      docTitle="Halaman11"
      breadcrumbs={[{ name: "halaman11", path: "/" }]}
    >
      <div className="flex items-center justify-between pb-4 border-b">
        <h1 className="text-lg font-light">Daftar Jadwal Ujian</h1>
      </div>

      <div className="mt-6 overflow-x-auto">
        <table className="table">
          <thead>
            <tr className="text-[14px] text-black">
              <th className="font-normal border">No</th>
              <th className="font-normal border">Kode Ujian</th>
              <th className="font-normal border">Kelas</th>
              <th className="font-normal border">Kode Mapel</th>
              <th className="font-normal border">Kode Soal</th>
              <th className="font-normal border">Tgl Ujian</th>
              <th className="font-normal border">Token</th>
              <th className="font-normal border">Edit | Hapus</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="font-light text-center border">1</td>
              <td className="font-light border">UAS</td>
              <td className="font-light border">IPS-IPS</td>
              <td className="font-light border">
                PAI - PENDIDIKAN AGAMA ISLAM
              </td>
              <td className="font-light border">001</td>
              <td className="font-light border">2024-03-09</td>
              <td className="font-light border">YTPTG</td>
              <td className="flex items-center gap-2 font-light border">
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

      <div className="flex flex-col gap-2 p-6 mt-6 bg-slate-100">
        <span className="text-xl font-light text-primary/65">
          SMA ABDUSSALAM-CBT
        </span>
        <span className="text-sm font-light">
          <span className="font-semibold">Fitur Database Ujian : </span>Edit,
          Hapus & Aktifkan ujian yang pernah terpakai tanpa aktifkan Bank Soal
          selama Bank Soal masih ada (belum dihapus) juga untuk Hapus Database
          yang tidak terpakai (Bank Soal telah dihapus).
        </span>
        <span className="text-sm font-light">
          <span className="font-semibold">PENTING : </span>Hati-hati menggunakan
          fitur Hapus di sini, karena akan menghapus database RCBTSync (database
          ujian). Backup dahulu Sebelum Hapus dan pastikan semua ujian sudah
          selesai dan data tidak terpakai lagi. Menghapus sebelum selesai hari
          ujian akan menyebabkan analisa tidak bisa didownload walau bank soal
          belum dihapus. Download dan cetak dulu analisa hasil ujian baru
          database boleh dihapus bila sudah tidak terpakai.
        </span>
      </div>
    </AdminSideNav>
  );
}
