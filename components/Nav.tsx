import Link from "next/link";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  InstagramLogoIcon,
} from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

export function Nav() {
  return (
    <nav className="sticky top-0 l-0 border-b border-gray-200 bg-white w-11/12 sm:w-9/12">
      <div className="relative flex h-16 items-center justify-between">
        <Link href="../../" className="font-semibold text-xl">
          Ibrahim<span className="text-red-600">Irsad</span>
        </Link>
        <div className="flex w-32 mt-3 md:m-0 justify-between align-center">
          <Button variant="outline" size="icon" asChild>
            <Link href="https://github.com/Ibrairsyad17">
              <GitHubLogoIcon className="h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <Link href="https://www.linkedin.com/in/ibrairsyad17">
              <LinkedInLogoIcon className="h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <Link href="https://www.instagram.com/wbaiemm._/">
              <InstagramLogoIcon className="h-4 w-4 " />
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
