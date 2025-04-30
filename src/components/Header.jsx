import { useState } from "react";
import { motion, MotionConfig } from "motion/react";
import MenuNav from "./MenuNav";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="w-full h-25 px-8 py-4 sticky top-0 z-50">
      <header className="flex items-center justify-between">
        <div className="border-b-2 border-black pb-0.5">
          <a href="#" className="text-black text-2xl font-bold cursor-pointer">
            Wɑɭkɜɾ.dev
          </a>
        </div>

        <MotionConfig
          transition={{
            duration: 0.4,
            ease: "easeInOut",
          }}
        >
          <motion.button
            className="relative w-14 h-14 rounded-full transition-colors cursor-pointer overflow-hidden group z-50"
            onClick={() => setShowMenu(!showMenu)}
            animate={showMenu ? "open" : "close"}
          >
            <div class="absolute inset-0 bg-black rounded-full scale-0 group-hover:scale-150 group-hover: transition-transform duration-500 ease-out"></div>
            <div className="">
              <motion.span
                style={{ top: "40%", left: "50%", x: "-50%", y: "-50%" }}
                className={`absolute h-1 w-9 ${
                  showMenu === true ? `bg-gray-400` : `bg-gray-400`
                }`}
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
                className={`absolute h-1 w-9 ${
                  showMenu === true ? `bg-gray-400` : `bg-gray-400`
                }`}
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
      </header>

      <div className="absolute top-4 right-8 overflow-hidden">
        <MenuNav showMenu={showMenu} />
      </div>
    </div>
  );
}
