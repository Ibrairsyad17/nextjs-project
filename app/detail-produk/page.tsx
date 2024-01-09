import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AddItem } from "./addItem";

async function getProducts() {
  const headers = { nim: "1234" };
  const res = await fetch("https://testcasefe2023.ignorelist.com/api/v1/data", {
    headers,
    cache: "no-store",
  });

  return res.json();
}

export default async function Details() {
  const products = await getProducts();
  return (
    <main className="flex min-h-screen flex-col items-center py-10 px-5 lg:py-24 lg:px-20">
      <h1 className="w-11/12 sm:w-9/12 md:text-3xl text-2xl font-semibold mb-2 lg:mb-5">
        Daftar Produk Buku
      </h1>
      <p className="w-11/12 sm:w-9/12 text-sm lg:text-lg">
        Menampilkan data produk buku berdasarkan yang ada di{" "}
        <span className="text-red-700 bg-red-200 py-1 px-2 text-xs lg:text-sm font-semibold inline-block rounded-sm">
          Public API
        </span>
      </p>
      <div className="w-11/12 sm:w-9/12 flex mt-2 lg:mt-5">
        <Button className="text-sm mr-2 bg-red-500 hover:bg-white border border-red-500 hover:text-red-500">
          <ArrowLeftIcon className="mr-2"></ArrowLeftIcon>
          Kembali
        </Button>
        <AddItem></AddItem>
      </div>
      <div className="w-11/12 sm:w-9/12 mt-7">
        <Table className="w-full border shadow-md text-xs lg:text-sm">
          <TableCaption className="mt-6">
            Daftar dari produk buku terbaru.
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">No.</TableHead>
              <TableHead>Nama Produk</TableHead>
              <TableHead>Penulis</TableHead>
              <TableHead>Harga</TableHead>
              <TableHead>Deskripsi</TableHead>
              <TableHead>Aksi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.data.map((product: any, index: any) => (
              <TableRow key={product.id}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell><a href="" className="hover:underline">{product.title}</a></TableCell>
                <TableCell>{product.author}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>{product.description}</TableCell>
                <TableCell className="flex">
                  <button
                    className="text-green-500 text-sm mr-3 px-2 py-1 hover:underline bg-green-200 rounded-lg"
                  >
                    Edit
                  </button>
                  |
                  <a
                    href=""
                    className="text-red-500 text-sm ml-3 px-2 py-1 hover:underline bg-red-200 rounded-lg"
                  >
                    Delete
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </main>
  );
}
