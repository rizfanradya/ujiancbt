import SideNav from "@/app/components/sideNav";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";

export default function Halaman11() {
  return (
    <SideNav
      docTitle="Halaman11"
      breadcrumbs={[{ name: "halaman11", path: "/" }]}
    >
      <div className="flex items-center justify-between border-b pb-4">
        <h1 className="font-light text-lg">Daftar Jadwal Ujian</h1>
      </div>

      <div className="overflow-x-auto mt-6">
        <table className="table">
          <thead>
            <tr className="text-[14px] text-black">
              <th className="border font-normal">No</th>
              <th className="border font-normal">Kode Ujian</th>
              <th className="border font-normal">Kelas</th>
              <th className="border font-normal">Kode Mapel</th>
              <th className="border font-normal">Kode Soal</th>
              <th className="border font-normal">Tgl Ujian</th>
              <th className="border font-normal">Token</th>
              <th className="border font-normal">Edit | Hapus</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border font-light text-center">1</td>
              <td className="border font-light">UAS</td>
              <td className="border font-light">IPS-IPS</td>
              <td className="border font-light">
                PAI - PENDIDIKAN AGAMA ISLAM
              </td>
              <td className="border font-light">001</td>
              <td className="border font-light">2024-03-09</td>
              <td className="border font-light">YTPTG</td>
              <td className="border font-light flex items-center gap-2">
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

      <div className="flex flex-col bg-slate-100 p-6 mt-6 gap-2">
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
    </SideNav>
  );
}
