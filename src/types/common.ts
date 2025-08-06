export interface IService {
  id?: string | number;
  art1: string;
  art2: string;
  image: string;
  link: string;
  green: boolean;
  black: boolean;
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
