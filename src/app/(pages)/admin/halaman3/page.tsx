import AdminSideNav from "@/app/components/admin/sideNav";
import { FaEdit } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";

export default function Halaman3() {
  return (
    <AdminSideNav
      docTitle="Halaman3"
      breadcrumbs={[{ name: "Halaman 3", path: "/" }]}
    >
      <div className="flex items-center justify-between pb-4 border-b">
        <h1 className="text-lg font-light">Backup & Restore</h1>
        <div className="flex items-center justify-center gap-3">
          <div className="text-sm font-light text-white transition rounded-none btn bg-blue-600/75 hover:bg-blue-700/75 btn-sm">
            <span>Restore Database</span>
          </div>
        </div>
      </div>

      <div className="p-4 my-6 text-sm font-light leading-loose text-blue-600 bg-blue-500/20">
        Tombol{" "}
        <span className="font-normal text-white rounded-none btn btn-error btn-sm">
          <IoIosClose className="font-bold" size={25} />
          <span>Delete</span>
        </span>{" "}
        : selain menghapus, juga akan membackup database sesuai pilihan, yang
        bisa direstore lagi suatu saat dibutuhkan. Lokasi file Backup anda,
        silahkan Lihat folder ==&gt; Downloads
      </div>

      <div className="mt-6 overflow-x-auto">
        <table className="table">
          <thead>
            <tr className="text-[14px] text-black">
              <th className="font-normal border">No</th>
              <th className="font-normal border">Jenis Data</th>
              <th className="font-normal border">Backup Database</th>
              <th className="font-normal border">Hapus Database</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="font-light text-center border">1</td>
              <td className="font-light border">
                <span className="text-primary">Data Sistem : </span>Mapel,
                Kelas, Siswa
              </td>
              <td className="font-light border">
                <div className="text-white rounded-none btn btn-sm btn-info">
                  <FaEdit size={15} />
                  <span>BackUp</span>
                </div>
              </td>
              <td className="font-light border">
                <div className="text-white rounded-none btn btn-sm btn-error">
                  <IoIosClose className="font-bold" size={25} />
                  <span>Delete</span>
                </div>
              </td>
            </tr>

            <tr>
              <td className="font-light text-center border">2</td>
              <td className="font-light border">
                <span className="text-error">Semua Data Ujian : </span>Bank
                Soal, Data Hasil Ujian dan Media Pendukung
              </td>
              <td className="font-light border">
                <div className="text-white rounded-none btn btn-sm btn-info">
                  <FaEdit size={15} />
                  <span>BackUp</span>
                </div>
              </td>
              <td className="font-light border">
                <div className="text-white rounded-none btn btn-sm btn-error">
                  <IoIosClose className="font-bold" size={25} />
                  <span>Delete</span>
                </div>
              </td>
            </tr>

            <tr>
              <td className="font-light text-center border">3</td>
              <td className="font-light border">
                <span className="text-primary">Data Hasil Ujian : </span>Data
                Ujian (kecuali Bank Soal dan Nilai)
              </td>
              <td className="font-light border">
                <div className="text-white rounded-none btn btn-sm btn-info">
                  <FaEdit size={15} />
                  <span>BackUp</span>
                </div>
              </td>
              <td className="font-light border">
                <div className="text-white rounded-none btn btn-sm btn-error">
                  <IoIosClose className="font-bold" size={25} />
                  <span>Delete</span>
                </div>
              </td>
            </tr>

            <tr>
              <td className="font-light text-center border">4</td>
              <td className="font-light border">
                <span className="text-primary">Data Media Pendukung </span>
                (hanya data SQLnya, File media tidak terhapus)
              </td>
              <td className="font-light border">
                <div className="text-white rounded-none btn btn-sm btn-info">
                  <FaEdit size={15} />
                  <span>BackUp</span>
                </div>
              </td>
              <td className="font-light border">
                <div className="text-white rounded-none btn btn-sm btn-error">
                  <IoIosClose className="font-bold" size={25} />
                  <span>Delete</span>
                </div>
              </td>
            </tr>

            <tr>
              <td className="font-light text-center border">5</td>
              <td className="font-light border">
                <span className="text-error">Semua Database</span>
              </td>
              <td className="font-light border">
                <div className="text-white rounded-none btn btn-sm btn-info">
                  <FaEdit size={15} />
                  <span>BackUp</span>
                </div>
              </td>
              <td className="font-light border">
                <div className="text-white rounded-none btn btn-sm btn-error">
                  <IoIosClose className="font-bold" size={25} />
                  <span>Delete</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </AdminSideNav>
  );
}
