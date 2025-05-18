import { motion } from "motion/react";
import { fadeIn } from "../motion/variants";

function ExperienceContent({ title, subtitle, date, text, index }) {
  return (
    <motion.div
      variants={fadeIn("right", `0.${index}`)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="midmedium:w-[20rem] midmedium:h-[28.5rem] small:w-full small:h-auto border-2 border-dashed rounded-xl small:p-8 md:p-4 border-primary"
    >
      <div className="font-medium text-lg">
        <h1 className="font-bold text-blueprime">{title}</h1>
        <h2 className="font-medium text-primary py-0.5">{subtitle}</h2>
        <p className="text-gray-400">{date}</p>
      </div>

      <div className="mt-5">
        {text.map((text, index) => (
          <ul key={index} className="list-disc pl-5">
            <li className="py-1">{text}</li>
          </ul>
        ))}
      </div>
    </motion.div>
  );
}

export default ExperienceContent;
