"use client";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "@radix-ui/react-icons";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SyntheticEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";

export function AddItem() {
  const [bookName, setBookName] = useState("");
  const [authors, setAuthors] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const { toast } = useToast();

  const router = useRouter();

  async function handleSubmit(params: SyntheticEvent) {
    params.preventDefault();

    const nimValue = "1234"; // Replace this with the actual value you want to use for the "nim" header

    try {
      const response = await fetch(
        "https://testcasefe2023.ignorelist.com/api/v1/data",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            nim: "1234",
          },
          body: JSON.stringify({
            title: bookName,
            description: description,
            price: price,
            author: authors,
          }),
        }
      );

      // Handle the response as needed
      if (response.ok) {
        console.log("halo");
      } else {
        console.error(
          "Error sending data to the API:",
          response.status,
          response.statusText
        );
      }
    } catch (error: any) {
      console.error("An error occurred:", error.message);
    }

    setBookName("");
    setPrice("");
    setDescription("");
    setAuthors("");
    router.refresh();
  }

  return (
    <Dialog onOpenChange={(open: false) => handleSubmit}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="text-white text-xs lg:text-sm bg-black hover:bg-gray-700 hover:text-white"
        >
          <PlusIcon className="mr-2"></PlusIcon>Tambah Buku
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="mb-3">Tambah Data Buku</DialogTitle>
          <DialogDescription>
            Masukkan data buku sesuai form. Klik tombol Simpan data jika
            selesai.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">Nama Buku</Label>
              <Input
                value={bookName}
                onChange={(e) => setBookName(e.target.value)}
                className="col-span-3 text-xs"
                placeholder="Tuliskan nama buku..."
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">Penulis</Label>
              <Input
                value={authors}
                onChange={(e) => setAuthors(e.target.value)}
                className="col-span-3 text-xs"
                placeholder="Tuliskan nama penulis..."
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">Harga</Label>
              <Input
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="col-span-3 text-xs"
                placeholder="Tuliskan harga buku..."
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">Deskripsi</Label>
              <Input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="col-span-3"
                placeholder="Tuliskan deskripsi..."
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              className=""
              type="submit"
              variant="outline"
              onClick={() => {
                toast({
                  title: "Berhasil Menambahkan Data",
                  description: `Buku ${bookName} Berhasil Di Tambahkan`,
                  action: <ToastAction altText="Try again">Tutup</ToastAction>,
                });
              }}
            >
              Simpan DAta
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
