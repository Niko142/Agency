import BlockTitle from "../UI/BlockTitle";
import CaseExample from "./CaseExample";
import { caseResults } from "./data";
import type { CaseItemProps } from "./type";

const CaseBlock = () => {
  return (
    <section className="mb-20 md:mb-34 lg:mb-[140px]">
      <BlockTitle
        title="Case Studies"
        description="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
        descriptionSize="580px"
      />
      <ul className="bg-dark grid grid-cols-1 gap-x-16 gap-y-10 rounded-2xl px-5 py-8 text-white sm:rounded-3xl sm:px-[45px] sm:py-[55px] md:grid-cols-2 lg:grid-cols-3 lg:gap-x-20 lg:rounded-[45px] xl:gap-x-32 xl:px-[60px] xl:py-[70px]">
        {caseResults.map((item: CaseItemProps, ind: number) => (
          <CaseExample description={item.description} key={ind} />
        ))}
      </ul>
    </section>
  );
};

export default CaseBlock;
