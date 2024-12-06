import AdminSideNav from "@/app/components/admin/sideNav";
import { IoIosClose, IoMdPrint } from "react-icons/io";

export default function Halaman5() {
  return (
    <AdminSideNav
      docTitle="halaman5"
      breadcrumbs={[{ name: "halaman5", path: "/" }]}
    >
      <div className="flex items-center gap-4 text-xl font-light text-slate-500">
        <IoMdPrint size={30} />|<span>Hasil Ujian</span>
      </div>

      <form>
        <div className="flex flex-col gap-4 py-4 my-4 border-y">
          <div>
            <label
              className="text-base font-light label label-text"
              htmlFor="testType"
            >
              Jenis Tes
            </label>
            <select
              className="w-full rounded-none select select-bordered"
              required
              name="testType"
              id="testType"
            >
              <option>SEMUA</option>
            </select>
          </div>

          <div>
            <label
              className="text-base font-light label label-text"
              htmlFor="semester"
            >
              Semester
            </label>
            <select
              className="w-full rounded-none select select-bordered"
              required
              name="semester"
              id="semester"
            >
              <option>SEMUA</option>
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
              <option>IPA - ILMU PENGETAHUAN ALAM</option>
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
