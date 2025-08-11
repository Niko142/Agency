import type { TextareaProps } from "./type";

const Textarea = ({
  label,
  name,
  placeholder,
  value,
  onChange,
  ...props
}: TextareaProps) => {
  return (
    <div className="z-20 flex w-full flex-col gap-[5px]">
      {label && <label htmlFor={name}>{label}</label>}
      <textarea
        {...props}
        name={name}
        id={name}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        className="h-[120px] resize-none rounded-[14px] border border-black bg-white px-4 py-3 text-base leading-5 sm:h-[190px] sm:px-7.5 sm:py-4.5 sm:text-lg sm:leading-[23px]"
      ></textarea>
    </div>
  );
};

export default Textarea;
