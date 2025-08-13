interface ButtonProps {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  // type?: "button" | "submit" | "reset";
  className?: string;
  style?: React.CSSProperties;
}

const Button = ({
  children,
  onClick,
  className,
  style,
  ...props
}: ButtonProps) => {
  const defaultClasses =
    "hover:bg-green bg-dark hover:text-dark cursor-pointer self-baseline rounded-[14px] px-5 py-3.5 text-lg leading-6 text-white transition-colors duration-300 ease-in-out sm:px-[35px] sm:py-5 sm:text-xl sm:leading-7";
  return (
    <button
      {...props}
      onClick={onClick}
      className={className || defaultClasses}
      style={style}
    >
      {children}
    </button>
  );
};

export default Button;
