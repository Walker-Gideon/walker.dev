import { motion, MotionConfig } from "motion/react";

function MenuButton({ showMenu, setShowMenu }) {
  return (
    <MotionConfig
      transition={{
        duration: 0.4,
        ease: "easeInOut",
      }}
    >
      <motion.button
        className="relative w-14 h-14 rounded-full transition-all duration-300 hover:scale-75 cursor-pointer overflow-hidden group z-50"
        onClick={() => setShowMenu(!showMenu)}
        animate={showMenu ? "open" : "close"}
      >
        <div class="absolute inset-0 bg-primary rounded-full scale-0 group-hover:scale-200 group-hover: transition-transform duration-500 ease-out"></div>
        <div className="">
          <motion.span
            style={{ top: "40%", left: "50%", x: "-50%", y: "-50%" }}
            className="absolute h-[2px] w-6 bg-white"
            variants={{
              open: {
                rotate: ["0deg", "0deg", "45deg"],
                top: ["40%", "50%", "50%"],
              },
              close: {
                rotate: ["45deg", "0deg", "0deg"],
                top: ["50%", "50%", "40%"],
              },
            }}
          />
          <motion.span
            style={{ top: "60%", left: "50%", x: "-50%", y: "-50%" }}
            className="absolute h-[2px] w-6 bg-white"
            variants={{
              open: {
                rotate: ["0deg", "0deg", "-45deg"],
                top: ["60%", "50%", "50%"],
              },
              close: {
                rotate: ["-45deg", "0deg", "0deg"],
                top: ["50%", "50%", "60%"],
              },
            }}
          />
        </div>
      </motion.button>
    </MotionConfig>
  );
}

export default MenuButton;
