import type { BurgerMenuButtonProps } from "./type";

const BurgerMenuButton = ({ isOpen, onClick }: BurgerMenuButtonProps) => {
  return (
    <div
      onClick={onClick}
      className="relative z-30 grid h-8 w-8 cursor-pointer place-content-center lg:hidden"
    >
      <div
        className={`bg-dark before:bg-dark after:bg-dark :-translate-y-2 h-1 w-8 rounded-full transition-all duration-300 ease-in-out before:absolute before:h-1 before:w-8 before:-translate-y-2 before:rounded-full before:content-[''] after:absolute after:h-1 after:w-8 after:rounded-full after:content-[''] ${
          isOpen
            ? "bg-transparent before:translate-y-0 before:rotate-45 after:translate-y-0 after:-rotate-45"
            : "before:translate-y-2 after:-translate-y-2"
        } `}
      ></div>
    </div>
  );
};

export default BurgerMenuButton;
