import { services } from "./data";
import BlockTitle from "@components/UI/BlockTitle";
import ServiceCard from "./ServiceCard";

const ServiceBlock = () => {
  return (
    <section className="services mb-[100px]">
      <BlockTitle
        title="Services"
        description="At our digital marketing agency, we offer a range of services to
          help businesses grow and succeed online. These services include:"
      />
      <div className="grid grid-cols-1 gap-10 xl:grid-cols-2">
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
