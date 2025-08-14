import type { ITeamMember } from "@/types";
import EmployeeLink from "@components/Links/EmployeeLink";

const EmployeeCard = ({
  link = "/#",
  photo,
  name,
  employee,
  experience,
}: ITeamMember) => {
  return (
    <article className="border-dark box-border flex flex-col gap-y-7 rounded-3xl border bg-white px-4 py-6 drop-shadow-(--custom-shadow) sm:rounded-[45px] sm:px-5 sm:py-6 lg:px-7 lg:py-8 xl:px-[33px] xl:py-10">
      <div className="relative flex items-end gap-5">
        <EmployeeLink link={link} ariaLabel={`${name}-profile in Linkedin`} />
        <img className="max-w-20 sm:w-auto" src={photo} alt={name} />
        <div>
          <h4 className="leading-6 sm:leading-6.5">{name}</h4>
          <p className="sm:leading-[23px]">{employee}</p>
        </div>
      </div>
      <hr className="h-px w-full text-black" />
      <p className="sm:leading-[23px]">{experience}</p>
    </article>
  );
};

export default EmployeeCard;
