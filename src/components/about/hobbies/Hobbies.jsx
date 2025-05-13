import { motion } from "motion/react";
import HobbiesBtn from "./HobbiesBtn";
import HobbiesTitle from "./HobbiesTitle";
import SubPara from "./SubPara";

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
        <HobbiesTitle num={num} title={title} />
        <HobbiesBtn onClick={onClick} check={check} />
      </div>

      <SubPara
        subTitle={subTitle}
        firstText={firstText}
        secText={secText}
        thirdText={thirdText}
      />
    </motion.div>
  );
}

export default Hobbies;
