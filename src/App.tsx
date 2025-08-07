import { useState } from "react";
import { teamMembers, processSteps } from "@/data/data";
import type { ISteps, ITeamMember } from "./types";

import Slider from "@components/Slider";

import LogoLight from "@assets/images/logo-light.png";
import Proposal from "@assets/images/proposal.png";
import Linkedin from "@assets/images/linkedin.png";
import Twitter from "@assets/images/twitter.png";
import SpecialIcon from "@assets/images/SpecialIcon.svg";
import Mask from "@assets/images/Mask.svg";
import BlockTitle from "@components/UI/BlockTitle";
import NavigationBlock from "@components/Navigation/NavigationBlock";
import ServiceBlock from "@components/Services/ServiceBlock";

function App() {
  const [active, setActive] = useState(processSteps);

  interface SpecialLinkProps {
    src: string;
  }

  const SpecialLink = (props: SpecialLinkProps) => {
    return (
      <div className="special_link">
        <img className="special_link" src={props.src} alt="Link" />
      </div>
    );
  };

  interface CaseProps {
    text: string;
  }

  const CaseBlock = (props: CaseProps) => {
    return (
      <>
        <li>
          <p>{props.text}</p>
          <SpecialLink src={SpecialIcon} />
        </li>
        <hr className="line" />
      </>
    );
  };

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

  const TeamBlock = ({ description, image, name, employee }: ITeamMember) => {
    return (
      <div className="team_block">
        <div className="team_person">
          <div className="team_img">
            <img src={image} alt="Person" />
          </div>
          <div className="team_context">
            <a href="/#"> </a>
            <h4>{name}</h4>
            <p>{employee}</p>
          </div>
        </div>
        <hr className="team_line"></hr>
        <div className="team_description">
          <p style={{ lineHeight: "23px" }}>{description}</p>
        </div>
      </div>
    );
  };

  const Team = teamMembers.map((item) => {
    return (
      <TeamBlock
        key={item.id}
        image={item.image}
        name={item.name}
        employee={item.employee}
        description={item.description}
      />
    );
  });

  return (
    <main className="px-5 lg:px-10 xl:px-[100px]">
      <NavigationBlock />
      <ServiceBlock />
      <section className="proposal mb-[140px] py-[23.5px]">
        <div className="bg-grey grid grid-cols-2 rounded-[45px] p-[60px]">
          <div className="flex flex-col gap-[26px]">
            <h3 className="leading-[38px]">Let’s make things happen</h3>
            <p className="leading-[23px]">
              Contact us today to learn more about how our digital marketing
              services can help your business grow and succeed online.
            </p>
            <button className="bg-dark hover:text-dark hover:bg-green self-baseline rounded-[14px] px-[35px] py-5 text-xl leading-7 text-white transition-colors ease-in-out">
              Get your free proposal
            </button>
          </div>
          <img className="" src={Proposal} alt="Proposal" />
        </div>
      </section>
      <section className="case">
        <BlockTitle
          title="Case Studies"
          description="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
        />

        <ul className="bg-dark rounded-[45px] px-[60px] py-[70px] text-white">
          <CaseBlock
            text={` For a local restaurant, we implemented a targeted PPC campaign that
              resulted in a 50% increase in website traffic and a 25% increase in sales.`}
          />
          <CaseBlock
            text={` For a B2B software company, we developed an SEO strategy that resulted in a
              first page ranking for key keywords and a 200% increase in organic traffic.`}
          />
          <CaseBlock
            text={` For a national retail chain, we created a social media marketing campaign that
              increased followers by 25% and generated a 20% increase in online sales.`}
          />
        </ul>
      </section>

      <section className="working">
        <BlockTitle
          title="Our working process"
          description="Step-by-Step Guide to Achieving Your Business Goals"
        />
        <div className="work_wrap">{Work}</div>
      </section>
      <section className="team">
        <BlockTitle
          title="Team"
          description="Meet the skilled and experienced team behind our successful digital marketing strategies"
        />
        <div className="team_wrap">{Team}</div>
        <button className="button_primary">See all team</button>
      </section>
      <section className="test">
        <BlockTitle
          title="Testimonials"
          description="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
        />
        <Slider />
      </section>
      <section className="contact">
        <BlockTitle
          title="Contact Us"
          description="Connect with Us: Let's Discuss Your Digital Marketing Needs"
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
