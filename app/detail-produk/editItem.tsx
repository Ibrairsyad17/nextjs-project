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
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";

export function EditItem(product: any) {
  const [bookName, setBookName] = useState(product.title);
  const [authors, setAuthors] = useState(product.author);
  const [price, setPrice] = useState(product.price);
  const [description, setDescription] = useState(product.description);

  const router = useRouter();
  const { toast } = useToast();

  async function editItem(params: SyntheticEvent) {
    params.preventDefault();

    const nimValue = "1234"; // Replace this with the actual value you want to use for the "nim" header

    try {
      const response = await fetch(
        `https://testcasefe2023.ignorelist.com/api/v1/data/${product.id}`,
        {
          method: "PUT",
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

    router.refresh();
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="text-green-500 text-sm mr-3 px-2 py-1 hover:underline bg-green-200 rounded-lg">
          Edit
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="mb-3">Edit Data {product.title}</DialogTitle>
          <DialogDescription>
            Masukkan data buku sesuai form. Klik tombol 'Edit data' jika
            selesai.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={editItem}>
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
                onChange={(e) => setPrice(Number(e.target.value))}
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
              type="submit"
              variant="default"
              onClick={() => {
                toast({
                  title: "Data berhasil ditambahkan",
                  description: `Buku '${bookName}' berhasil di tambahkan`,
                  className: "bg-green-200 border-green-400",
                  action: (
                    <ToastAction
                      altText="Tutup"
                      className="bg-green-300 hover:bg-green-200 border border-green-300"
                    >
                      Tutup
                    </ToastAction>
                  ),
                });
              }}
            >
              Edit Data
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
