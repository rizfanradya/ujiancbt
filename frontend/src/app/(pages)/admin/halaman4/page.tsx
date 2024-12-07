import AdminSideNav from "@/app/components/admin/sideNav";

export default function Halaman4() {
  return (
    <AdminSideNav
      docTitle="Halaman4"
      breadcrumbs={[{ name: "halaman4", path: "/" }]}
    >
      <div className="pb-4 border-b">
        <h1 className="text-lg font-light">Daftar Pelaksanaan Test</h1>
      </div>

      <div className="mt-6 overflow-x-auto">
        <table className="table">
          <thead>
            <tr className="text-[14px] text-black">
              <th className="font-normal border">No.</th>
              <th className="font-normal border">Ujian</th>
              <th className="font-normal border">Kode Soal</th>
              <th className="font-normal border">Mata Pelajaran</th>
              <th className="font-normal border">Kelas</th>
              <th className="font-normal border">Token</th>
              <th className="font-normal border">Waktu</th>
              <th className="font-normal border">Durasi</th>
              <th className="font-normal border">Proktor Pengawas</th>
              <th className="font-normal border">Catatan</th>
              <th className="font-normal border">Edit Pengawas | Print</th>
            </tr>
          </thead>
        </table>
      </div>
    </AdminSideNav>
  );
}
