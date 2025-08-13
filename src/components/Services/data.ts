import type { IService } from "@/types";

import cardIllustration1 from "@images/Illustration1.png";
import cardIllustration2 from "@images/Illustration2.svg";
import cardIllustration3 from "@images/Illustration3.svg";
import cardIllustration4 from "@images/Illustration4.svg";
import cardIllustration5 from "@images/Illustration5.svg";
import cardIllustration6 from "@images/Illustration6.svg";

export const services: IService[] = [
  {
    topTitle: "Search engine",
    bottomTitle: "optimization",
    src: cardIllustration1,
    cardVariant: "grey",
  },
  {
    topTitle: "Pay-per-click",
    bottomTitle: "advertising",
    src: cardIllustration2,
    cardVariant: "green",
  },
  {
    topTitle: "Social media",
    bottomTitle: "Marketing",
    src: cardIllustration3,
    cardVariant: "dark",
  },
  {
    topTitle: "Email",
    bottomTitle: "Marketing",
    src: cardIllustration4,
    cardVariant: "grey",
  },
  {
    topTitle: "Content",
    bottomTitle: "creation",
    src: cardIllustration5,
    cardVariant: "green",
  },
  {
    topTitle: "Analytics and",
    bottomTitle: "Tracking",
    src: cardIllustration6,
    cardVariant: "dark-green",
  },
];
