import Slider from "@components/Slider";

import LogoLight from "@assets/images/logo-light.png";
import Linkedin from "@assets/images/linkedin.png";
import Twitter from "@assets/images/twitter.png";
import BlockTitle from "@components/UI/BlockTitle";
import NavigationBlock from "@components/Navigation/NavigationBlock";
import ServiceBlock from "@components/Services/ServiceBlock";
import CaseBlock from "@/components/CaseStudies/CaseStudiesBlock";
import PersonalProposal from "@components/PersonalProposal";
import TeamBlock from "@components/Team/TeamBlock";
import ConnectBlock from "@components/ContactForm/ConnectBlock";
import WorkingProcessBlock from "@components/WorkingProcess/WorkingProcessBlock";

function App() {
  return (
    <main className="px-2.5 sm:px-5 lg:px-10 xl:px-[100px]">
      <NavigationBlock />
      <ServiceBlock />
      <CaseBlock />
      <WorkingProcessBlock />
      <PersonalProposal />
      <TeamBlock />
      <section className="test">
        <BlockTitle
          title="Testimonials"
          description="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
          descriptionSize="473px"
        />
        <Slider />
      </section>
      <ConnectBlock />
      <footer>
        <div className="footer_header">
          <div className="footer_logo">
            <img src={LogoLight} alt="logo" />
          </div>
          <nav>
            <ul className="footer_ul">
              <li>
                <a href="/#">About us</a>
              </li>
              <li>
                <a href="/#">Services</a>
              </li>
              <li>
                <a href="/#">Use Cases</a>
              </li>
              <li>
                <a href="/#">Pricing</a>
              </li>
              <li>
                <a href="/#">Blog</a>
              </li>
            </ul>
          </nav>
          <ul className="footer_ul_logo">
            <li>
              <a href="/#" className="logo">
                <img src={Linkedin} alt="Linkedin" />
              </a>
            </li>
            <li>
              <a href="/#" className="logo">
                <img src={Linkedin} alt="Linkedin" />
              </a>
            </li>
            <li>
              <a href="/#" className="logo">
                <img src={Twitter} alt="Twitter" />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer_content">
          <div className="footer_contact">
            <article>Contact us:</article>
            <p className="email">Email: info@positivus.com</p>
            <p className="phone">Phone: 555-567-8901</p>
            <p>Address: 1234 Main St Moonstone City, Stardust State 12345</p>
          </div>
          <div className="footer_form">
            <input type="text" id="footer_text" placeholder="Email" />
            <button className="button_third">Subscribe to news</button>
          </div>
        </div>
        <hr className="footer_line"></hr>
        <div className="footer_desc">
          <p>
            © 2023 Positivus. All Rights Reserved.<u>Privacy Policy</u>
          </p>
        </div>
      </footer>
    </main>
  );
}

export default App;
