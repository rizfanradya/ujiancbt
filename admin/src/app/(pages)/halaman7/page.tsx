import SideNav from "@/app/components/sideNav";
import { IoIosClose, IoMdPrint } from "react-icons/io";

export default function Halaman7() {
  return (
    <SideNav
      docTitle="halaman7"
      breadcrumbs={[{ name: "halaman7", path: "/" }]}
    >
      <div className="flex items-center gap-4 text-slate-500 font-light text-xl">
        Print Daftar Hadir
      </div>

      <form>
        <div className="my-4 py-4 border-y flex flex-col gap-4">
          <div>
            <label
              className="label label-text text-base font-light"
              htmlFor="examType"
            >
              Jenis Ujian
            </label>
            <select
              className="select select-bordered rounded-none w-full"
              required
              name="examType"
              id="examType"
            >
              <option>Ulangan Harian</option>
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
              htmlFor="session"
            >
              Sesi
            </label>
            <select
              className="select select-bordered rounded-none w-full"
              required
              name="session"
              id="session"
            >
              <option>1</option>
            </select>
          </div>

          <div>
            <label
              className="label label-text text-base font-light"
              htmlFor="room"
            >
              Ruang
            </label>
            <select
              className="select select-bordered rounded-none w-full"
              required
              name="room"
              id="room"
            >
              <option>LAB-KOM</option>
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
              <option>BING - BAHASA INGGRIS</option>
            </select>
          </div>

          <div>
            <label
              className="label label-text text-base font-light"
              htmlFor="date"
            >
              Tanggal
            </label>
            <select
              className="select select-bordered rounded-none w-full"
              required
              name="date"
              id="date"
            >
              <option></option>
            </select>
          </div>

          <div>
            <label
              className="label label-text text-base font-light"
              htmlFor="startTime"
            >
              Jam Mulai
            </label>
            <select
              className="select select-bordered rounded-none w-full"
              required
              name="startTime"
              id="startTime"
            >
              <option></option>
            </select>
          </div>

          <div>
            <label
              className="label label-text text-base font-light"
              htmlFor="endTime"
            >
              Jam Selesai
            </label>
            <select
              className="select select-bordered rounded-none w-full"
              required
              name="endTime"
              id="endTime"
            >
              <option></option>
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
