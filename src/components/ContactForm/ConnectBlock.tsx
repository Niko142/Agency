import BlockTitle from "@components/UI/BlockTitle";
import ContactForm from "./ContactForm";
import FormImage from "@images/Mask.svg";

const ConnectBlock = () => {
  return (
    <section className="mb-20 overflow-hidden md:mb-34 lg:mb-35">
      <BlockTitle
        title="Contact Us"
        description="Connect with Us: Let's Discuss Your Digital Marketing Needs"
        descriptionSize="323px"
      />
      <div className="bg-grey relative rounded-3xl px-1.5 py-4 sm:rounded-[45px] sm:py-10 md:px-13 lg:pt-12 lg:pb-18 md:lg:px-20 xl:px-25 xl:pt-15 xl:pb-20">
        <ContactForm />
        <img
          src={FormImage}
          id="form--image"
          className="absolute top-10 -right-80 z-10 xl:top-[65px]"
          alt="FormImage"
        />
      </div>
    </section>
  );
};

export default ConnectBlock;
