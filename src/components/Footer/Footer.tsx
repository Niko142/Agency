import { headerOptions } from "@/data/data";
import Logo from "@images/Logos/logo-light.png";
import FooterLinks from "@components/Links/FooterLinks";
import FooterForm from "./FooterForm";

const Footer = () => {
  return (
    <footer className="bg-dark flex flex-col gap-6 rounded-t-3xl px-4 py-8 sm:gap-9 sm:rounded-t-[45px] sm:px-8 sm:py-10 md:gap-12.5 lg:px-10 lg:pt-[55px] lg:pb-12.5 xl:px-15">
      <div className="mb-8 sm:mb-12 lg:mb-16.5">
        {/* Шапка footer-a */}
        <nav className="flex flex-col items-center justify-between gap-x-2 gap-y-5 sm:gap-y-10 lg:flex-row">
          {/* Логотип */}
          <img className="shrink-0" src={Logo} alt="Positivus_logo" />

          {/* navbar */}
          <ul className="flex flex-col gap-4 bg-transparent text-center sm:flex-row sm:flex-wrap sm:justify-center sm:gap-6 sm:text-left md:gap-15 lg:gap-8 xl:gap-10">
            {headerOptions.map((item, ind) => (
              <li
                key={ind}
                className="hover:bg-green hover:text-dark text-base leading-5 text-white underline underline-offset-2 transition-colors duration-300 ease-in-out sm:text-lg sm:leading-[23px]"
              >
                <a href="/#">{item.title}</a>
              </li>
            ))}
          </ul>

          {/* Ссылки на соцсети */}
          <FooterLinks />
        </nav>
      </div>

      <div className="flex flex-col items-baseline justify-between gap-x-2.5 gap-y-5 md:gap-y-7 lg:flex-row lg:items-center">
        {/* Основные контакты */}
        <article className="max-w-[294px]">
          <h4 className="bg-green mb-[27px] inline-block rounded-[7px] px-[7px] leading-5.5 text-black sm:leading-6.5">
            Contact us:
          </h4>
          <div className="flex flex-col gap-y-4 leading-5 text-white sm:leading-[23px]">
            <p>Email: info@positivus.com</p>
            <p>Phone: 555-567-8901</p>
            <p>Address: 1234 Main St Moonstone City, Stardust State 12345</p>
          </div>
        </article>

        {/* Форма для подписки на рассылку */}
        <FooterForm />
      </div>

      {/* Примечание */}
      <hr className="text-white" />
      <div className="flex flex-col gap-3 text-center text-base leading-6 text-white sm:flex-row sm:gap-10 sm:text-left sm:text-lg sm:leading-7">
        <p>© 2023 Positivus. All Rights Reserved.</p>
        <a className="cursor-pointer underline hover:opacity-85">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
