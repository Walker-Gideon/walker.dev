import { useState } from "react";

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

      <div className="my-8 w-full">
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
          className="w-full h-40 border-b border-b-gray-400 focus:outline-none text-white text-sm small:text-lg sm:text-xl font-bold p-1 placeholder:text-gray-400 placeholder:text-lg"
        ></textarea>
      </div>

      <div className="small:flex small:flex-col md:flex-row">
        <div></div>
        <button
          onClick={handleSubmit}
          className="border-2 rounded-full border-white px-8 py-4 text-xl text-center text-white font-medium cursor-pointer"
        >
          Discuss project
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
