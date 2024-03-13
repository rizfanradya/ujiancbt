import SideNav from "@/app/components/sideNav";

export default function Halaman4() {
  return (
    <SideNav
      docTitle="Halaman4"
      breadcrumbs={[{ name: "halaman4", path: "/" }]}
    >
      <div className="border-b pb-4">
        <h1 className="font-light text-lg">Daftar Pelaksanaan Test</h1>
      </div>

      <div className="overflow-x-auto mt-6">
        <table className="table">
          <thead>
            <tr className="text-[14px] text-black">
              <th className="border font-normal">No.</th>
              <th className="border font-normal">Ujian</th>
              <th className="border font-normal">Kode Soal</th>
              <th className="border font-normal">Mata Pelajaran</th>
              <th className="border font-normal">Kelas</th>
              <th className="border font-normal">Token</th>
              <th className="border font-normal">Waktu</th>
              <th className="border font-normal">Durasi</th>
              <th className="border font-normal">Proktor Pengawas</th>
              <th className="border font-normal">Catatan</th>
              <th className="border font-normal">Edit Pengawas | Print</th>
            </tr>
          </thead>
        </table>
      </div>
    </SideNav>
  );
}
