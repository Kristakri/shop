import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import { RangePrice } from "../../interfaces/rangePrice.interface";

export interface RangeProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>,HTMLHeadingElement> {
  range: RangePrice;
  setRange?: (range: RangePrice) => void;
}