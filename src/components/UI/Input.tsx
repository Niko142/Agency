import type { InputTextProps } from "./type";

const Input = ({
  label,
  name,
  placeholder,
  value,
  onChange,
  ...props
}: InputTextProps) => {
  return (
    <div className="z-20 flex w-full flex-col gap-[5px]">
      {label && (
        <label htmlFor={name} className="text-base leading-7">
          {label}
        </label>
      )}
      <input
        {...props}
        type="text"
        name={name}
        id={name}
        onChange={onChange}
        value={value}
        autoComplete="on"
        className="w-full rounded-[14px] border border-black bg-white px-4 py-3 text-base leading-5 sm:px-7.5 sm:py-4.5 sm:text-lg sm:leading-[23px]"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
