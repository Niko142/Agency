import type { ISteps, ITeamMember, ITestimonials } from "@/types";

import JohnPhoto from "@assets/images/John.png";
import JanePhoto from "@assets/images/Jane.png";
import MichaelPhoto from "@assets/images/Michael.png";
import EmilyPhoto from "@assets/images/Emily.png";
import BrianPhoto from "@assets/images/Brian.png";
import SarahPhoto from "@assets/images/Sarah.png";

export const headerOptions = [
  { title: "About us" },
  { title: "Services" },
  { title: "Use Cases" },
  { title: "Pricing" },
  { title: "Blog" },
];

export const teamMembers: ITeamMember[] = [
  {
    id: 1,
    image: JohnPhoto,
    name: "John Smith",
    employee: "CEO and Founder",
    description: `10+ years of experience in digital marketing. 
    Expertise in SEO, PPC, and content strategy`,
  },
  {
    id: 2,
    image: JanePhoto,
    name: "Jane Doe",
    employee: "Director of Operations",
    description: `7+ years of experience in project management 
    and team leadership. Strong organizational and communication skills`,
  },
  {
    id: 3,
    image: MichaelPhoto,
    name: "Michael Brown",
    employee: "Senior SEO Specialist",
    description: `5+ years of experience in SEO and content creation. 
    Proficient in keyword research and on-page optimization`,
  },
  {
    id: 4,
    image: EmilyPhoto,
    name: "Emily Johnson",
    employee: "PPC Manager",
    description: `3+ years of experience in paid search advertising. 
    Skilled in campaign management and performance analysis`,
  },
  {
    id: 5,
    image: BrianPhoto,
    name: "Brian Williams",
    employee: "Social Media Specialist",
    description: `4+ years of experience in social media marketing. 
    Proficient in creating and scheduling content, analyzing metrics, and building engagement`,
  },
  {
    id: 6,
    image: SarahPhoto,
    name: "Sarah Kim",
    employee: "Content Creator",
    description: `2+ years of experience in writing and editing. 
    Skilled in creating compelling, SEO-optimized content for various industries`,
  },
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
