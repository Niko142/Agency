interface ButtonProps {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  // type?: "button" | "submit" | "reset";
  style?: React.CSSProperties;
}

const Button = ({ children, onClick, style, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      onClick={onClick}
      className="hover:bg-green bg-dark hover:text-dark self-baseline rounded-[14px] px-5 py-3.5 text-lg leading-6 text-white transition-colors ease-in-out sm:px-[35px] sm:py-5 sm:text-xl sm:leading-7"
      style={style}
    >
      {children}
    </button>
  );
};

export default Button;
