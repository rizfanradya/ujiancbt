import PageRouteSecure from "@/app/components/pageRouteSecure";
import SideNav from "@/app/components/sideNav";
import { FaLaptop } from "react-icons/fa";
import { FaGears } from "react-icons/fa6";
import { IoIosClose } from "react-icons/io";

export default function SettingServer() {
  return (
    <PageRouteSecure>
      <SideNav
        docTitle="Setting Server"
        breadcrumbs={[
          { name: "System Server", path: "settingServer" },
          { name: "Setting Server", path: "settingServer" },
        ]}
      >
        <div className="flex items-center gap-4 text-slate-500 font-light text-xl">
          <FaGears size={30} />|<span>Mode Server</span>
        </div>

        <form>
          <div className="my-4 py-4 border-y flex flex-col gap-4">
            <div>
              <label
                className="label label-text text-base font-light"
                htmlFor="modeServer"
              >
                Mode Server
              </label>
              <select
                className="select select-bordered rounded-none w-full"
                required
                name="modeServer"
                id="modeServer"
              >
                <option>Mode Server PUSAT</option>
              </select>
            </div>

            <div>
              <label
                className="label label-text text-base font-light"
                htmlFor="timeZone"
              >
                Zona Waktu
              </label>
              <select
                className="select select-bordered rounded-none w-full"
                required
                name="timeZone"
                id="timeZone"
              >
                <option>Asia/Jakarta (WIB)</option>
              </select>
            </div>

            <div>
              <label
                className="label label-text text-base font-light"
                htmlFor="accessRights"
              >
                Hak Akses
              </label>
              <select
                className="select select-bordered rounded-none w-full"
                required
                name="accessRights"
                id="accessRights"
              >
                <option>Tampilkan Hak Akses</option>
              </select>
            </div>

            <div>
              <label
                className="label label-text text-base font-light"
                htmlFor="studentLoginClassGrades"
              >
                Nilai Kelas Login Siswa
              </label>
              <select
                className="select select-bordered rounded-none w-full"
                required
                name="studentLoginClassGrades"
                id="studentLoginClassGrades"
              >
                <option>Nilai Kelas Sembunyi</option>
              </select>
            </div>

            <div>
              <label
                className="label label-text text-base font-light"
                htmlFor="clientType"
              >
                Jenis Client
              </label>
              <select
                className="select select-bordered rounded-none w-full"
                required
                name="clientType"
                id="clientType"
              >
                <option>Komputer/PC/Laptop</option>
              </select>
            </div>
          </div>

          <div className="flex items-center justify-end gap-4">
            <button className="btn btn-info rounded-none btn-sm text-white font-light">
              <FaLaptop size={15} />
              <span>Simpan</span>
            </button>
            <div className="btn btn-outline rounded-none btn-sm font-light">
              <IoIosClose className="font-bold" size={25} />
              <span>Batal</span>
            </div>
          </div>
        </form>
      </SideNav>
    </PageRouteSecure>
  );
}
