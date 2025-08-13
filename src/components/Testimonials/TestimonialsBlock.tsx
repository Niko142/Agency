import Slider from "@components/Slider/Slider";
import BlockTitle from "@components/UI/BlockTitle";

const TestimonialsBlock = () => {
  return (
    <section className="mb-20 overflow-hidden md:mb-34 lg:mb-35">
      <BlockTitle
        title="Testimonials"
        description="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
        descriptionSize="473px"
      />
      <Slider />
    </section>
  );
};

export default TestimonialsBlock;
