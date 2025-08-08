import type { ISteps, ITestimonials } from "@/types";

export const headerOptions = [
  { title: "About us" },
  { title: "Services" },
  { title: "Use Cases" },
  { title: "Pricing" },
  { title: "Blog" },
];

export const processSteps: ISteps[] = [
  {
    id: 1,
    number: "01",
    header: "Consultation",
    isOpen: false,
    description: `During the initial consultation, we will discuss your 
    business goals and objectives, target audience, and current marketing efforts. 
    This will allow us to understand your needs and tailor our services to best fit your requirements.`,
  },
  {
    id: 2,
    number: "02",
    header: "Research  and Strategy Development",
    description: "Research",
    isOpen: false,
  },
  {
    id: 3,
    number: "03",
    header: "Implementation",
    description: "Implement",
    isOpen: false,
  },
  {
    id: 4,
    number: "04",
    header: "Monitoring and Optimization",
    description: "Monitor",
    isOpen: false,
  },
  {
    id: 5,
    number: "05",
    header: "Reporting and Communication",
    description: "Report",
    isOpen: false,
  },
  {
    id: 6,
    number: "06",
    header: "Continual Improvement",
    description: "Continue",
    isOpen: false,
  },
];

export const testimonials: ITestimonials[] = [
  {
    id: 1,
    name: "John Smith",
    employee: "Marketing Director",
    description: `
    "We have been working with Positivus for the past year and have
     seen a significant increase in website traffic and leads as a result of their efforts. 
     The team is professional, responsive, and truly cares about the success of our business. 
     We highly recommend Positivus to any company looking to grow their online presence."
     `,
  },
  {
    id: 2,
    name: "Sarah Kim",
    employee: "Content Maker",
    description: `
    "We have been working with Positivus for the past year and have 
    seen a significant increase in website traffic and leads as a result of their efforts. 
    The team is professional, responsive, and truly cares about the success of our business. 
    We highly recommend Positivus to any company looking to grow their online presence."
    `,
  },
  {
    id: 3,
    name: "Mich Birmark",
    employee: "PPC Specialist",
    description: `
    "We have been working with Positivus for the past year and have 
    seen a significant increase in website traffic and leads as a result of their efforts. 
    The team is professional, responsive, and truly cares about the success of our business. 
    We highly recommend Positivus to any company looking to grow their online presence."
    `,
  },
];
