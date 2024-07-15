import { motion } from "framer-motion";

export default function WelcomeThree() {
  return (
    <section className="w-full h-96 bg-white flex flex-col items-start">
      <div className="w-11/12 mx-auto py-8">
        <p className="w-10/12 md:w-7/12 lg:w-4/12 text-4xl font-kanit">
          Our Customers and Companies We have Worked With.
        </p>
        <motion.div
          animate={{ x: [0, 20, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="mt-4 flex gap-10 flex-wrap"
        >
          <motion.img className="h-20 md:h-32" src="dashen.png" alt="" />
          <motion.img className="h-20 md:h-32" src="pharma-logo.png" alt="" />

          <motion.img className="h-20 md:h-32" src="abyssinia.png" alt="" />
        </motion.div>
      </div>
    </section>
  );
}
