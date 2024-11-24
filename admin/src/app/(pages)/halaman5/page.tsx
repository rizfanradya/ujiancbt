import SideNav from "@/app/components/sideNav";
import { IoIosClose, IoMdPrint } from "react-icons/io";

export default function Halaman5() {
  return (
    <SideNav
      docTitle="halaman5"
      breadcrumbs={[{ name: "halaman5", path: "/" }]}
    >
      <div className="flex items-center gap-4 text-slate-500 font-light text-xl">
        <IoMdPrint size={30} />|<span>Hasil Ujian</span>
      </div>

      <form>
        <div className="my-4 py-4 border-y flex flex-col gap-4">
          <div>
            <label
              className="label label-text text-base font-light"
              htmlFor="testType"
            >
              Jenis Tes
            </label>
            <select
              className="select select-bordered rounded-none w-full"
              required
              name="testType"
              id="testType"
            >
              <option>SEMUA</option>
            </select>
          </div>

          <div>
            <label
              className="label label-text text-base font-light"
              htmlFor="semester"
            >
              Semester
            </label>
            <select
              className="select select-bordered rounded-none w-full"
              required
              name="semester"
              id="semester"
            >
              <option>SEMUA</option>
            </select>
          </div>

          <div>
            <label
              className="label label-text text-base font-light"
              htmlFor="major"
            >
              Jurusan
            </label>
            <select
              className="select select-bordered rounded-none w-full"
              required
              name="major"
              id="major"
            >
              <option>IPS</option>
            </select>
          </div>

          <div>
            <label
              className="label label-text text-base font-light"
              htmlFor="class"
            >
              Kelas
            </label>
            <select
              className="select select-bordered rounded-none w-full"
              required
              name="class"
              id="class"
            >
              <option>IPS</option>
            </select>
          </div>

          <div>
            <label
              className="label label-text text-base font-light"
              htmlFor="subjects"
            >
              Mata Pelajaran
            </label>
            <select
              className="select select-bordered rounded-none w-full"
              required
              name="subjects"
              id="subjects"
            >
              <option>IPA - ILMU PENGETAHUAN ALAM</option>
            </select>
          </div>
        </div>

        <div className="flex items-center justify-end gap-4">
          <button className="btn btn-accent rounded-none btn-sm text-white font-light">
            <IoMdPrint size={15} />
            <span>Print Preview</span>
          </button>
          <div className="btn btn-outline rounded-none btn-sm font-light">
            <IoIosClose className="font-bold" size={25} />
            <span>Tutup</span>
          </div>
        </div>
      </form>
    </SideNav>
  );
}
