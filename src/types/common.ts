export interface IService {
  id?: string | number;
  topTitle: string;
  bottomTitle: string;
  src: string;
  cardVariant: "green" | "grey" | "dark" | "dark-green";
}

export interface ITeamMember {
  id?: string | number;
  image: string;
  name: string;
  employee: string;
  description: string;
}

export interface ISteps {
  id: number;
  number: string;
  header: string;
  isOpen: boolean;
  description: string;
}

export interface ITestimonials {
  id: string | number;
  name: string;
  employee: string;
  description: string;
}
