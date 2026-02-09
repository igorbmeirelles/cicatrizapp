import { createClient } from "@/prismicio";
import { PrismicRichText } from "@prismicio/react";

import "./style.css";
import {
  PaginaDocument,
  PitemexpandindoDocument,
} from "../../../../prismicio-types";
import { DefaultAccordion } from "./accordion";

type Params = { slug: string };

export default async function Home({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const client = createClient();
  const page = [
    client.getByUID("pagina", slug),
    client.getByUID("pitemexpandindo", slug),
  ];

  const [resultPagina, resultPie] = await Promise.allSettled(page);

  const pagina = (
    resultPagina.status === "fulfilled" ? resultPagina.value : null
  ) as PaginaDocument<string>;

  const pie = (
    resultPie.status === "fulfilled" ? resultPie.value : null
  ) as PitemexpandindoDocument<string>;

  return (
    <div className="conteudo-artigo">
      {pagina ? (
        <PrismicRichText field={pagina?.data.content} />
      ) : (
        <>
          <PrismicRichText field={pie?.data.conteudo_inicial} />
          <DefaultAccordion
            data={pie.data.slices
              .filter((s) => s.primary.titulo !== null)
              .map((s) => ({
                body: s.primary.texto,
                title: s.primary.titulo as string,
              }))}
          />
        </>
      )}
    </div>
  );
}
