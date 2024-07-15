import { useState } from "react";
import { RiMenu4Line } from "react-icons/ri";
import { RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  easeInOut,
} from "framer-motion";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const navVariants = {
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

  const content = (
    <motion.ul
      initial={{ y: -82 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
      className="h-[480px] py-24 bg-white text-gray-950 fixed z-50 top-24 w-11/12 flex flex-col items-center justify-end gap-8 text-xl"
    >
      <li>
        <Link onClick={() => setOpen(false)} to="/">
          Welcome
        </Link>
      </li>
      <li>
        <Link onClick={() => setOpen(false)} to="/service">
          Services
        </Link>
      </li>

      <li>
        <Link onClick={() => setOpen(false)} to="/about">
          About
        </Link>
      </li>
      <li>
        <Link onClick={() => setOpen(false)} to="/contact">
          Contact
        </Link>
      </li>
    </motion.ul>
  );

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: -100 },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.45, ease: "easeInOut" }}
        className={`z-50 fixed top-4 w-11/12 mx-auto h-[90px] md:h-20 bg-white text-gray-900 rounded-t ${
          open ? "rounded-none" : "rounded-b"
        } font-kanit  transition ease-in-out`}
      >
        <div className="w-full h-full px-8 flex items-center justify-between">
          <div className="">
            <img className="w-20 " src="liben.png" alt="" />
          </div>
          <ul className="hidden h-full w-full lg:flex items-center justify-end gap-12 text-lg">
            <li>
              <Link to="/">Welcome</Link>
            </li>
            <li>
              <Link to="/service">Services</Link>
            </li>

            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          {!open ? (
            <RiMenu4Line
              onClick={() => setOpen(!open)}
              className="block lg:hidden"
              size={30}
            />
          ) : (
            <RiCloseLine
              onClick={() => setOpen(!open)}
              className="block lg:hidden"
              size={30}
            />
          )}
        </div>
      </motion.nav>
      {open && content}
    </>
  );
}
