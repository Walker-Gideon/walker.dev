import { motion } from "motion/react";
import { fadeIn } from "../motion/variants";

function ProjectCard({ title, date, imageUrl, link, summaryOne, summaryTwo }) {
  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
    >
      <div className="w-full h-full flex flex-col gap-4">
        <div className="w-full h-60 md:h-70 flex items-center justify-center rounded-3xl overflow-hidden transform transition-transform duration-500 hover:scale-105 border border-white">
          <div className="w-full h-full bg-blue opacity-50 absolute top-0 left-0 hover:opacity-0 transition-all duration-500 md:block small:hidden"></div>
          <img src={imageUrl} alt="Project image" className="w-full h-full" />
        </div>

        <div className="text-left pt-4 px-4 text-xl">
          <div className="flex items-center justify-between">
            <motion.p
              variants={fadeIn("right", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              className="text-blueprime font-bold text-xl"
            >
              {title}
            </motion.p>

            <motion.a
              variants={fadeIn("left", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary text-xl cursor-pointer transition-colors duration-300 hover:text-blue"
            >
              View <i class="bi bi-arrow-up-right-circle-fill"></i>
            </motion.a>
          </div>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
            className="text-primary text-lg"
          >
            {date}
          </motion.p>

          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
            className="text-sm"
          >
            <p className="py-2">{summaryOne}</p>
            <p>{summaryTwo}</p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
