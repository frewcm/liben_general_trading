import Footer from "../welcome/Footer";
import AboutOne from "./AboutOne";

export default function About() {
  return (
    <div className="w-full h-full">
      <div className="fixed z-[-1] top-0 w-full bg-primary flex items-center justify-center">
        <img
          className=" w-full h-screen object-cover drop-shadow-md opacity-80"
          src="service.jpg"
          alt=""
        />
        <p className="absolute top-44 md:top-36 text-white text-3xl md:text-4xl font-kanit font-bold">
          About Us
        </p>
      </div>
      <AboutOne />
      <Footer />
    </div>
  );
}
