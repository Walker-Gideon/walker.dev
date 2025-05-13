import HobbiesBtn from "./HobbiesBtn";

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
      height: 55,
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
      className="border-b-1 border-blue overflow-hidden"
    >
      <div className="px-2 pt-4 pb-3 flex items-center justify-between">
        <div>
          <p className="text-2xl sm:text-3xl medium:text-4xl md:text-3xl font-bold text-blueprime">
            <span className="text-lg small:text-2xl medium:text-xl font-bold text-gray-300">
              0{num}
            </span>{" "}
            {title}
          </p>
        </div>

        <HobbiesBtn onClick={onClick} check={check} />
      </div>

      <div className="small:py-2 small:px-6 medium:px-4 md:px-10">
        <p className="small:text-xl sm:text-2xl medium:text-3xl text-gray-200 font-medium">
          {subTitle}
        </p>

        <div className="small:py-3">
          <ul className="w-full text-lg small:text-lg sm:text-xl medium:text-2xl text-gray-300">
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
