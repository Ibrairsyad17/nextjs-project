export default function DetailsProduct({
  params,
}: {
  params: { idProduk: string };
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="w-9/12 text-2xl">Produk {params.idProduk}</h1>
    </main>
  );
}
