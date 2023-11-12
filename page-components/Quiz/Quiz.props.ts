import { DetailedHTMLProps, HTMLAttributes } from "react";
import { Type } from '../../interfaces/index';

export interface QuizProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement> {
  types: Type[];
}