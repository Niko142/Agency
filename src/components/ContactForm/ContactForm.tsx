import Button from "@components/UI/Button";
import Input from "@components/UI/Input";
import Textarea from "@components/UI/Textarea";
import InputRadio from "@components/UI/InputRadio";
import { useState, type ChangeEvent } from "react";

const ContactForm = () => {
  const [radioOption, setRadioOption] = useState("hi");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Обработчик для input и textarea
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Имитация отправки данных
  const handleDataSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => {
      alert(
        `Данные успешно отправлены.\n\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`,
      );
    }, 1000);
  };

  return (
    <form
      id="contact"
      onSubmit={handleDataSubmit}
      className="flex max-w-full flex-col gap-6 sm:gap-10 md:max-w-[556px]"
    >
      <div className="flex gap-[35px]">
        <InputRadio
          name="form__option"
          value="hi"
          label="Say Hi"
          checked={radioOption === "hi"}
          onChange={() => setRadioOption("hi")}
        />
        <InputRadio
          name="form__option"
          value="quote"
          label="Get a Quote"
          checked={radioOption === "quote"}
          onChange={() => setRadioOption("quote")}
        />
      </div>
      <div className="grid gap-3 sm:gap-[25px]">
        <Input
          value={formData.name}
          label="Name"
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />
        <Input
          value={formData.email}
          label="Email*"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <Textarea
          value={formData.message}
          label="Message*"
          name="message"
          placeholder="Message"
          onChange={handleChange}
        />
      </div>
      <Button onClick={handleDataSubmit} style={{ alignSelf: "stretch" }}>
        Send Message
      </Button>
    </form>
  );
};

export default ContactForm;
