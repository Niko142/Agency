import React from "react";
import type { FooterItemProps, PartnerItem } from "@/types";

import Amazon from "@images/amazon.png";
import Dribbble from "@images/dribbble.png";
import Hubspot from "@images/hubspot.png";
import Notion from "@images/notion.png";
import Netflix from "@images/netflix.png";
import Zoom from "@images/zoom.png";

import LinkedInIcon from "@components/UI/icons/LinkedInIcon";
import FacebookIcon from "@components/UI/icons/FacebookIcon";
import TwitterIcon from "@components/UI/icons/TwitterIcon";

export const PARTNER_ITEMS: PartnerItem[] = [
  { src: Amazon, alt: "Amazon" },
  { src: Dribbble, alt: "Dribbble" },
  { src: Hubspot, alt: "Hubspot" },
  { src: Notion, alt: "Notion" },
  { src: Netflix, alt: "Netflix" },
  { src: Zoom, alt: "Zoom" },
];

export const FooterItems: FooterItemProps[] = [
  {
    id: "LinkedIn",
    href: "/https://linkedin.com",
    content: React.createElement(LinkedInIcon),
  },
  {
    id: "Facebook",
    href: "/https://facebook.com",
    content: React.createElement(FacebookIcon),
  },
  {
    id: "Twitter",
    href: "/https://x.com",
    content: React.createElement(TwitterIcon),
  },
];
