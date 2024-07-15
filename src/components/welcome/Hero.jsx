import { motion } from "framer-motion";

export default function Hero() {
  const parentVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,

      transition: {
        delay: 0.5,
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
        delay: 0.5,
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
        delay: 0.5,
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
        delay: 0.5,
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
        delay: 0.5,
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
    <section className="absolute top-0 w-full h-screen overflow-hidden">
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
            className="md:w-10/12 my-2 text-4xl md:text-5xl font-kanit leading-snug tracking-wide text-center md:text-start"
          >
            Your Gateway to Efficient International Commerce Solutions
          </motion.p>
          <motion.button
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            className="px-4 py-2 bg-secondary rounded"
          >
            Look Around.
          </motion.button>
        </div>
        <div className="relative">
          <motion.img
            variants={carVariants}
            initial="hidden"
            animate="visible"
            className="absolute bottom-0 left-0 w-80 md:w-[400px] "
            src="car.png"
            alt=""
          />
          <motion.img
            variants={cargoVariants}
            initial="hidden"
            animate="visible"
            className="absolute bottom-0 right-0 w-60 md:w-72"
            src="cargo.png"
            alt=""
          />
          <motion.img
            variants={planeVariants}
            initial="hidden"
            animate="visible"
            className="absolute bottom-[180px] left-14 md:bottom-56 w-80 md:w-96"
            src="plane.png"
            alt=""
          />
        </div>
      </motion.div>
    </section>
  );
}
