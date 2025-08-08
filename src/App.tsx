import { useState } from "react";
import { processSteps } from "@/data/data";
import type { ISteps } from "./types";

import Slider from "@components/Slider";

import LogoLight from "@assets/images/logo-light.png";
import Linkedin from "@assets/images/linkedin.png";
import Twitter from "@assets/images/twitter.png";
import Mask from "@assets/images/Mask.svg";
import BlockTitle from "@components/UI/BlockTitle";
import NavigationBlock from "@components/Navigation/NavigationBlock";
import ServiceBlock from "@components/Services/ServiceBlock";
import CaseBlock from "./components/Case/CaseBlock";
import PersonalProposal from "./components/PersonalProposal";
import TeamBlock from "./components/Team/TeamBlock";

function App() {
  const [active, setActive] = useState(processSteps);

  function OpenWork(id: number) {
    setActive(
      active.map((item) => {
        if (item.id === id) {
          item.isOpen = !item.isOpen;
        }
        return item;
      }),
    );
  }

  const WorkBlock = ({ number, header, description, id, isOpen }: ISteps) => {
    return (
      <div className={isOpen ? "work_active" : "work_passive"}>
        <div className="work_head">
          <div
            style={{
              display: "flex",
              columnGap: "25px",
              alignItems: "center",
              marginLeft: "0",
            }}
          >
            <span className="number">{number}</span>
            <p>{header}</p>
          </div>
          <button
            className="selector"
            id={isOpen ? "minus" : "plus"}
            onClick={() => {
              OpenWork(id);
            }}
          ></button>
        </div>
        {isOpen && (
          <>
            <hr className="work_line"></hr>
            <p>{description}</p>
          </>
        )}
      </div>
    );
  };
  const Work = active.map((item) => {
    return (
      <WorkBlock
        key={item.id}
        id={item.id}
        isOpen={item.isOpen}
        number={item.number}
        header={item.header}
        description={item.description}
      />
    );
  });

  return (
    <main className="px-2.5 sm:px-5 lg:px-10 xl:px-[100px]">
      <NavigationBlock />
      <ServiceBlock />
      <CaseBlock />
      <PersonalProposal />
      <section className="working">
        <BlockTitle
          title="Our working process"
          description="Step-by-Step Guide to Achieving Your Business Goals"
          descriptionSize="292px"
        />
        <div className="work_wrap">{Work}</div>
      </section>
      <TeamBlock />
      <section className="test">
        <BlockTitle
          title="Testimonials"
          description="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
          descriptionSize="473px"
        />
        <Slider />
      </section>
      <section className="contact">
        <BlockTitle
          title="Contact Us"
          description="Connect with Us: Let's Discuss Your Digital Marketing Needs"
          descriptionSize="323px"
        />
        <div className="contact_wrap">
          <form action="" style={{ display: "block" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                marginBottom: "40px",
              }}
            >
              <input type="radio" name="contact" />
              <label id="say">Say Hi</label>
              <input type="radio" name="contact" />
              <label>Get a Quote</label>
            </div>
            <label className="form">Name</label>
            <input type="text" placeholder="Name" />
            <label className="form">Email*</label>
            <input type="text" placeholder="Email" />
            <label className="form">Message*</label>
            <textarea placeholder="Message" />
            <button className="button_primary" id="send">
              Send Message
            </button>
          </form>
          <img src={Mask} alt="Contact" />
        </div>
      </section>
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
