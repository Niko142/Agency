import { cardThemes } from "@/themes/themes";
import type { IService } from "@/types";
import InfoLink from "@components/Links/InfoLink";

const ServiceCard = ({ topTitle, bottomTitle, src, cardVariant }: IService) => {
  const { titleBackground, cardBackground } = cardThemes[cardVariant];
  const linkVariant =
    cardVariant === "dark" || cardVariant === "dark-green" ? "dark" : "light";

  return (
    <article
      className={`border-dark box-border flex justify-between gap-x-1 rounded-3xl border p-5 drop-shadow-(--custom-shadow) sm:gap-x-1.5 lg:rounded-[45px] lg:px-[25px] lg:py-[35px] xl:p-[50px]`}
      style={{ backgroundColor: cardBackground }}
    >
      <div className="flex flex-col gap-y-12 sm:gap-y-[93px]">
        <div>
          <h3
            className="rounded-[7px] px-[7px] leading-8 sm:leading-[38px]"
            style={{ backgroundColor: titleBackground }}
          >
            {topTitle}
          </h3>
          <h3
            className="rounded-[7px] px-[7px] leading-8 sm:leading-[38px]"
            style={{ backgroundColor: titleBackground }}
          >
            {bottomTitle}
          </h3>
        </div>
        <InfoLink variant={linkVariant} />
      </div>

      <div className="flex max-w-[160px] content-center sm:max-w-[220px]">
        <img
          src={src}
          className="w-7/12 flex-1 object-contain sm:mx-auto sm:w-full lg:w-9/12 xl:w-full"
          alt="illustration"
        />
      </div>
    </article>
  );
};

export default ServiceCard;
