import SideNav from "@/app/components/sideNav";
import { FaEdit } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";

export default function Halaman3() {
  return (
    <SideNav
      docTitle="Halaman3"
      breadcrumbs={[{ name: "Halaman 3", path: "/" }]}
    >
      <div className="flex items-center justify-between border-b pb-4">
        <h1 className="font-light text-lg">Backup & Restore</h1>
        <div className="flex items-center justify-center gap-3">
          <div className="btn bg-blue-600/75 hover:bg-blue-700/75 transition rounded-none btn-sm text-sm font-light text-white">
            <span>Restore Database</span>
          </div>
        </div>
      </div>

      <div className="bg-blue-500/20 p-4 my-6 text-blue-600 text-sm font-light leading-loose">
        Tombol{" "}
        <span className="btn btn-error rounded-none font-normal btn-sm text-white">
          <IoIosClose className="font-bold" size={25} />
          <span>Delete</span>
        </span>{" "}
        : selain menghapus, juga akan membackup database sesuai pilihan, yang
        bisa direstore lagi suatu saat dibutuhkan. Lokasi file Backup anda,
        silahkan Lihat folder ==&gt; Downloads
      </div>

      <div className="overflow-x-auto mt-6">
        <table className="table">
          <thead>
            <tr className="text-[14px] text-black">
              <th className="border font-normal">No</th>
              <th className="border font-normal">Jenis Data</th>
              <th className="border font-normal">Backup Database</th>
              <th className="border font-normal">Hapus Database</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border font-light text-center">1</td>
              <td className="border font-light">
                <span className="text-primary">Data Sistem : </span>Mapel,
                Kelas, Siswa
              </td>
              <td className="border font-light">
                <div className="text-white btn btn-sm rounded-none btn-info">
                  <FaEdit size={15} />
                  <span>BackUp</span>
                </div>
              </td>
              <td className="border font-light">
                <div className="text-white btn btn-sm rounded-none btn-error">
                  <IoIosClose className="font-bold" size={25} />
                  <span>Delete</span>
                </div>
              </td>
            </tr>

            <tr>
              <td className="border font-light text-center">2</td>
              <td className="border font-light">
                <span className="text-error">Semua Data Ujian : </span>Bank
                Soal, Data Hasil Ujian dan Media Pendukung
              </td>
              <td className="border font-light">
                <div className="text-white btn btn-sm rounded-none btn-info">
                  <FaEdit size={15} />
                  <span>BackUp</span>
                </div>
              </td>
              <td className="border font-light">
                <div className="text-white btn btn-sm rounded-none btn-error">
                  <IoIosClose className="font-bold" size={25} />
                  <span>Delete</span>
                </div>
              </td>
            </tr>

            <tr>
              <td className="border font-light text-center">3</td>
              <td className="border font-light">
                <span className="text-primary">Data Hasil Ujian : </span>Data
                Ujian (kecuali Bank Soal dan Nilai)
              </td>
              <td className="border font-light">
                <div className="text-white btn btn-sm rounded-none btn-info">
                  <FaEdit size={15} />
                  <span>BackUp</span>
                </div>
              </td>
              <td className="border font-light">
                <div className="text-white btn btn-sm rounded-none btn-error">
                  <IoIosClose className="font-bold" size={25} />
                  <span>Delete</span>
                </div>
              </td>
            </tr>

            <tr>
              <td className="border font-light text-center">4</td>
              <td className="border font-light">
                <span className="text-primary">Data Media Pendukung </span>
                (hanya data SQLnya, File media tidak terhapus)
              </td>
              <td className="border font-light">
                <div className="text-white btn btn-sm rounded-none btn-info">
                  <FaEdit size={15} />
                  <span>BackUp</span>
                </div>
              </td>
              <td className="border font-light">
                <div className="text-white btn btn-sm rounded-none btn-error">
                  <IoIosClose className="font-bold" size={25} />
                  <span>Delete</span>
                </div>
              </td>
            </tr>

            <tr>
              <td className="border font-light text-center">5</td>
              <td className="border font-light">
                <span className="text-error">Semua Database</span>
              </td>
              <td className="border font-light">
                <div className="text-white btn btn-sm rounded-none btn-info">
                  <FaEdit size={15} />
                  <span>BackUp</span>
                </div>
              </td>
              <td className="border font-light">
                <div className="text-white btn btn-sm rounded-none btn-error">
                  <IoIosClose className="font-bold" size={25} />
                  <span>Delete</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </SideNav>
  );
}
