import Footer from "./Footer";
import Hero from "./Hero";
import WelcomeFour from "./WelcomeFour";
import WelcomeOne from "./WelcomeOne";
import WelcomeThree from "./WelcomeThree";
import WelcomeTwo from "./WelcomeTwo";

export default function Welcome() {
  return (
    <div className="relative z-10 h-full w-full">
      <img
        className="sticky top-0 w-full h-screen object-cover z-[-2]"
        src="ship-bg.jpg"
        alt=""
      />
      <Hero />
      <WelcomeOne />
      <div id="service">
        <WelcomeTwo />
      </div>
      <WelcomeThree />
      <div className="w-full h-10 backdrop-blur-sm"></div>
      <WelcomeFour />
      <div className="w-full h-10 backdrop-blur-sm"></div>
      <div className="w-full">
        <img
          className="h-44 md:h-full w-full object-cover md:object-contain"
          src="map.jpeg"
          alt=""
        />
      </div>
      <Footer />
    </div>
  );
}
