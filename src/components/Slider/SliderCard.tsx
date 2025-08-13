import type { SliderCardProps } from "./type";

const SliderCard = ({ slideItem, width }: SliderCardProps) => {
  return (
    <div className="shrink-0" style={{ width: `${width}px` }}>
      <div className="border-green relative mb-2 rounded-3xl border bg-transparent p-4 text-white sm:mb-5 sm:rounded-[45px] sm:p-10 md:px-13 md:py-12">
        <p className="leading-[23px]">{slideItem.description}</p>
      </div>
      <div className="px-10 sm:px-15 md:px-20">
        <h4 className="text-green leading-5.5 sm:leading-6.5">
          {slideItem.name}
        </h4>
        <p className="text-white sm:leading-[23px]">{slideItem.employee}</p>
      </div>
    </div>
  );
};

export default SliderCard;
