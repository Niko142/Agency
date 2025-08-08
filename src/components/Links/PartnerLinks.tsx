import type { PartnerItem } from "@/types";
import { PARTNER_ITEMS } from "./data";

const PartnerLinks = () => {
  return (
    <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-5 md:justify-between">
      {PARTNER_ITEMS.map((link: PartnerItem, id: number) => {
        return (
          <li key={id} className="shrink-0">
            <a href={`/${link.href}`}>
              <img
                className="grayscale hover:grayscale-0"
                src={link.src}
                alt={link.alt}
              />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default PartnerLinks;
