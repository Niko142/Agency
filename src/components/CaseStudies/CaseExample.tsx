import CaseLink from "../Links/CaseLink";
import type { CaseItemProps } from "./type";

const CaseExample = ({ description }: CaseItemProps) => {
  return (
    <li className="relative flex flex-col gap-5 md:after:absolute md:after:top-0 md:after:-right-8 md:after:h-[186px] md:after:w-px md:after:bg-white md:after:content-[''] last:md:after:hidden md:nth-of-type-[2]:after:hidden lg:after:-right-10 lg:nth-of-type-[2]:after:block xl:after:-right-16">
      <p>{description}</p>
      <CaseLink />
    </li>
  );
};

export default CaseExample;
