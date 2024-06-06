import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiLaravel } from "react-icons/si";
import { FaNodeJs, FaPhp, FaWordpress, FaDatabase } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { animate, motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});
const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl "
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(1)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-cyan-500 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-500" />
        </motion.div>

        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-green-500 p-4"
        >
          <FaNodeJs className="text-7xl text-green-500" />
        </motion.div>

        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-neutral-200 p-4"
        >
          <FaPhp className="text-7xl text-sky-400" />
        </motion.div>

        <motion.div
          variants={iconVariants(1.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-red-800 p-4"
        >
          <SiLaravel className="text-7xl text-red-800" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-white-400 p-4"
        >
          <FaWordpress className="text-7xl text-black-800" />
        </motion.div>

        <motion.div
          variants={iconVariants(1.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-green-800 p-4"
        >
          <SiMongodb className="text-7xl text-green-800" />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-cyan-800 p-4"
        >
          <BiLogoPostgresql className="text-7xl text-cyan-400" />
        </motion.div>

        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-sky-800 p-4"
        >
          <FaDatabase className="text-7xl text-green-800" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
