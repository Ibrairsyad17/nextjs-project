import { Badge } from "@/components/ui/badge";
import { Nav } from "@/components/Nav";

export default async function DetailsProduct({
  params,
}: {
  params: { idProduk: string };
}) {
  // get product information from API
  async function getInfo() {
    const headers = { nim: "1234" };
    const res = await fetch(
      `https://testcasefe2023.ignorelist.com/api/v1/data/${params.idProduk}`,
      {
        headers,
        cache: "no-store",
      }
    );

    return res.json();
  }

  const productInfo = await getInfo();

  return (
    <main className="flex min-h-screen flex-col items-center px-5 lg:px-20">
      <Nav></Nav>

      {/* Title Page */}

      <h1 className="w-11/12 sm:w-9/12 md:text-3xl mt-6 text-2xl font-semibold mb-3 lg:mb-5">
        Detail Produk{" "}
        <Badge className="bg-amber-200 text-amber-700 hover:bg-amber-300">
          #{params.idProduk}
        </Badge>
      </h1>

      {/* Breadcrumb */}

      <div className="w-11/12 sm:w-9/12 mb-7 mt-2">
        <ol
          className="flex items-center whitespace-nowrap"
          aria-label="Breadcrumb"
        >
          <li className="inline-flex items-center">
            <a
              className="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600"
              href="../../"
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
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </li>
          <li className="inline-flex items-center">
            <a
              className="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:focus:text-blue-500"
              href="../../detail-produk"
            >
              List Produk
              <svg
                className="flex-shrink-0 mx-2 overflow-visible h-4 w-4 text-gray-400"
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
                <path d="m9 18 6-6-6-6" />
              </svg>
            </a>
          </li>
          <li
            className="inline-flex items-center text-sm font-semibold text-gray-800 truncate dark:text-gray-200"
            aria-current="page"
          >
            Detail Produk
          </li>
        </ol>
      </div>
      {/* Product Information */}

      <div className="w-11/12 sm:w-9/12 border p-5 rounded-lg">
        <div className="sm:px-0">
          <h3 className="text-lg font-semibold leading-7 text-gray-900">
            {productInfo.data.title}
          </h3>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
            Detail data dari API mengenai {productInfo.data.title}
          </p>
        </div>
        <div className="mt-6 border-t border-gray-100">
          <dl className="divide-y divide-gray-100">
            <div className=" py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                <Badge className="bg-green-200 text-sm text-green-700 hover:bg-green-300">
                  Nama Produk
                </Badge>
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {productInfo.data.title}
              </dd>
            </div>
            <div className=" py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                <Badge className="bg-blue-200 text-sm text-blue-700 hover:bg-blue-300">
                  Deskripsi Produk
                </Badge>
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {productInfo.data.description}
              </dd>
            </div>
            <div className=" py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                <Badge className="bg-red-200 text-sm text-red-700 hover:bg-red-300">
                  Harga Produk
                </Badge>
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {productInfo.data.price}
              </dd>
            </div>
            <div className=" py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                <Badge variant={"secondary"} className="text-sm">
                  Penulis
                </Badge>
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {productInfo.data.author}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </main>
  );
}
