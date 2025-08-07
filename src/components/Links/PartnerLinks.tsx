import { PARTNER_ITEMS } from "./data";

import type { PartnerItem } from "./types";

const PartnerLinks = () => {
  return (
    <ul className="flex flex-wrap items-center justify-between gap-y-5">
      {PARTNER_ITEMS.map((link: PartnerItem, id: number) => {
        return (
          <li key={id} className="mr-4.5 last:mr-0">
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
