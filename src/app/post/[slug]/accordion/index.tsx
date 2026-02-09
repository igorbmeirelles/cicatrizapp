"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

import { RichTextField } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";

interface IProps {
  data: { title: string; body: RichTextField }[];
}

export function DefaultAccordion({ data }: IProps) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {data.map((acc, index) => (
        <AccordionItem value={`item-${index}`} key={index}>
          <AccordionTrigger className="text-left">{acc.title}</AccordionTrigger>
          <AccordionContent className="text-gray-600">
            <PrismicRichText field={acc.body} />
          </AccordionContent>{" "}
        </AccordionItem>
      ))}
    </Accordion>
  );
}
