import { DetailedHTMLProps, HTMLAttributes } from "react";
import { FaqItem } from "../../interfaces/faq.interface";

export interface FaqProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement> {
  faq: FaqItem[]
}