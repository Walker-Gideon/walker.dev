import { motion } from "motion/react";
import { fadeIn } from "../motion/variants";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";

function Info() {
  return (
    <motion.div
      variants={fadeIn("left", 0.4)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="small:mt-1 "
    >
      <div className="flex items-center gap-2 text-gray-400">
        <MdOutlineMailOutline className="font-bold" />
        <p className="text-4xl text-white font-medium">
          gideonawortwe3@gmail.com
        </p>
      </div>

      <div className="flex items-center gap-2 text-gray-400">
        <MdOutlineLocalPhone className="font-bold" />
        <p className="py-3 small:py-4 text-xl font-medium">+233 248 232 548</p>
      </div>

      <div className="flex items-center gap-2 text-gray-400">
        <MdOutlineLocationOn className="font-bold" />
        <p className="text-xl font-medium">Accra, Ghana</p>
      </div>
    </motion.div>
  );
}

export default Info;
