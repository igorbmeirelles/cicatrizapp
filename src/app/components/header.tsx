import { HomeIcon } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="pt-4 px-4">
      <section className="flex px-4 py-2 max-w-[800px] mx-auto shadow rounded-md bg-gray-50">
        <Link href={`/`} className="ml-auto p-2 ">
          <HomeIcon className="text-[#69b5c9]"/>
        </Link>
      </section>
    </header>
  );
}
