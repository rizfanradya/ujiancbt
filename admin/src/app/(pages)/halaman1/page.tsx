import SideNav from "@/app/components/sideNav";
import {
  FaCloudDownloadAlt,
  FaEdit,
  FaPlusCircle,
  FaRegTrashAlt,
} from "react-icons/fa";
import { MdOutlineZoomOutMap } from "react-icons/md";

export default function Halaman1() {
  return (
    <SideNav
      docTitle="Halaman1"
      breadcrumbs={[{ name: "halaman1", path: "/" }]}
    >
      <div className="flex items-center justify-between border-b pb-4">
        <h1 className="font-light text-lg">Data User</h1>
        <div className="flex items-center justify-center gap-3">
          <div className="btn bg-blue-600/75 hover:bg-blue-700/75 transition rounded-none btn-sm text-sm font-light text-white">
            <FaPlusCircle size={15} />
            <span>Tambah User</span>
          </div>
          <div className="btn bg-blue-600/75 hover:bg-blue-700/75 transition rounded-none btn-sm text-sm font-light text-white">
            <FaCloudDownloadAlt size={15} />
            <span>Download Data</span>
          </div>
          <div className="p-1 border text-gray-700 cursor-pointer">
            <MdOutlineZoomOutMap size={20} />
          </div>
        </div>
      </div>

      <div className="overflow-x-auto mt-6">
        <table className="table">
          <thead>
            <tr className="text-[14px] text-black">
              <th className="border font-normal">No</th>
              <th className="border font-normal">User Name</th>
              <th className="border font-normal">Nama</th>
              <th className="border font-normal">Alamat</th>
              <th className="border font-normal">Level</th>
              <th className="border font-normal">Status</th>
              <th className="border font-normal">Edit | Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border font-light text-center">1</td>
              <td className="border font-light">SMA12345678</td>
              <td className="border font-light">Admin</td>
              <td className="border font-light">Jl. Cempaka Putih No 12</td>
              <td className="border font-light">ADMIN</td>
              <td className="border font-light">
                <div className="btn btn-sm btn-accent rounded-none font-normal text-white">
                  Aktif
                </div>
              </td>
              <td className="border font-light flex items-center gap-2">
                <div className="text-white btn btn-sm rounded-none btn-info">
                  <FaEdit size={15} />
                </div>
                <div className="text-white btn btn-sm rounded-none btn-error">
                  <FaRegTrashAlt size={15} />
                </div>
              </td>
            </tr>
            <tr>
              <td className="border font-light text-center">2</td>
              <td className="border font-light">U0210045-AXU</td>
              <td className="border font-light">RCBTSync</td>
              <td className="border font-light">-</td>
              <td className="border font-light">GURU</td>
              <td className="border font-light">
                <div className="btn btn-sm btn-accent rounded-none font-normal text-white">
                  Aktif
                </div>
              </td>
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
          <span className="font-semibold">Fitur Manajemen User : </span>Edit,
          Tambah dan Hapus daftar User, tentukan Hak Akses Admin / Guru dan
          aktivasi Akses
        </span>
      </div>
    </SideNav>
  );
}
