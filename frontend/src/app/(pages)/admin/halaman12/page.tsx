import AdminSideNav from "@/app/components/admin/sideNav";
import { FaEdit } from "react-icons/fa";

export default function Halaman12() {
  return (
    <AdminSideNav
      docTitle="Halaman12"
      breadcrumbs={[{ name: "halaman12", path: "/" }]}
    >
      <div className="flex items-center justify-between pb-4 border-b">
        <h1 className="text-lg font-light">Data Jadwal Ujian</h1>
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
              <th className="font-normal border">Ujian Mulai</th>
              <th className="font-normal border">Ujian Tutup</th>
              <th className="font-normal border">Status</th>
              <th className="font-normal border">Edit</th>
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
              <td className="font-light border">10:30:00</td>
              <td className="font-light border">18:03:00</td>
              <td className="font-light border">Selesai dikerjakan</td>
              <td className="flex items-center gap-2 font-light border">
                <div className="text-white rounded-none btn btn-sm btn-info">
                  <FaEdit size={15} />
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
          <span className="font-semibold">Fitur Edit Setting Ujian : </span>Edit
          Kode Ujian, Kelas, Waktu, Tampil Nilai, Tampil Token pada login siswa
          dsb.
        </span>
      </div>
    </AdminSideNav>
  );
}
