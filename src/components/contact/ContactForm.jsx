import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "motion/react";
import { fadeIn } from "../motion/variants";

function ContactForm() {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    if (!name || !email || !subject || !message) {
      alert("Please fill the form correctly");
      return;
    }

    emailjs
      .sendForm("service_2qmjz56", "template_dijwu0q", form.current, {
        publicKey: "JLvMDGyBw66-MY65g",
      })
      .then(
        () => {
          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
          setSuccess("Message Sent!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <motion.p
        variants={fadeIn("down", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-blueprime text-xl"
      >
        {success}
      </motion.p>
      <form ref={form} onSubmit={sendEmail} className="w-full">
        <motion.div
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
        >
          <div className="midmedium:flex midmedium:gap-5">
            <div className="w-full">
              <input
                type="text"
                name="from_name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full name"
                className="w-full border-b border-b-gray-400 focus:outline-none text-white text-sm small:text-lg sm:text-xl font-bold p-1 placeholder:text-gray-400 placeholder:text-lg"
              />
            </div>

            <div className="w-full small:py-10 midmedium:py-0">
              <input
                type="email"
                name="from_email"
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
              name="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Enter the subject:"
              className="w-full border-b border-b-gray-400 focus:outline-none text-white text-sm small:text-lg sm:text-xl font-bold p-1 placeholder:text-gray-400 placeholder:text-lg"
            />
          </div>

          <div className="mb-10">
            <textarea
              type="text"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter your message:"
              rows="4"
              cols="50"
              className="w-full border-b border-b-gray-400 focus:outline-none text-white text-sm small:text-lg sm:text-xl font-bold p-1 placeholder:text-gray-400 placeholder:text-lg"
            ></textarea>
          </div>
        </motion.div>

        <motion.button
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
          type="submit"
          className="w-full border-2 rounded-full border-primary px-8 py-4 text-xl text-center text-white transition-colors duration-300 hover:bg-primary font-medium cursor-pointer`"
        >
          Send
        </motion.button>
      </form>
    </div>
  );
}

export default ContactForm;
