import SideNav from "@/app/components/sideNav";
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
    <SideNav
      docTitle="Halaman13"
      breadcrumbs={[{ name: "halaman13", path: "/" }]}
    >
      <div className="mb-4 flex items-center gap-6 font-light border-b pb-4">
        {linkItems.map((doc) => (
          <Link
            key={doc.name}
            href={doc.path}
            className="text-info hover:text-black transition"
          >
            {doc.name}
          </Link>
        ))}
      </div>

      <div className="flex items-center justify-between border-b pb-4 mb-4">
        <h1 className="font-light text-lg">Gambar</h1>
      </div>

      <div className="border">
        <div className="p-2 border-b bg-gray-100">
          <div className="btn bg-info rounded-none btn-sm text-sm font-light text-white">
            <FaPlusCircle size={15} />
            <span>Tambah Gambar</span>
          </div>
        </div>

        <div className="p-4">
          <div className="flex flex-col bg-slate-100 p-6 mt-6 gap-2">
            <span className="text-xl font-light text-primary/65">
              SMA ABDUSSALAM-CBT
            </span>
            <span className="text-sm font-light">
              Daftar File Media Gambar Pendukung Soal
            </span>
          </div>
        </div>
      </div>
    </SideNav>
  );
}
