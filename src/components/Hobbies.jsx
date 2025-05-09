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
      height: 60,
    },
    expanded: {
      height: "40%",
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
        <div>
          <p className="text-2xl sm:text-3xl medium:text-4xl md:text-3xl font-bold text-black">
            <span className="text-lg small:text-2xl medium:text-xl font-bold text-gray-400">
              0{num}
            </span>{" "}
            {title}
          </p>
        </div>

        <motion.button
          className="relative text-3xl text-black cursor-pointer px-2 py-1 group overflow-hidden: small:hidden medium:block"
          onClick={onClick}
          animate={check ? "open" : "close"}
        >
          <motion.span
            style={{ top: "50%", left: "50%", x: "-50%", y: "-50%" }}
            className={`absolute h-0.5 medium:h-[2px] md:h-0.5 w-4 medium:w-4 bg-black`}
            variants={{
              open: {
                rotate: ["45mediumeg", "0deg", "0deg"],
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
            className={`absolute h-0.5 medium:h-[2px] md:h-0.5 w-4 medium:w-4 bg-black`}
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

      <div className="small:py-2 small:px-6 medium:px-4 md:px-10">
        <p className="small:text-xl sm:text-2xl medium:text-3xl text-lighter font-medium">
          {subTitle}
        </p>

        <div className="small:py-3">
          <ul className="w-full text-lg small:text-lg sm:text-xl medium:text-2xl text-light">
            <li className="flex md:items-center">
              <span className="">.</span>
              {firstText}
            </li>
            <li className="flex md:items-center">
              <span className="">.</span>
              {secText}
            </li>
            <li className="flex md:items-center">
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
