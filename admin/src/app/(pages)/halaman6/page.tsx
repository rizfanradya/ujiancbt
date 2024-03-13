import SideNav from "@/app/components/sideNav";
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
    <SideNav
      docTitle="halaman6"
      breadcrumbs={[{ name: "halaman6", path: "/" }]}
    >
      <div className="flex items-center justify-between border-b pb-4">
        <h1 className="font-light text-lg">Daftar Bank Soal</h1>
        <div className="flex items-center justify-center gap-3">
          <div className="btn bg-blue-600/75 hover:bg-blue-700/75 transition rounded-none btn-sm text-sm font-light text-white">
            <IoDocumentOutline size={15} />
            <span>Buat Bank Soal Baru</span>
          </div>
        </div>
      </div>

      <div className="my-4 flex flex-col">
        <span className="bg-blue-600/75 text-white p-3">
          Download FIle Excel (Template Soal)
        </span>
        <div className="border border-blue-600/75 p-4 flex items-center gap-4">
          <Image alt="excel" src={"/excel.svg"} width={75} height={75} />
          <div className="flex flex-col text-sm text-gray-500 font-light">
            <span>
              Silahkan Klik tombol template dibawah, untuk <span>Download</span>{" "}
              file excel template soal sesuai dengan pilihannya.
            </span>
            <span>Jangan ada inputan apapun setelah nomor terakhir.</span>
            <span>Karena akan dibaca dan diacak oleh sistem.</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between border-b pb-4">
        <h1 className="text-blue-500 font-semibold">Pilih Template Soal</h1>
        <div className="flex items-center justify-center gap-1">
          <div className="btn bg-accent hover:bg-accent transition rounded-none btn-sm text-sm font-light text-white">
            <FaCloudDownloadAlt size={15} />
            <span>Template Soal Umum</span>
          </div>
          <div className="btn bg-info hover:bg-info transition rounded-none btn-sm text-sm font-light text-white">
            <FaCloudDownloadAlt size={15} />
            <span>Template Soal Peminatan</span>
          </div>
          <div className="btn bg-error hover:bg-error transition rounded-none btn-sm text-sm font-light text-white">
            <FaCloudDownloadAlt size={15} />
            <span>Template Soal Agama</span>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto mt-6">
        <table className="table">
          <thead>
            <tr className="text-[14px] text-black">
              <th className="border font-normal">No</th>
              <th className="border font-normal">Kode Sekolah</th>
              <th className="border font-normal">Kode Bank Soal</th>
              <th className="border font-normal">Mata Pelajaran</th>
              <th className="border font-normal">Soal</th>
              <th className="border font-normal">Kelas</th>
              <th className="border font-normal">
                Copy | Upload | Edit Bank Soal
              </th>
              <th className="border font-normal">Status</th>
              <th className="border font-normal">Print & Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border">
              <td className="border-x font-light text-center">1</td>
              <td className="border-x font-light">ALL</td>
              <td className="border-x font-light">001</td>
              <td className="border-x font-light">
                PENDIDIKAN AGAMA ISLAM (PAI)
              </td>
              <td className="border-x font-light">40 (5 opsi)</td>
              <td className="border-x font-light">IPS-IPS</td>
              <td className="border-x font-light flex items-center gap-2">
                <div className="text-white btn btn-sm rounded-none btn-info">
                  <FaRegCopy size={15} />
                </div>
                <div className="text-white btn btn-sm rounded-none btn-warning">
                  <FaCloudUploadAlt size={15} />
                </div>
                <div className="text-white btn btn-sm rounded-none btn-info">
                  <FaThList size={15} />
                </div>
              </td>
              <td className="border-x font-light">
                <div className="btn btn-sm btn-accent rounded-none font-normal text-white">
                  Aktif
                </div>
              </td>
              <td className="border-x font-light flex items-center gap-2">
                <div className="btn btn-outline rounded-none btn-sm">
                  <IoMdPrint size={15} />
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
