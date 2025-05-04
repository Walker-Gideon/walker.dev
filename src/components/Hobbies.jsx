import { motion } from "motion/react";

function Hobbies({
  onClick,
  check,
  num,
  title,
  subTitle,
  firstText,
  secText,
  thirdText,
}) {
  const slideHeightVariants = {
    initial: {
      height: 50,
    },
    expanded: {
      height: "28vh",
    },
  };

  return (
    <motion.div
      variants={slideHeightVariants}
      initial="initial"
      animate={check ? "expanded" : "initial"}
      transition={{
        duration: 0.8,
        ease: "easeOut",
        height: { duration: 0.4, ease: "easeOut", delay: 0.2 },
      }}
      className="border-b-1 border-black overflow-hidden"
    >
      <div className="px-2 pt-4 pb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <p className="text-lg font-bold text-gray-400">0{num}</p>
          <h1 className="text-2xl font-bold text-black">{title}</h1>
        </div>

        <motion.button
          className="relative text-3xl text-black cursor-pointer px-2 py-1 group overflow-hidden:"
          onClick={onClick}
          animate={check ? "open" : "close"}
        >
          <motion.span
            style={{ top: "50%", left: "50%", x: "-50%", y: "-50%" }}
            className={`absolute h-1 w-4 bg-black`}
            variants={{
              open: {
                rotate: ["45deg", "0deg", "0deg"],
                top: ["40%", "50%", "50%"],
              },
              close: {
                rotate: ["0deg", "0deg", "90deg"],
                top: ["50%", "50%", "50%"],
              },
            }}
          />
          <motion.span
            style={{ top: "50%", left: "50%", x: "-50%", y: "-50%" }}
            className={`absolute h-1 w-4 bg-black`}
            variants={{
              open: {
                rotate: ["-45deg", "0deg", "0deg"],
                top: ["60%", "50%", "50%"],
              },
              close: {
                rotate: ["0deg", "0deg", "0deg"],
                top: ["50%", "50%", "50%"],
              },
            }}
          />
        </motion.button>
      </div>

      <div className="px-10">
        <p className="text-xl text-[#333] font-medium">{subTitle}</p>

        <div className="py-2">
          <ul className="text-lg">
            <li className="flex items-center">
              <span className="">.</span>
              {firstText}
            </li>
            <li className="flex items-center">
              <span className="">.</span>
              {secText}
            </li>
            <li className="flex items-center">
              <span className="">.</span>
              {thirdText}
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default Hobbies;
