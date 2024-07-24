import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Nav from "./components/nav/Nav";
import Service from "./components/ourservice/Service";
import ThankYou from "./components/ThankYou";
import Welcome from "./components/welcome/Welcome";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <main className="flex flex-col items-center">
      <Nav />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </main>
  );
}

export default App;
