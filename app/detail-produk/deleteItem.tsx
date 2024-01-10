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
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";

export function DeleteItem(product: any) {
  const router = useRouter();
  const { toast } = useToast();

  async function deleteThis(productID: any) {
    const nimValue = "1234"; // Replace this with the actual value you want to use for the "nim" header

    try {
      const response = await fetch(
        `https://testcasefe2023.ignorelist.com/api/v1/data/${productID}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            nim: "1234",
          },
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
        <button className="text-red-500 text-sm ml-3 px-2 py-1 hover:underline bg-red-200 rounded-lg">
          Delete
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="mb-3">Hapus Data Buku</DialogTitle>
          <DialogDescription>
            Apakah anda yakin ingin {`${product.title}`} menghapus data ini?.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            type="submit"
            className="bg-red-200 text-red-500 hover:underline hover:bg-red-200"
            onClick={() => {
              deleteThis(product.id),
                toast({
                  title: "Data berhasil dihapus",
                  description: `Buku '${product.title}' berhasil dihapus`,
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
            Hapus
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
