import { useState } from "react";
import { motion, MotionConfig } from "motion/react";
import MenuNav from "./MenuNav";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div className="w-full h-0 sm:px-6 md:px-6 lg:px-8 xl:px-8 py-4 sticky top-0 z-30">
        <header className="flex items-center justify-between">
          <div className="border-b-2 border-blueprime pb-0.5">
            <a
              href="#"
              className="text-primary sm:text-lg md:text-xl lg:text-xl text-lg uppercase font-bold cursor-pointer"
            >
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
              className="relative w-14 h-14 rounded-full transition-all duration-300 hover:scale-75 cursor-pointer overflow-hidden group z-50"
              onClick={() => setShowMenu(!showMenu)}
              animate={showMenu ? "open" : "close"}
            >
              <div class="absolute inset-0 bg-primary rounded-full scale-0 group-hover:scale-200 group-hover: transition-transform duration-500 ease-out"></div>
              <div className="">
                <motion.span
                  style={{ top: "40%", left: "50%", x: "-50%", y: "-50%" }}
                  className={`absolute h-[1.5px] sm:w-6 md:w-7 lg:w-7 xl:w-7 ${
                    showMenu === true ? `bg-white` : `bg-white`
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
                  className={`absolute h-[1.5px] sm:w-6 md:w-7 lg:w-7 xl:w-7 ${
                    showMenu === true ? `bg-white` : `bg-white`
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

        <div className="absolute top-4 right-0 xl:right-8 lg:right-8 sm:right-6 md:right-6 overflow-hidden">
          <MenuNav showMenu={showMenu} />
        </div>
      </div>
    </>
  );
}
