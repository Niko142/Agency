import { headerOptions } from "@/data/data";
import Logo from "@assets/images/logo.png";
import BurgerMenuButton from "@components/UI/BurgerIcon";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Обработчик клика по кнопке
  function toggleOpenMenu() {
    setIsOpen((prev) => !prev);
  }

  return (
    <header className="mb-[70px]">
      <nav className="flex items-center justify-between">
        {/* Логотип */}
        <img className="h-10 xl:h-full" src={Logo} alt="Logo" />

        {/* Desktop-bar */}
        <ul className="hidden items-center gap-10 text-lg leading-6 lg:flex xl:text-xl xl:leading-7">
          {headerOptions.map((item, ind) => (
            <li
              key={ind}
              className="hover:bg-green transition-colors ease-in-out"
            >
              <a href="/#">{item.title}</a>
            </li>
          ))}
          <li>
            <button className="hover:bg-dark border-dark rounded-[13px] border px-[35px] py-5 transition-colors ease-in-out hover:text-white">
              Request a quote
            </button>
          </li>
        </ul>

        <BurgerMenuButton onClick={toggleOpenMenu} isOpen={isOpen} />
      </nav>

      {/* Mobile-bar */}
      <div
        className={`fixed inset-0 z-20 bg-white transition-transform duration-300 ease-in-out lg:hidden ${isOpen ? "translate-x-0" : "translate-x-full"} `}
      >
        <div className="flex h-full flex-col items-center justify-center gap-6">
          {headerOptions.map((item, ind) => (
            <a
              key={ind}
              href="/#"
              className="hover:bg-green text-2xl transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              {item.title}
            </a>
          ))}
          <button
            className="border-dark rounded-[13px] border px-[35px] py-5 text-xl transition-colors ease-in-out hover:bg-gray-800 hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            Request a quote
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
