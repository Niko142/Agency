import { useRef, useState } from "react";
import Button from "@components/UI/Button";

const FooterForm = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

  // Имитация подписки на рассылку
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(false);
    if (emailRegex.test(email)) {
      alert("Вы успешно подписались на рассылку");
      setEmail("");
    } else {
      setError(true);
      alert("Неверный формат ввода email");
      handleFocus();
    }
  };

  function handleFocus() {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  return (
    <form
      name="mailing"
      onSubmit={handleSubmit}
      className="bg-gray flex w-full shrink-0 flex-col gap-5 rounded-[14px] px-4 py-7 md:flex-row md:px-6 md:py-11 lg:w-auto xl:px-10 xl:py-14.5"
    >
      <input
        type="text"
        name="email"
        autoComplete="on"
        ref={inputRef}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={`w-full rounded-[14px] border bg-transparent px-5 py-3.5 text-white focus:outline-0 sm:px-7 sm:py-4.5 xl:px-[35px] xl:py-5.5 ${error ? "focus: border-red-600" : "focus:border-green border-white"}`}
        placeholder="Email"
      />
      <Button
        onClick={handleSubmit}
        className="bg-green cursor-pointer rounded-[14px] px-5 py-3.5 text-lg leading-6 text-nowrap text-black transition-colors duration-300 ease-in-out hover:bg-white sm:px-[35px] sm:py-5 sm:text-xl sm:leading-7"
      >
        Subscribe to news
      </Button>
    </form>
  );
};

export default FooterForm;
