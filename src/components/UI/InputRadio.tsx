import type { InputRadioProps } from "./type";

const InputRadio = ({
  label,
  name,
  value,
  checked,
  onChange,
  ...props
}: InputRadioProps) => {
  return (
    <div className="z-20 flex items-center gap-3.5">
      <input
        {...props}
        type="radio"
        value={value}
        checked={checked}
        onChange={onChange}
        className="checked:bg-green h-5 w-5 cursor-pointer appearance-none rounded-full border border-black bg-white checked:border-4 checked:border-white checked:ring-1 sm:h-7 sm:w-7"
        id={`${name}-${value}`}
      />
      <label
        htmlFor={`${name}-${value}`}
        className="text-base leading-5.5 sm:text-lg sm:leading-[23px]"
      >
        {label}
      </label>
    </div>
  );
};

export default InputRadio;
