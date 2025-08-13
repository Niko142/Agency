import PartnerLinks from "@components/Links/PartnerLinks";
import Header from "./Header";
import Button from "@components/UI/Button";
import Navigate from "@images/navigate.png";

const NavigationBlock = () => {
  return (
    <section className="navigation-bar mb-20 pt-8 sm:pt-15 md:mb-34 lg:mb-35">
      <Header />
      <div className="mb-12 flex flex-col justify-between gap-y-4 sm:mb-17.5 md:flex-row">
        <article className="flex flex-col gap-5 md:max-w-[531px] md:gap-[35px]">
          <h1 className="leading-14 sm:leading-[77px]">
            Navigating the digital landscape for success
          </h1>
          <img
            src={Navigate}
            alt="Frame"
            className="max-h-[450px] self-baseline md:hidden"
          />
          <span className="w-full text-base leading-6 sm:text-xl sm:leading-7 md:max-w-[498px]">
            Our digital marketing agency helps business grow and succeed online
            through a range of services including SEO, PPC, social media
            marketing and content creation.
          </span>
          <Button>Book a consultation</Button>
        </article>
        <article className="hidden md:block">
          <img src={Navigate} alt="Frame" />
        </article>
      </div>

      {/* Партнеры */}
      <article>
        <PartnerLinks />
      </article>
    </section>
  );
};

export default NavigationBlock;
