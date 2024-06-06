import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";

const containter = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

import ProfilePic from "../assets/me.jpeg";
const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start"></div>
          <motion.h2
            variants={containter(0.5)}
            initial="hidden"
            animate="visible"
            className="pb-16 text-6xl front-thin tracking-tight lg:mt-16 lg:text-8xl"
          >
            Htet Htet Aung
          </motion.h2>
          <motion.span
            variants={containter(1)}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-300 bg-clip-text text-4xl tracking-tight text-transparent"
          >
            Web Developer|Software Engineer
          </motion.span>
          <motion.p
            variants={containter(2)}
            initial="hidden"
            animate="visible"
            className="my-2 max-w-xl py-6 front-light tracking-tighter "
          >
            {HERO_CONTENT}
          </motion.p>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center"></div>
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            src={ProfilePic}
            alt="Profile Image"
            style={{ width: 300, borderRadius: 15 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
