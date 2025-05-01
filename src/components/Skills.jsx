import { motion, MotionConfig } from "motion/react";
import { useState } from "react";
import Button from "./Button";

function Skills() {
  const [checkClick, setCheckClick] = useState(false);

  function handelShowContent() {
    setCheckClick((show) => !show);
  }

  return (
    <motion.div className="mt-40 mb-6">
      <h1 className="text-3xl font-medium mb-10">Skills</h1>

      <MotionConfig transition={{ duration: 1 }}>
        <motion.div className="mb-5" animate={checkClick ? "open" : "close"}>
          <div className="border-b-1 border-black">
            <div className="px-2 pt-4 pb-5 flex items-center justify-between">
              <div className="flex items-center gap-1">
                <p className="text-lg font-bold text-gray-400">01</p>
                <h1 className="text-2xl font-bold text-black">
                  Title amet consectetur adipisicing elit
                </h1>
              </div>
              <Button type={"transparent"} onClick={handelShowContent}>
                {checkClick ? "-" : "+"}
              </Button>
            </div>

            <motion.div
              variants={{
                open: {
                  hight: "auto",
                },
                close: {
                  hight: 0,
                },
              }}
              className="px-2 h-0 opacity-0"
            >
              <p className="text-lg text-gray-600">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Excepturi voluptatibus aliquid
              </p>

              <div className="pt-2">
                <ul>
                  <li className="flex items-center">
                    <span className="">.</span>
                    totam delectus minima, explicabo ad recusandae odit?
                    Voluptatum veniam
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </MotionConfig>
    </motion.div>
  );
}

export default Skills;
