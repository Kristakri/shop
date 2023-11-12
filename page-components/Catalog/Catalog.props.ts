import { DetailedHTMLProps, HTMLAttributes } from "react";
import { ProductItem } from "../../interfaces";

export interface CatalogProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement> {
  products: ProductItem[];
  openProduct: (productId: number) => void
}