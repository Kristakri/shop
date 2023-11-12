import { DetailedHTMLProps, HTMLAttributes } from "react";
import { OurTeamItem } from "../../interfaces";

export interface OurTeamProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement> {
  team: OurTeamItem[]
}