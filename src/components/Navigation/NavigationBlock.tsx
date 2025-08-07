import PartnerLinks from "@components/Links/PartnerLinks";

import Navigate from "@assets/images/navigate.png";
import Header from "./Header";

const NavigationBlock = () => {
  return (
    <section className="navigation-bar mb-[140px] pt-[60px]">
      <Header />
      <div className="mb-[70px] flex justify-between">
        <article className="flex max-w-[531px] flex-col gap-[35px]">
          <h1 className="leading[77px] text-6xl">
            Navigating the digital landscape for success
          </h1>
          <p className="text-xl leading-7">
            Our digital marketing agency helps business grow and succeed online
            through a range of services including SEO, PPC, social media
            marketing and content creation.
          </p>
          <button className="hover:bg-green bg-dark self-baseline rounded-[14px] px-[35px] py-5 text-xl leading-7 text-white transition-colors ease-in-out hover:text-black">
            Book a consultation
          </button>
        </article>
        <article className="">
          <img src={Navigate} alt="Frame" />
        </article>
      </div>
      <article className="links">
        <PartnerLinks />
      </article>
    </section>
  );
};

export default NavigationBlock;
