export default function riwayatpekerjaan() {
    return (
        <div className="container mx-auto p-2 text-center pt-20">
<h2 className="text-2x1">Riwayat Pekerjaan</h2>
<RowRiwayat instansi="Jual beli Brand" posisi="Sendiri" tahun="2018-2024" />
<RowRiwayat instansi="Tiens" posisi="Anggota" tahun="2020-2021" />
<RowRiwayat instansi="Bengkel Nissan datsun" posisi="Mekanik" tahun="2019" />
</div>
    );
}

interface RowRiwayatProps {
    instansi: string;
    posisi: string;
    tahun: string;
  }

  function RowRiwayat(props: RowRiwayatProps) {
    return (
      <div className="border-2 border-green-500/75 rounded-Ig bg-grey-800 p-2 my-5">
        <div className="container mx-auto ">
          <div className="grid grid-cols-12 gap-1">
            <div className="col-span-12 md:col-span-4 ">{props.instansi}</div>
            <div className="col-span-12 md:col-span-4 ">{props.posisi}</div>
            <div className="col-span-12 md:col-span-4 ">{props.tahun}</div>
            </div>
          </div>
        </div>
    );
  }