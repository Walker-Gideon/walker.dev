import { useState } from "react";
import Button from "./Button";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form action="#">
      <div className="flex gap-5 w-3xl">
        <div className="w-full">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full name"
            className="w-full border-b border-b-gray-400 focus:outline-none text-white text-sm font-bold p-1 placeholder:text-gray-400 placeholder:text-lg"
          />
        </div>

        <div className="w-full">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full border-b border-b-gray-400 focus:outline-none text-white text-sm font-bold p-1 placeholder:text-gray-400 placeholder:text-lg"
          />
        </div>
      </div>

      <div className="my-8 w-full">
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Enter the subject:"
          className="w-full border-b border-b-gray-400 focus:outline-none text-white text-sm font-bold p-1 placeholder:text-gray-400 placeholder:text-lg"
        />
      </div>

      <div className="mb-10">
        <textarea
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your message:"
          className="w-full h-40 border-b border-b-gray-400 focus:outline-none text-white text-sm font-bold p-1 placeholder:text-gray-400 placeholder:text-lg"
        ></textarea>
      </div>

      <button
        onClick={handleSubmit}
        className="border-2 rounded-full border-white px-8 py-4 text-xl text-center text-white font-medium cursor-pointer"
      >
        Discuss project
      </button>
    </form>
  );
}

export default ContactForm;
