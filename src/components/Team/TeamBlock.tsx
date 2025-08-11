import BlockTitle from "../UI/BlockTitle";
import { teamMembers } from "./data";
import type { ITeamMember } from "@/types";
import EmployeeCard from "./EmployeeCard";
import Button from "../UI/Button";

const TeamBlock = () => {
  return (
    <section className="mb-9 sm:mb-16 md:mb-25">
      <BlockTitle
        title="Team"
        description="Meet the skilled and experienced team behind our successful digital marketing strategies"
        descriptionSize="473px"
      />
      <div className="mb-5 grid grid-cols-1 gap-4 sm:mb-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 xl:gap-10">
        {teamMembers.map((card: ITeamMember, ind: number) => (
          <EmployeeCard
            key={ind}
            photo={card.photo}
            name={card.name}
            employee={card.employee}
            experience={card.experience}
          />
        ))}
      </div>
      <Button style={{ paddingInline: "76px" }}>See all team</Button>
    </section>
  );
};

export default TeamBlock;
