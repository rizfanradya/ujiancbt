import SideNav from "@/app/components/sideNav";
import { FaEdit } from "react-icons/fa";

export default function Halaman12() {
  return (
    <SideNav
      docTitle="Halaman12"
      breadcrumbs={[{ name: "halaman12", path: "/" }]}
    >
      <div className="flex items-center justify-between border-b pb-4">
        <h1 className="font-light text-lg">Data Jadwal Ujian</h1>
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
              <th className="border font-normal">Ujian Mulai</th>
              <th className="border font-normal">Ujian Tutup</th>
              <th className="border font-normal">Status</th>
              <th className="border font-normal">Edit</th>
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
              <td className="border font-light">10:30:00</td>
              <td className="border font-light">18:03:00</td>
              <td className="border font-light">Selesai dikerjakan</td>
              <td className="border font-light flex items-center gap-2">
                <div className="text-white btn btn-sm rounded-none btn-info">
                  <FaEdit size={15} />
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
          <span className="font-semibold">Fitur Edit Setting Ujian : </span>Edit
          Kode Ujian, Kelas, Waktu, Tampil Nilai, Tampil Token pada login siswa
          dsb.
        </span>
      </div>
    </SideNav>
  );
}
