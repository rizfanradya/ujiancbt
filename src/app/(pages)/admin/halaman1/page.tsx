import AdminSideNav from "@/app/components/admin/sideNav";
import {
  FaCloudDownloadAlt,
  FaEdit,
  FaPlusCircle,
  FaRegTrashAlt,
} from "react-icons/fa";
import { MdOutlineZoomOutMap } from "react-icons/md";

export default function Halaman1() {
  return (
    <AdminSideNav
      docTitle="Halaman1"
      breadcrumbs={[{ name: "halaman1", path: "/" }]}
    >
      <div className="flex items-center justify-between pb-4 border-b">
        <h1 className="text-lg font-light">Data User</h1>
        <div className="flex items-center justify-center gap-3">
          <div className="text-sm font-light text-white transition rounded-none btn bg-blue-600/75 hover:bg-blue-700/75 btn-sm">
            <FaPlusCircle size={15} />
            <span>Tambah User</span>
          </div>
          <div className="text-sm font-light text-white transition rounded-none btn bg-blue-600/75 hover:bg-blue-700/75 btn-sm">
            <FaCloudDownloadAlt size={15} />
            <span>Download Data</span>
          </div>
          <div className="p-1 text-gray-700 border cursor-pointer">
            <MdOutlineZoomOutMap size={20} />
          </div>
        </div>
      </div>

      <div className="mt-6 overflow-x-auto">
        <table className="table">
          <thead>
            <tr className="text-[14px] text-black">
              <th className="font-normal border">No</th>
              <th className="font-normal border">User Name</th>
              <th className="font-normal border">Nama</th>
              <th className="font-normal border">Alamat</th>
              <th className="font-normal border">Level</th>
              <th className="font-normal border">Status</th>
              <th className="font-normal border">Edit | Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="font-light text-center border">1</td>
              <td className="font-light border">SMA12345678</td>
              <td className="font-light border">Admin</td>
              <td className="font-light border">Jl. Cempaka Putih No 12</td>
              <td className="font-light border">ADMIN</td>
              <td className="font-light border">
                <div className="font-normal text-white rounded-none btn btn-sm btn-accent">
                  Aktif
                </div>
              </td>
              <td className="flex items-center gap-2 font-light border">
                <div className="text-white rounded-none btn btn-sm btn-info">
                  <FaEdit size={15} />
                </div>
                <div className="text-white rounded-none btn btn-sm btn-error">
                  <FaRegTrashAlt size={15} />
                </div>
              </td>
            </tr>
            <tr>
              <td className="font-light text-center border">2</td>
              <td className="font-light border">U0210045-AXU</td>
              <td className="font-light border">RCBTSync</td>
              <td className="font-light border">-</td>
              <td className="font-light border">GURU</td>
              <td className="font-light border">
                <div className="font-normal text-white rounded-none btn btn-sm btn-accent">
                  Aktif
                </div>
              </td>
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
          <span className="font-semibold">Fitur Manajemen User : </span>Edit,
          Tambah dan Hapus daftar User, tentukan Hak Akses Admin / Guru dan
          aktivasi Akses
        </span>
      </div>
    </AdminSideNav>
  );
}
