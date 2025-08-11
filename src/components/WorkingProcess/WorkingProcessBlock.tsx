import BlockTitle from "@components/UI/BlockTitle";
import { processSteps } from "./data";
import AccordionSteps from "./AccordionSteps";

const WorkingProcessBlock = () => {
  return (
    <section>
      <BlockTitle
        title="Our working process"
        description="Step-by-Step Guide to Achieving Your Business Goals"
        descriptionSize="292px"
      />
      <div className="grid gap-7.5">
        {processSteps.map((step, ind) => {
          return (
            <AccordionSteps
              key={ind}
              number={step.number}
              title={step.title}
              content={step.content}
            />
          );
        })}
      </div>
    </section>
  );
};

export default WorkingProcessBlock;
