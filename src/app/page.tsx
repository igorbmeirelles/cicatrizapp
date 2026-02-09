import { createClient } from "@/prismicio";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/images/image.png";

export default async function Home() {
  const client = createClient();
  const pagePromise = [
    client.getAllByType("pitemexpandindo"),
    client.getAllByType("pagina"),
  ];

  const [mainContent, pages] = await Promise.all(pagePromise);

  const mainContentLabels = mainContent.map((i) => ({
    title: i.data.titulo,
    uid: i.uid,
  }));

  const pageLabels = pages.map((data) => ({
    title: data.data.titulo,
    uid: data.uid,
  }));

  const button_title = mainContentLabels.concat(pageLabels);

  return (
    <div className="flex flex-col min-h-dvh items-center justify-center">
      <Image
        src={Logo}
        alt="CicatrizApp Logo"
        width={240}
        height={2410}
        className="w-60 mx-auto"
      />

      <div className="flex flex-col px-4 px-md-0">
        {button_title.map((button) => (
          <Link
            key={button.uid}
            href={`/post/${button.uid}`}
            className="bg-[#69b5c9] text-white font-semibold text-lg py-3 rounded-xl shadow-md text-center hover:bg-[#5aa4b7] transition p-4 inline-block mt-4"
          >
            {button.title?.toUpperCase()}
          </Link>
        ))}
      </div>
    </div>
  );
}
