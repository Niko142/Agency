import NavigationBlock from "@components/Navigation/NavigationBlock";
import ServiceBlock from "@components/Services/ServiceBlock";
import CaseBlock from "@/components/CaseStudies/CaseStudiesBlock";
import PersonalProposal from "@components/PersonalProposal";
import TeamBlock from "@components/Team/TeamBlock";
import ConnectBlock from "@components/ContactForm/ConnectBlock";
import WorkingProcessBlock from "@components/WorkingProcess/WorkingProcessBlock";
import Footer from "./components/Footer/Footer";
import TestimonialsBlock from "./components/Testimonials/TestimonialsBlock";

function App() {
  return (
    <main className="px-2.5 sm:px-5 lg:px-10 xl:px-[100px]">
      <NavigationBlock />
      <ServiceBlock />
      <PersonalProposal />
      <CaseBlock />
      <WorkingProcessBlock />
      <TeamBlock />
      <TestimonialsBlock />
      <ConnectBlock />
      <Footer />
    </main>
  );
}

export default App;
