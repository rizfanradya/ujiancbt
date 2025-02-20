import AdminSideNav from "@/app/components/admin/sideNav";
import Image from "next/image";
import {
  FaCloudDownloadAlt,
  FaCloudUploadAlt,
  FaRegCopy,
  FaRegTrashAlt,
  FaThList,
} from "react-icons/fa";
import { IoMdPrint } from "react-icons/io";
import { IoDocumentOutline } from "react-icons/io5";

export default function halaman6() {
  return (
    <AdminSideNav
      docTitle="halaman6"
      breadcrumbs={[{ name: "halaman6", path: "/" }]}
    >
      <div className="flex items-center justify-between pb-4 border-b">
        <h1 className="text-lg font-light">Daftar Bank Soal</h1>
        <div className="flex items-center justify-center gap-3">
          <div className="text-sm font-light text-white transition rounded-none btn bg-blue-600/75 hover:bg-blue-700/75 btn-sm">
            <IoDocumentOutline size={15} />
            <span>Buat Bank Soal Baru</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col my-4">
        <span className="p-3 text-white bg-blue-600/75">
          Download FIle Excel (Template Soal)
        </span>
        <div className="flex items-center gap-4 p-4 border border-blue-600/75">
          <Image alt="excel" src={"/excel.svg"} width={75} height={75} />
          <div className="flex flex-col text-sm font-light text-gray-500">
            <span>
              Silahkan Klik tombol template dibawah, untuk <span>Download</span>{" "}
              file excel template soal sesuai dengan pilihannya.
            </span>
            <span>Jangan ada inputan apapun setelah nomor terakhir.</span>
            <span>Karena akan dibaca dan diacak oleh sistem.</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between pb-4 border-b">
        <h1 className="font-semibold text-blue-500">Pilih Template Soal</h1>
        <div className="flex items-center justify-center gap-1">
          <div className="text-sm font-light text-white transition rounded-none btn bg-accent hover:bg-accent btn-sm">
            <FaCloudDownloadAlt size={15} />
            <span>Template Soal Umum</span>
          </div>
          <div className="text-sm font-light text-white transition rounded-none btn bg-info hover:bg-info btn-sm">
            <FaCloudDownloadAlt size={15} />
            <span>Template Soal Peminatan</span>
          </div>
          <div className="text-sm font-light text-white transition rounded-none btn bg-error hover:bg-error btn-sm">
            <FaCloudDownloadAlt size={15} />
            <span>Template Soal Agama</span>
          </div>
        </div>
      </div>

      <div className="mt-6 overflow-x-auto">
        <table className="table">
          <thead>
            <tr className="text-[14px] text-black">
              <th className="font-normal border">No</th>
              <th className="font-normal border">Kode Sekolah</th>
              <th className="font-normal border">Kode Bank Soal</th>
              <th className="font-normal border">Mata Pelajaran</th>
              <th className="font-normal border">Soal</th>
              <th className="font-normal border">Kelas</th>
              <th className="font-normal border">
                Copy | Upload | Edit Bank Soal
              </th>
              <th className="font-normal border">Status</th>
              <th className="font-normal border">Print & Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border">
              <td className="font-light text-center border-x">1</td>
              <td className="font-light border-x">ALL</td>
              <td className="font-light border-x">001</td>
              <td className="font-light border-x">
                PENDIDIKAN AGAMA ISLAM (PAI)
              </td>
              <td className="font-light border-x">40 (5 opsi)</td>
              <td className="font-light border-x">IPS-IPS</td>
              <td className="flex items-center gap-2 font-light border-x">
                <div className="text-white rounded-none btn btn-sm btn-info">
                  <FaRegCopy size={15} />
                </div>
                <div className="text-white rounded-none btn btn-sm btn-warning">
                  <FaCloudUploadAlt size={15} />
                </div>
                <div className="text-white rounded-none btn btn-sm btn-info">
                  <FaThList size={15} />
                </div>
              </td>
              <td className="font-light border-x">
                <div className="font-normal text-white rounded-none btn btn-sm btn-accent">
                  Aktif
                </div>
              </td>
              <td className="flex items-center gap-2 font-light border-x">
                <div className="rounded-none btn btn-outline btn-sm">
                  <IoMdPrint size={15} />
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
