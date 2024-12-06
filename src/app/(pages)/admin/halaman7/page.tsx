import AdminSideNav from "@/app/components/admin/sideNav";
import { IoIosClose, IoMdPrint } from "react-icons/io";

export default function Halaman7() {
  return (
    <AdminSideNav
      docTitle="halaman7"
      breadcrumbs={[{ name: "halaman7", path: "/" }]}
    >
      <div className="flex items-center gap-4 text-xl font-light text-slate-500">
        Print Daftar Hadir
      </div>

      <form>
        <div className="flex flex-col gap-4 py-4 my-4 border-y">
          <div>
            <label
              className="text-base font-light label label-text"
              htmlFor="examType"
            >
              Jenis Ujian
            </label>
            <select
              className="w-full rounded-none select select-bordered"
              required
              name="examType"
              id="examType"
            >
              <option>Ulangan Harian</option>
            </select>
          </div>

          <div>
            <label
              className="text-base font-light label label-text"
              htmlFor="major"
            >
              Jurusan
            </label>
            <select
              className="w-full rounded-none select select-bordered"
              required
              name="major"
              id="major"
            >
              <option>IPS</option>
            </select>
          </div>

          <div>
            <label
              className="text-base font-light label label-text"
              htmlFor="class"
            >
              Kelas
            </label>
            <select
              className="w-full rounded-none select select-bordered"
              required
              name="class"
              id="class"
            >
              <option>IPS</option>
            </select>
          </div>

          <div>
            <label
              className="text-base font-light label label-text"
              htmlFor="session"
            >
              Sesi
            </label>
            <select
              className="w-full rounded-none select select-bordered"
              required
              name="session"
              id="session"
            >
              <option>1</option>
            </select>
          </div>

          <div>
            <label
              className="text-base font-light label label-text"
              htmlFor="room"
            >
              Ruang
            </label>
            <select
              className="w-full rounded-none select select-bordered"
              required
              name="room"
              id="room"
            >
              <option>LAB-KOM</option>
            </select>
          </div>

          <div>
            <label
              className="text-base font-light label label-text"
              htmlFor="subjects"
            >
              Mata Pelajaran
            </label>
            <select
              className="w-full rounded-none select select-bordered"
              required
              name="subjects"
              id="subjects"
            >
              <option>BING - BAHASA INGGRIS</option>
            </select>
          </div>

          <div>
            <label
              className="text-base font-light label label-text"
              htmlFor="date"
            >
              Tanggal
            </label>
            <select
              className="w-full rounded-none select select-bordered"
              required
              name="date"
              id="date"
            >
              <option></option>
            </select>
          </div>

          <div>
            <label
              className="text-base font-light label label-text"
              htmlFor="startTime"
            >
              Jam Mulai
            </label>
            <select
              className="w-full rounded-none select select-bordered"
              required
              name="startTime"
              id="startTime"
            >
              <option></option>
            </select>
          </div>

          <div>
            <label
              className="text-base font-light label label-text"
              htmlFor="endTime"
            >
              Jam Selesai
            </label>
            <select
              className="w-full rounded-none select select-bordered"
              required
              name="endTime"
              id="endTime"
            >
              <option></option>
            </select>
          </div>
        </div>

        <div className="flex items-center justify-end gap-4">
          <button className="font-light text-white rounded-none btn btn-accent btn-sm">
            <IoMdPrint size={15} />
            <span>Print Preview</span>
          </button>
          <div className="font-light rounded-none btn btn-outline btn-sm">
            <IoIosClose className="font-bold" size={25} />
            <span>Tutup</span>
          </div>
        </div>
      </form>
    </AdminSideNav>
  );
}
