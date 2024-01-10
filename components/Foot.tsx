import Link from "next/link";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  InstagramLogoIcon,
} from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

export function Foot() {
  return (
    <nav className="sticky bottom-0 l-0 border-gray-200 bg-white w-11/12 sm:w-9/12">
      <div className="relative flex h-16 items-center justify-center">
        <Link href="../../" className="font-medium text-md md:text-lg">
          Enjoy the <span className="text-red-600">Journey.</span> | Copyright
          2024
        </Link>
      </div>
    </nav>
  );
}
