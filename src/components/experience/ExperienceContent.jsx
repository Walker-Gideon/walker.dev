import { motion } from "motion/react";
import { fadeIn } from "../motion/variants";

function ExperienceContent({ title, subtitle, date, text, index }) {
  return (
    <motion.div
      variants={fadeIn("right", `0.${index}`)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="w-full h-full border-2 border-dashed rounded-xl p-6 border-primary"
    >
      <div className="font-medium">
        <h1 className="text-lg font-bold text-blueprime">{title}</h1>
        <h2 className=" text-[1.1rem] font-medium text-primary py-0.5">
          {subtitle}
        </h2>
        <p className="text-gray-400 text-sm">{date}</p>
      </div>

      <div className="mt-5 midmedium:w-">
        {text.map((text, index) => (
          <ul key={index} className="list-disc pl-5 text-sm">
            <li className="py-1">{text}</li>
          </ul>
        ))}
      </div>
    </motion.div>
  );
}

export default ExperienceContent;
