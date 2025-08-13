import Button from "./UI/Button";
import Proposal from "@images/proposal.png";
const PersonalProposal = () => {
  return (
    <section className="proposal relative mb-14 py-[23.5px] sm:mb-24 md:mb-35">
      <div className="bg-grey grid justify-items-center rounded-3xl p-4 sm:rounded-[45px] sm:p-10 md:grid-cols-2 md:p-15">
        <div className="flex flex-col gap-6.5">
          <h3 className="leading-8 sm:leading-9.5">Let’s make things happen</h3>
          <p className="leading-[23px]">
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <Button>Get your free proposal</Button>
        </div>
        <img
          className="top-0 right-0 row-start-1 block h-48 sm:h-full md:absolute"
          src={Proposal}
          alt="Proposal"
        />
      </div>
    </section>
  );
};

export default PersonalProposal;
