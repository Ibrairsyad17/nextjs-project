import {
  ArrowLeftIcon,
  ViewGridIcon,
  CaretSortIcon,
  UploadIcon,
} from "@radix-ui/react-icons";
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
import { DeleteItem } from "./deleteItem";
import { EditItem } from "./editItem";
import { DetailItem } from "./detailItem";
import Link from "next/link";
import type { Metadata } from "next";
import { Input } from "@/components/ui/input";
import { Nav } from "@/components/Nav";

// get product from API
async function getProducts() {
  const headers = { nim: "1234" };
  const res = await fetch("https://testcasefe2023.ignorelist.com/api/v1/data", {
    headers,
    cache: "no-store",
  });

  return res.json();
}

export const metadata: Metadata = {
  title: "Daftar Produk Buku",
  description: "A List Book Product",
};

export default async function Details() {
  const products = await getProducts();
  return (
    <main className="flex min-h-screen flex-col items-center px-5 lg:px-20">
      <Nav></Nav>
      <h1 className="w-11/12 sm:w-9/12 md:text-3xl text-2xl font-semibold mt-6 mb-3 lg:mb-5">
        Daftar Produk Buku
      </h1>

      {/* Breadcrumb */}

      <div className="w-11/12 sm:w-9/12 mb-5">
        <ol
          className="flex items-center whitespace-nowrap"
          aria-label="Breadcrumb"
        >
          <li className="inline-flex items-center">
            <a
              className="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600"
              href="../"
            >
              <svg
                className="flex-shrink-0 me-3 h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              Home
            </a>
            <svg
              className="flex-shrink-0 mx-2 overflow-visible h-4 w-4 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </li>
          <li
            className="inline-flex items-center text-sm font-semibold text-gray-800 truncate dark:text-gray-200"
            aria-current="page"
          >
            List Produk
          </li>
        </ol>
      </div>

      <p className="w-11/12 sm:w-9/12 text-sm lg:text-lg leading-loose">
        Menampilkan data produk buku berdasarkan yang ada di{" "}
        <span className="text-red-700 bg-red-200 py-1 px-2 text-xs lg:text-sm font-semibold inline-block rounded-xl ">
          Public API
        </span>
      </p>

      {/* BUTTONS HEADER */}

      <div className="w-11/12 sm:w-9/12 flex flex-col md:flex-row flex-wrap justify-between align-center mt-4 lg:mt-5">
        <div className="flex">
          <Button
            size="sm"
            className="text-sm mr-2 bg-red-500 hover:bg-red-600 border border-red-500"
          >
            <ArrowLeftIcon className="mr-2"></ArrowLeftIcon>
            <Link href="../">Kembali</Link>
          </Button>
          <AddItem></AddItem>
        </div>
        <div className="flex w-52 mt-3 md:m-0 justify-between align-center">
          <Button variant="outline" size="icon">
            <ViewGridIcon className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <CaretSortIcon className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <UploadIcon className="h-4 w-4 " />
          </Button>
          <Button className="bg-amber-500 text-sm text-white hover:bg-amber-400">
            Print
          </Button>
        </div>
      </div>

      <div className="w-11/12 sm:w-9/12 mt-4 p-2 lg:p-5 border rounded-lg">
        {/* Search Input */}
        <div className="mb-3 flex justify-end">
          <Input type="text" placeholder="Cari Produk" className="h-9" />
          <Button
            className="ml-2 bg-green-500 text-sm text-white hover:bg-green-400"
            size="sm"
          >
            Cari
          </Button>
        </div>

        {/* Table */}
        <Table className="w-full shadow-sm text-xs lg:text-sm">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">No.</TableHead>
              <TableHead colSpan={2}>Nama Produk</TableHead>
              <TableHead></TableHead>
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
                <TableCell colSpan={2}>
                  <span className="mr-2">{product.title}</span>
                  <DetailItem {...product}></DetailItem>
                </TableCell>
                <TableCell></TableCell>
                <TableCell>{product.author}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>{product.description}</TableCell>
                <TableCell className="flex align-center">
                  <EditItem {...product}></EditItem>
                  <span>|</span>
                  <DeleteItem {...product}></DeleteItem>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </main>
  );
}
