import AdminSideNav from "@/app/components/admin/sideNav";
import Link from "next/link";
import { FaPlusCircle } from "react-icons/fa";

const linkItems = [
  { name: "Gambar", path: "/" },
  { name: "Audio", path: "/" },
  { name: "Video", path: "/" },
  { name: "PDF", path: "/" },
];

export default function Halaman13() {
  return (
    <AdminSideNav
      docTitle="Halaman13"
      breadcrumbs={[{ name: "halaman13", path: "/" }]}
    >
      <div className="flex items-center gap-6 pb-4 mb-4 font-light border-b">
        {linkItems.map((doc) => (
          <Link
            key={doc.name}
            href={doc.path}
            className="transition text-info hover:text-black"
          >
            {doc.name}
          </Link>
        ))}
      </div>

      <div className="flex items-center justify-between pb-4 mb-4 border-b">
        <h1 className="text-lg font-light">Gambar</h1>
      </div>

      <div className="border">
        <div className="p-2 bg-gray-100 border-b">
          <div className="text-sm font-light text-white rounded-none btn bg-info btn-sm">
            <FaPlusCircle size={15} />
            <span>Tambah Gambar</span>
          </div>
        </div>

        <div className="p-4">
          <div className="flex flex-col gap-2 p-6 mt-6 bg-slate-100">
            <span className="text-xl font-light text-primary/65">
              SMA ABDUSSALAM-CBT
            </span>
            <span className="text-sm font-light">
              Daftar File Media Gambar Pendukung Soal
            </span>
          </div>
        </div>
      </div>
    </AdminSideNav>
  );
}
