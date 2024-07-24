import { Link } from "react-router-dom";
import { IoReturnDownBackSharp } from "react-icons/io5";

export default function ThankYou() {
  return (
    <section className="w-full h-screen flex flex-col items-center justify-center gap-4">
      <p className="w-6/12 mx-auto text-3xl font-kanit text-primary text-center">
        Thank you for connecting with us,We will contact you soon.
      </p>
      <Link
        className="p-3 rounded-full border-2 border-secondary  hover:bg-secondary/15 transition delay-200 ease-in-out"
        to="/"
      >
        <IoReturnDownBackSharp className="text-secondary" size={25} />
      </Link>
    </section>
  );
}
