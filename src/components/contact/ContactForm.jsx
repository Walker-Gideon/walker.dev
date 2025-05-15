import { useState } from "react";
import Button from "../ui/Button";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form action="#" className="w-full">
      <div className="midmedium:flex midmedium:gap-5">
        <div className="w-full">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full name"
            className="w-full border-b border-b-gray-400 focus:outline-none text-white text-sm small:text-lg sm:text-xl font-bold p-1 placeholder:text-gray-400 placeholder:text-lg"
          />
        </div>

        <div className="w-full small:py-10 midmedium:py-0">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full  border-b border-b-gray-400 focus:outline-none text-white text-sm small:text-lg sm:text-xl font-bold p-1 placeholder:text-gray-400 placeholder:text-lg"
          />
        </div>
      </div>

      <div className="my-6 w-full">
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Enter the subject:"
          className="w-full border-b border-b-gray-400 focus:outline-none text-white text-sm small:text-lg sm:text-xl font-bold p-1 placeholder:text-gray-400 placeholder:text-lg"
        />
      </div>

      <div className="mb-10">
        <textarea
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your message:"
          className="w-full h-30 border-b border-b-gray-400 focus:outline-none text-white text-sm small:text-lg sm:text-xl font-bold p-1 placeholder:text-gray-400 placeholder:text-lg"
        ></textarea>
      </div>

      <div className="small:flex small:flex-col md:flex-row">
        <div></div>
        <Button
          onClick={handleSubmit}
          borderCol="border-primary"
          textCol="text-white"
        >
          Discuss project
        </Button>
      </div>
    </form>
  );
}

export default ContactForm;
