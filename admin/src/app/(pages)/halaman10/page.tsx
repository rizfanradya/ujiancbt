import SideNav from "@/app/components/sideNav";
import {
  FaCloudDownloadAlt,
  FaCloudUploadAlt,
  FaEdit,
  FaPlusCircle,
  FaRegTrashAlt,
} from "react-icons/fa";

export default function Halaman10() {
  return (
    <SideNav
      docTitle="Halaman10"
      breadcrumbs={[{ name: "halaman10", path: "/" }]}
    >
      <div className="flex items-center justify-between border-b pb-4">
        <h1 className="font-light text-lg">Data Mata Pelajaran</h1>
        <div className="flex items-center justify-center gap-1">
          <div className="btn bg-info rounded-none btn-sm text-sm font-light text-white">
            <FaCloudUploadAlt size={15} />
            <span>Upload Data Mapel</span>
          </div>
          <div className="btn bg-accent rounded-none btn-sm text-sm font-light text-white">
            <FaCloudDownloadAlt size={15} />
            <span>Rekap Excel Mapel</span>
          </div>
          <div className="btn bg-blue-600 rounded-none btn-sm text-sm font-light text-white">
            <FaPlusCircle size={15} />
            <span>Tambah Mapel</span>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto mt-6">
        <table className="table">
          <thead>
            <tr className="text-[14px] text-black">
              <th className="border font-normal">No</th>
              <th className="border font-normal">Kode Sekolah</th>
              <th className="border font-normal">Kode Mapel</th>
              <th className="border font-normal">Mata Pelajaran</th>
              <th className="border font-normal">Harian (%)</th>
              <th className="border font-normal">UTS (%)</th>
              <th className="border font-normal">UAS (%)</th>
              <th className="border font-normal">KKM</th>
              <th className="border font-normal">Jenis Mapel</th>
              <th className="border font-normal">Edit - Hapus</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border">
              <td className="border-x font-light text-center">1</td>
              <td className="border-x font-light">IPA</td>
              <td className="border-x font-light">IPA</td>
              <td className="border-x font-light">ILMU PENGETAHUAN ALAM</td>
              <td className="border-x font-light">0</td>
              <td className="border-x font-light">0</td>
              <td className="border-x font-light">100</td>
              <td className="border-x font-light">75</td>
              <td className="border-x font-light">N</td>
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
