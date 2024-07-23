import Footer from "../welcome/Footer";
import ServiceTwo from "./ServiceTwo";

export default function Service() {
  return (
    <div className="w-full h-full">
      <div className="fixed z-[-1] top-0 w-full bg-primary flex items-center justify-center">
        <img
          className=" w-full h-screen object-cover drop-shadow-md opacity-80"
          src="service.webp"
          alt=""
        />
        <p className="absolute top-44 md:top-36 text-white text-3xl md:text-4xl font-kanit font-bold">
          Explore Our Services
        </p>
      </div>
      <ServiceTwo />
      <Footer />
    </div>
  );
}
