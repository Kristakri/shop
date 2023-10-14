import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface HelpProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement> {
  children: ReactNode;
}