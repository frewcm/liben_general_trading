import { motion } from "framer-motion";
import { Link } from "react-scroll";

export default function Hero() {
  const parentVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,

      transition: {
        delay: 0.7,
        duration: 1,
      },
    },
  };

  const carVariants = {
    hidden: { opacity: 0, x: 300 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.7,
        duration: 1,
      },
    },
  };
  const cargoVariants = {
    hidden: { opacity: 0, x: 300 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.7,
        duration: 1.2,
      },
    },
  };
  const planeVariants = {
    hidden: { opacity: 0, x: 300 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.7,
        duration: 1.4,
      },
    },
  };
  const buttonVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.7,
        duration: 1,
      },
    },
  };

  const sloganVariants = {
    hidden: { opacity: 0, x: -300 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.5,
        duration: 1,
      },
    },
  };

  return (
    <section className="absolute top-0 w-full h-dvh  md:h-screen overflow-hidden">
      <motion.div
        variants={parentVariant}
        initial="hidden"
        animate="visible"
        className="md:py-16 mt-4 w-11/12 h-full mx-auto bg-primary/70 backdrop-blur-sm grid grid-cols-1 md:grid-cols-2 rounded-lg"
      >
        <div className="pb-4 px-4 text-white w-full h-full flex flex-col items-center justify-center md:items-start md:justify-end gap-4">
          <motion.p
            variants={sloganVariants}
            initial="hidden"
            animate="visible"
            className="md:w-10/12 mt-10  md:mt-16 text-3xl md:text-5xl font-kanit leading-snug tracking-wide text-center md:text-start"
          >
            Your Gateway to Efficient International Commerce Solutions
          </motion.p>
          <motion.button
            variants={buttonVariants}
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", duration: 0.3 }}
            initial="hidden"
            animate="visible"
            className="mt-2 px-3 py-1.5 md:px-4 md:py-2 cursor-pointer bg-secondary rounded"
          >
            <Link
              to="service"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Look Around.
            </Link>
          </motion.button>
        </div>
        <div className="relative w-full flex items-center  justify-center ">
          <motion.img
            variants={carVariants}
            initial="hidden"
            animate="visible"
            className="absolute bottom-10 md:bottom-0 w-64 md:w-[400px] "
            src="car.png"
            alt=""
          />
          <motion.img
            variants={cargoVariants}
            initial="hidden"
            animate="visible"
            className="absolute bottom-10 md:bottom-0 right-10 w-44 md:w-64"
            src="cargo.png"
            alt=""
          />
          <motion.img
            variants={planeVariants}
            initial="hidden"
            animate="visible"
            className="absolute bottom-48  md:bottom-56 w-64 md:w-80"
            src="plane.png"
            alt=""
          />
        </div>
      </motion.div>
    </section>
  );
}
