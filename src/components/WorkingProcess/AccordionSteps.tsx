import { useState } from "react";
import type { ISteps } from "@/types";
import MinusIcon from "@components/UI/icons/MinusIcon";
import PlusIcon from "@components/UI/icons/PlusIcon";

const AccordionSteps = ({ number, title, content }: ISteps) => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleAccordion() {
    setIsOpen(!isOpen);
  }

  return (
    <article
      className={`border-dark rounded-3xl border drop-shadow-(--custom-shadow) transition-colors duration-300 sm:rounded-[45px] ${isOpen ? "bg-green" : "bg-grey"}`}
    >
      <button
        className="flex w-full flex-col p-3 outline-0 sm:px-7 sm:py-5 md:px-12 md:py-8 lg:px-15 lg:py-[41px]"
        onClick={toggleAccordion}
        type="button"
      >
        {/* Шапка аккордеона */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3.5 sm:gap-[25px]">
            <span className="text-4xl leading-13 font-medium text-black sm:text-6xl sm:leading-[77px]">
              {number}
            </span>
            <b className="text-left text-xl leading-6.5 sm:text-3xl sm:leading-9.5">
              {title}
            </b>
          </div>
          {isOpen ? <MinusIcon /> : <PlusIcon />}
        </div>

        {/* Основной контент */}
        <div
          className={`grid transition-all duration-300 ease-in-out ${
            isOpen ? "mt-4.5 grid-rows-[1fr] sm:mt-7.5" : "mt-0 grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            <hr className="mb-4.5 border-black sm:mb-7.5" />
            <p className="line-clamp-5 text-start">{content}</p>
          </div>
        </div>
      </button>
    </article>
  );
};

export default AccordionSteps;
