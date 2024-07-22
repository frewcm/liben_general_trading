import { Link } from "react-router-dom";
import { ServiceList } from "../../data/data";
import { motion } from "framer-motion";

export default function WelcomeTwo() {
  return (
    <section className="w-full  md:h-[1450px] lg:h-[1100px] flex flex-col items-center justify-center backdrop-blur-sm">
      <div className="mt-8 md:mt-4 flex flex-col items-center justify-center">
        <p className="text-secondary font-bold shadow-2xl">
          Take a look at what we offer
        </p>
        <p className="text-3xl md:text-4xl font-bold text-white shadow-2xl">
          Our Core Services
        </p>
      </div>
      <div className="w-11/12 mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  text-white font-kanit">
        {ServiceList.map((service, i) => {
          return (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
              viewport={{ once: true }}
              key={i}
              className="w-11/12 mx-auto lg:w-full my-4 bg-white/80 backdrop-blur-md min-h-[440px] rounded-lg shadow-2xl drop-shadow-2xl"
            >
              <img
                className="w-full h-56 object-cover rounded-t-lg"
                src={service.img}
                alt=""
              />
              <p className="mt-2 mx-4 text-secondary font-kanit text-2xl truncate">
                {service.title}
              </p>
              <p className="m-4  w-11/12 text-gray-400 text-lg lg:text-xl line-clamp-3">
                {service.description}
              </p>
              <Link
                to="/service"
                className="mt-4 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition ease-in-out mx-4 px-4 py-2 rounded-full border-2 border-primary text-secondary"
              >
                Learn more
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
