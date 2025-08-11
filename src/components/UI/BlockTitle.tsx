import type { BlockTitleProps } from "./type";

const BlockTitle = ({
  title,
  description,
  descriptionSize,
}: BlockTitleProps) => {
  return (
    <div className="mb-10 flex flex-col items-start gap-x-10 gap-y-3 sm:mb-20 sm:flex-row">
      <h2 className="bg-green rounded-[7px] px-[7px] leading-11 sm:leading-[51px]">
        {title}
      </h2>
      <p className={`leading-[23px]`} style={{ maxWidth: descriptionSize }}>
        {description}
      </p>
    </div>
  );
};

export default BlockTitle;
