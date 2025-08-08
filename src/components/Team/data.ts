import JohnPhoto from "@assets/images/John.png";
import JanePhoto from "@assets/images/Jane.png";
import MichaelPhoto from "@assets/images/Michael.png";
import EmilyPhoto from "@assets/images/Emily.png";
import BrianPhoto from "@assets/images/Brian.png";
import SarahPhoto from "@assets/images/Sarah.png";
import type { ITeamMember } from "@/types";

export const teamMembers: ITeamMember[] = [
  {
    id: 1,
    photo: JohnPhoto,
    name: "John Smith",
    employee: "CEO and Founder",
    experience: `10+ years of experience in digital marketing. 
    Expertise in SEO, PPC, and content strategy`,
  },
  {
    id: 2,
    photo: JanePhoto,
    name: "Jane Doe",
    employee: "Director of Operations",
    experience: `7+ years of experience in project management 
    and team leadership. Strong organizational and communication skills`,
  },
  {
    id: 3,
    photo: MichaelPhoto,
    name: "Michael Brown",
    employee: "Senior SEO Specialist",
    experience: `5+ years of experience in SEO and content creation. 
    Proficient in keyword research and on-page optimization`,
  },
  {
    id: 4,
    photo: EmilyPhoto,
    name: "Emily Johnson",
    employee: "PPC Manager",
    experience: `3+ years of experience in paid search advertising. 
    Skilled in campaign management and performance analysis`,
  },
  {
    id: 5,
    photo: BrianPhoto,
    name: "Brian Williams",
    employee: "Social Media Specialist",
    experience: `4+ years of experience in social media marketing. 
    Proficient in creating and scheduling content, analyzing metrics, and building engagement`,
  },
  {
    id: 6,
    photo: SarahPhoto,
    name: "Sarah Kim",
    employee: "Content Creator",
    experience: `2+ years of experience in writing and editing. 
    Skilled in creating compelling, SEO-optimized content for various industries`,
  },
];
