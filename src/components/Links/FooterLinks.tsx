import type { FooterItemProps } from "@/types";
import { FooterItems } from "./data";

const FooterLinks = () => {
  return (
    <ul className="flex shrink-0 gap-5">
      {FooterItems.map((link: FooterItemProps) => (
        <a key={link.id} className="" href={link.href}>
          {link.content}
        </a>
      ))}
    </ul>
  );
};

export default FooterLinks;
