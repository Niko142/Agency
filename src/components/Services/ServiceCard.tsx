import { cardThemes } from "@/themes/themes";
import type { IService } from "@/types";
import InfoLink from "@components/Links/InfoLink";

const ServiceCard = ({ topTitle, bottomTitle, src, cardVariant }: IService) => {
  const { titleBackground, cardBackground } = cardThemes[cardVariant];
  const linkVariant =
    cardVariant === "dark" || cardVariant === "dark-green" ? "dark" : "light";

  return (
    <article
      className={`border-dark box-border flex justify-between rounded-[45px] border p-[50px] drop-shadow-(--custom-shadow)`}
      style={{ backgroundColor: cardBackground }}
    >
      <div className="flex flex-col gap-y-[93px]">
        <div>
          <h3
            className="rounded-[7px] px-[7px] leading-[38px]"
            style={{ backgroundColor: titleBackground }}
          >
            {topTitle}
          </h3>
          <h3
            className="rounded-[7px] px-[7px] leading-[38px]"
            style={{ backgroundColor: titleBackground }}
          >
            {bottomTitle}
          </h3>
        </div>
        <InfoLink variant={linkVariant} />
      </div>
      <div className="content-center">
        <img src={src} alt="illustration" />
      </div>
    </article>
  );
};

export default ServiceCard;
