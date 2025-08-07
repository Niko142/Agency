import type { BlockTitleProps } from "./type";

const BlockTitle = ({ title, description }: BlockTitleProps) => {
  return (
    <div className="mb-20 flex items-start gap-10">
      <h2 className="bg-green rounded-[7px] px-[7px] leading-[51px]">
        {title}
      </h2>
      <p className="leading-[23px]">{description}</p>
    </div>
  );
};

export default BlockTitle;
