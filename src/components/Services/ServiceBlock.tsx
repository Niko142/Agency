import { services } from "./data";
import BlockTitle from "@components/UI/BlockTitle";
import ServiceCard from "./ServiceCard";

const ServiceBlock = () => {
  return (
    <section className="mb-9 sm:mb-16 md:mb-[100px]">
      <BlockTitle
        title="Services"
        description="At our digital marketing agency, we offer a range of services to
          help businesses grow and succeed online. These services include:"
        descriptionSize="580px"
      />
      <div className="grid gap-5 lg:grid-cols-2 xl:gap-10">
        {services.map((card, id) => {
          return (
            <ServiceCard
              key={id}
              topTitle={card.topTitle}
              bottomTitle={card.bottomTitle}
              src={card.src}
              cardVariant={card.cardVariant}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ServiceBlock;
