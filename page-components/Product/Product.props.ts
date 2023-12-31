import { DetailedHTMLProps, HTMLAttributes } from "react";
import { ProductItem } from "../../interfaces";

export interface ProductProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement> {
  product: ProductItem;
  opened: boolean;
  closeProduct: () => void;
}