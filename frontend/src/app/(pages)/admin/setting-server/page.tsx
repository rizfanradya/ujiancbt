import AdminSideNav from "@/app/components/admin/sideNav";
import { FaLaptop } from "react-icons/fa";
import { FaGears } from "react-icons/fa6";
import { IoIosClose } from "react-icons/io";

export default function SettingServer() {
  return (
    <AdminSideNav
      docTitle="Setting Server"
      breadcrumbs={[
        { name: "System Server", path: "settingServer" },
        { name: "Setting Server", path: "settingServer" },
      ]}
    >
      <div className="flex items-center gap-4 text-xl font-light text-slate-500">
        <FaGears size={30} />|<span>Mode Server</span>
      </div>

      <form>
        <div className="flex flex-col gap-4 py-4 my-4 border-y">
          <div>
            <label
              className="text-base font-light label label-text"
              htmlFor="modeServer"
            >
              Mode Server
            </label>
            <select
              className="w-full rounded-none select select-bordered"
              required
              name="modeServer"
              id="modeServer"
            >
              <option>Mode Server PUSAT</option>
            </select>
          </div>

          <div>
            <label
              className="text-base font-light label label-text"
              htmlFor="timeZone"
            >
              Zona Waktu
            </label>
            <select
              className="w-full rounded-none select select-bordered"
              required
              name="timeZone"
              id="timeZone"
            >
              <option>Asia/Jakarta (WIB)</option>
            </select>
          </div>

          <div>
            <label
              className="text-base font-light label label-text"
              htmlFor="accessRights"
            >
              Hak Akses
            </label>
            <select
              className="w-full rounded-none select select-bordered"
              required
              name="accessRights"
              id="accessRights"
            >
              <option>Tampilkan Hak Akses</option>
            </select>
          </div>

          <div>
            <label
              className="text-base font-light label label-text"
              htmlFor="studentLoginClassGrades"
            >
              Nilai Kelas Login Siswa
            </label>
            <select
              className="w-full rounded-none select select-bordered"
              required
              name="studentLoginClassGrades"
              id="studentLoginClassGrades"
            >
              <option>Nilai Kelas Sembunyi</option>
            </select>
          </div>

          <div>
            <label
              className="text-base font-light label label-text"
              htmlFor="clientType"
            >
              Jenis Client
            </label>
            <select
              className="w-full rounded-none select select-bordered"
              required
              name="clientType"
              id="clientType"
            >
              <option>Komputer/PC/Laptop</option>
            </select>
          </div>
        </div>

        <div className="flex items-center justify-end gap-4">
          <button className="font-light text-white rounded-none btn btn-accent btn-sm">
            <FaLaptop size={15} />
            <span>Simpan</span>
          </button>
          <div className="font-light rounded-none btn btn-outline btn-sm">
            <IoIosClose className="font-bold" size={25} />
            <span>Batal</span>
          </div>
        </div>
      </form>
    </AdminSideNav>
  );
}
