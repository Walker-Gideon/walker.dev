import { motion, MotionConfig } from "motion/react";

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
        <button
          className="text-3xl text-black cursor-pointer px-2 py-1"
          onClick={onClick}
        >
          {check ? "-" : "+"}
        </button>
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
