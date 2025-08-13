export interface IService {
  id?: string | number;
  topTitle: string;
  bottomTitle: string;
  src: string;
  cardVariant: "green" | "grey" | "dark" | "dark-green";
}

export interface ITeamMember {
  id?: string | number;
  link?: string;
  photo: string;
  name: string;
  employee: string;
  experience: string;
}

export interface PartnerItem {
  src: string;
  alt: string;
  href?: string;
}

export interface FooterItemProps {
  id: string;
  href: string;
  content: React.ReactElement | string;
}

export interface ISteps {
  number: string;
  title: string;
  content: string;
}

export interface ITestimonials {
  id: string | number;
  name: string;
  employee: string;
  description: string;
}
