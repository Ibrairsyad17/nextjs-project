import { badgeVariants } from "@/components/ui/badge";
import { Badge } from "@/components/ui/badge";

import Link from "next/link";

export function DetailItem(product: any) {
  return (
    <Badge className="bg-blue-200 text-blue-700 hover:bg-blue-300">
      <Link href={`detail-produk/${product.id}`}>Detail</Link>
    </Badge>
  );
}
