import { createClient } from "@/prismicio";
import { PrismicRichText } from "@prismicio/react";
import { components } from "@/slices";
import "./style.css"

type Params = { slug: string };

export default async function Home({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const client = createClient();
  const page = await client.getByUID("pagina", slug);

  return (
    <div className="conteudo-artigo">
      <PrismicRichText field={page.data.content} components={components} />{" "}
    </div>
  );
}
