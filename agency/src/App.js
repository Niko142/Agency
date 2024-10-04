import './index.css';
import { team, service, working } from './data';
import {useState} from 'react';
import Logo from './img/Logo.png'
import Navigate from './img/Navigate.png';
import NoAmazon from './img/Amazon_passive.svg';
import Amazon from './img/Amazon_active.svg';
import Dribble from './img/Dribble.svg';
import Hubspot from './img/Hubspot_active.svg';
import NoHubspot from './img/Hubspot_passive.svg';
import Notion from './img/Notion.svg';
import Netflix from './img/Netflix_active.svg';
import NoNetflix from './img/Netflix_passive.svg';
import Zoom from './img/Zoom_active.svg';
import NoZoom from './img/Zoom_passive.svg';
import Proposal from './img/Proposal.svg';
import Linkedin from './img/linkedin.svg';
import Twitter from './img/twitter.svg';
import Slider from './components/Slider/Slider';

function App() {
  const [value, setValue] = useState(true);
  const [hub, setHub] = useState(true);
  const [net, setNet] = useState(true);
  const [zoom, setZoom] = useState(true);
  const [active, setActive] = useState(working);

  const Zagolovok = ({classname, head, text}) => {
    return (
      <div className={classname}>
        <article className='heading'>{head}</article>
        <p>{text}</p>
      </div>
    )
  }

  const Link = ({src, white}) => {
    return(
      <div className={white ? 'alternative_container' : 'link_container'}>
        <a href='/#'><img className='link' src={src} alt='Link'/></a>
      </div>
    )
  }

  const SpecialLink = ({src}) => {
    return(
      <div className='special_link'>
        <img className='special_link' src={src} alt='Link'/>
      </div>
    )
  }

  const ServiceCard = ({src, art1, art2, green, black, link}) => {
    return (
    <div className='service_block' id={green ? 'green': black ? 'black' : ''}>
      <div className='service_context'>
        <div style={{display: '', marginBottom: '93px'}}>
          <article className={green ? 'head_white' : 'head_green'}>{art1}</article>
          <article className={green ? 'head_white' : 'head_green'}>{art2}</article>
        </div>
        <Link src={link} white={black}/>
      </div>
      <div className='service_img'>
        <img src={src} alt='Img'/>
      </div>
    </div>
  )}
  
  const Service = service.map(item => {
    return(
      <ServiceCard key={item.id} art1={item.art1} black={item.black} green={item.green} art2={item.art2}
      src={item.image} link={item.link}/>
    )
  })

  const CaseBlock = ({ text }) => {
    return (
      <>
      <li>
          <p>
            {text}
          </p>
          <SpecialLink src={'/SpecialIcon.svg'}/>
      </li>
      <hr className='line'></hr>
      </>
    )
  }

  function OpenWork(id) {
    setActive(active.map(item => {
        if (item.id === id) {
        item.isOpen = !item.isOpen;
      }
      return item;
    }));
  }

  const WorkBlock = ({number, text, description, id, isOpen}) => {
    return (
      <div className={isOpen ? 'work_active' : 'work_passive'}>
        <div className='work_head'>
          <div style={{display: 'flex', columnGap: '25px', alignItems: 'center', marginLeft: '0'}}>
            <span className='number'>{number}</span>
            <p>{text}</p>
          </div>
          <button className='selector' id={isOpen ? 'minus' : 'plus'} onClick={() => {OpenWork(id)}}></button>
        </div>
        {isOpen && <><hr className='work_line'></hr><p>{description}</p></>}
      </div>
    )
  }

  const Work = active.map(item => {
    return (
      <WorkBlock key={item.id} id={item.id} isOpen={item.isOpen} number={item.number} text={item.header} description={item.description}/>
    )
  })

  const TeamBlock =({text, src, header, desc}) => {
    return (
      <div className='team_block'>
        <div className='team_person'>
          <div className='team_img'>
            <img src={src} alt='Person'/> 
          </div> 
          <div className='team_context'>
            <a href='/#'> </a>
              <h4>{header}</h4>
              <p>{desc}</p>
          </div>
        </div>
        <hr className='team_line'></hr>
        <div className='team_description'>
          <p style={{lineHeight: '23px'}}>{text}</p>  
        </div>
      </div>
    )
  }

  const Team = team.map((item) => {
    return (
    <TeamBlock key={item.id} src={item.image} header={item.name} 
    desc={item.employee} text={item.description}/>)
  })
  
  return (
    <div className="app">
      <section className='landing'>
        <header className='header'>
          <div className='header_wrap'>
            <div className='header-logo'>
              <img src = {Logo} alt='Logo'/>
            </div>
            <nav className='header_nav'>
              <ul className='header_ul'>
                <li><a className='header_a' href='/#'>About us</a></li>
                <li><a className='header_a' href='/#'>Services</a></li>
                <li><a className='header_a' href='/#'>Use Cases</a></li>
                <li><a className='header_a' href='/#'>Pricing</a></li>
                <li><a className='header_a' href='/#'>Blog</a></li>
                <button onClick={() => window.location.reload()} className='button_second'>Request a quote</button>
              </ul>
            </nav>
          </div>
        </header>
      </section>
      <section className='navigate'>
        <div className='navigate_wrap'>
            <h1 id='nav_id'>Navigating the digital landscape for success</h1>
            <div className='navigate_frame'>
              <img src={Navigate} alt='Frame'/>
            </div>
            <span className='navigate_span'>
              Our digital marketing agency helps business grow
              and succeed online through a range of services including
              SEO, PPC, social media marketing and content creation.
            </span>
              <button className='button_primary' id='butt'>Book a consulation</button>
        </div>
      </section>
      <section className='brends'>
        <ul>
          <li><a href='/#' onMouseOver={() => setValue(false)} onMouseOut={() => setValue(true)}>
          <img className='icon_amazon'src={value ? NoAmazon : Amazon} alt='Amazon'/></a></li>
          <li><a href='/#'><img className='icon_dribble'src={Dribble} alt='Dribble'/></a></li>
          <li><a href='/#' onMouseOver={() => setHub(false)} onMouseOut={() => setHub(true)}>
          <img className='icon_hubspot'src={hub ? NoHubspot : Hubspot} alt='Hubspot'/></a></li>
          <li><a href='/#'><img className='icon_notion'src={Notion} alt='Notion'/></a></li>
          <li><a href='/#' onMouseOver={() => setNet(false)} onMouseOut={() => setNet(true)}>
          <img className='icon_netflix'src={net ? NoNetflix : Netflix} alt='Netflix'/></a></li>
          <li><a href='/#' onMouseOver={() => setZoom(false)} onMouseOut={() => setZoom(true)}>
          <img className='icon_zoom'src={zoom ? NoZoom : Zoom} alt='Zoom'/></a></li>
        </ul>
      </section>
      <section className='services'>
        <Zagolovok classname={'services_header'} head={'Services'}
        text={`
          At our digital marketing agency, we offer a range of services to 
          help businesses grow and succeed online. These services include:
          `}
        />
        <div className='services_content'>
          {Service}
        </div>
      </section>
      <section className='proposal'>
        <div className='proposal_wrap'>
          <div className='proposal_content'>
            <h3>Let’s make things happen</h3>
            <p>Contact us today to learn more about how our 
              digital marketing services can help your business grow and succeed online.
            </p>
            <button className='button_primary'>Get your free proposal</button>
          </div>
          <div className='proposal_img'>
            <img src={Proposal} alt='Proposal'/>
          </div>
        </div>
      </section>
      <section className='case'>
        <Zagolovok classname={'case_header'} head={'Case Studies'}
        text={'Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies'}/>
             {/* Можно добавить компонент, чтобы это не перечислять */}
        <ul className='case_wrap'>
          <CaseBlock text={ 
            ` For a local restaurant, we implemented a targeted PPC campaign that 
              resulted in a 50% increase in website traffic and a 25% increase in sales.`}
          />
          <CaseBlock text={
            ` For a B2B software company, we developed an SEO strategy that resulted in a 
              first page ranking for key keywords and a 200% increase in organic traffic.`}
          />
          <CaseBlock text={
            ` For a national retail chain, we created a social media marketing campaign that 
              increased followers by 25% and generated a 20% increase in online sales.`}
          />
        </ul>
      </section>
      <section className='working'>
        <Zagolovok 
          classname={'working_header'} 
          head={'Our working process'}
          text={'Step-by-Step Guide to Achieving Your Business Goals'}
        />
        <div className='work_wrap'>
          {Work}
        </div>
      </section>
      <section className='team'>
      <Zagolovok 
        classname={'team_header'} 
        head={'Team'}
        text={'Meet the skilled and experienced team behind our successful digital marketing strategies'}
      />
      <div className='team_wrap'>
        {Team}
      </div>
        <button className='button_primary'>See all team</button>
      </section>
      <section className='test'>
        <Zagolovok 
          classname={'test_header'} 
          head={'Testimonials'}
          text={'Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services'}
        />
        <Slider />
      </section>
      <section className='contact'>
        <Zagolovok 
          classname={'contact_header'} 
          head={'Contact Us'}
          text={"Connect with Us: Let's Discuss Your Digital Marketing Needs"}
        />
        <div className='contact_wrap'>
          <form action='' style={{display: 'block'}}>
            <div style={{display: 'inline-flex', alignItems: 'center', marginBottom: '40px'}}><input type='radio' name='contact'/><label id='say'>Say Hi</label>
              <input type='radio' name='contact'/>
              <label>Get a Quote</label>
            </div>
              <label className='form'>Name</label>
              <input type='text' placeholder='Name'/>
              
              <label className='form'>Email*</label>
              <input type='text' placeholder='Email'/>
              
              <label className='form'>Message*</label>
              
              <textarea placeholder='Message'/>
              <button className='button_primary' id='send'>Send Message</button>
          </form>
          <img src='/Mask.svg' alt='Contact'/>
        </div>
      </section>
      <footer>
        <div className='footer_header'>
          <div className='footer_logo'>
            <img src='/Logo.svg' alt='Logo'/>
          </div>
          <nav>
            <ul className='footer_ul'>
              <li><a href='/#'>About us</a></li>
              <li><a href='/#'>Services</a></li>
              <li><a href='/#'>Use Cases</a></li>
              <li><a href='/#'>Pricing</a></li>
              <li><a href='/#'>Blog</a></li>
            </ul>
          </nav>
          <ul className='footer_ul_logo'>
            <li><a href='/#' className='logotip'><img src={Linkedin} alt='Linkedin'/></a></li>
            <li><a href='/#' className='logotip'><img src={Linkedin} alt='Linkedin'/></a></li>
            <li><a href='/#' className='logotip'><img src={Twitter} alt='Twitter'/></a></li>
          </ul>
        </div>
        <div className='footer_content'>
          <div className='footer_contact'>
            <article>Contact us:</article>
              <p className='email'>Email: info@positivus.com</p>
              <p className='phone'>Phone: 555-567-8901</p>
              <p>Address: 1234 Main St
              Moonstone City, Stardust State 12345</p>
          </div>
          <div className='footer_form'>
            <input type='text' id='footer_text' placeholder='Email'/>
            <button className='button_third'>Subscibe to news</button>
          </div>
        </div>
        <hr className='footer_line'></hr>
        <div className='footer_desc'>
          <p>© 2023 Positivus. All Rights Reserved.<u>Privacy Policy</u></p>
        </div>
      </footer>
    </div>
  );
}

export default App;
