import type { PaginationProps } from "./type";
import { NextArrowIcon, PaginationDot, PrevArrowIcon } from "./UI/Icon";

const Pagination = ({
  slidesData,
  currentSlide,
  onPrev,
  onNext,
  onDotClick,
}: PaginationProps) => {
  return (
    <div className="mt-15 flex items-center justify-center gap-15 sm:mt-25 sm:gap-30 md:mt-34.5 md:gap-[189px]">
      <button onClick={onPrev} className="hover:opacity-85 disabled:opacity-30">
        <PrevArrowIcon />
      </button>
      <div className="flex justify-center gap-[19px]">
        {slidesData.map((_, ind) => (
          <button
            key={ind}
            className="outline-0 hover:opacity-85"
            onClick={() => onDotClick(ind)}
          >
            <PaginationDot active={ind === currentSlide} />
          </button>
        ))}
      </div>
      <button onClick={onNext} className="hover:opacity-85 disabled:opacity-30">
        <NextArrowIcon />
      </button>
    </div>
  );
};

export default Pagination;
