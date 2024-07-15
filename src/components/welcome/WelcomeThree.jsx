export default function WelcomeThree() {
  return (
    <section className="w-full h-[980px] md:h-[600px] lg:h-screen bg-white flex flex-col items-start">
      <div className="w-11/12 mx-auto py-8">
        <p className="w-10/12 md:w-7/12 lg:w-4/12 text-4xl font-kanit">
          Our Customers and Companies We have Worked With.
        </p>
      </div>
      <div className="w-11/12 mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12">
        <img className="h-32" src="tesla-logo.png" alt="" />
        <img className="h-32" src="tesla-logo.png" alt="" />
        <img className="h-32" src="tesla-logo.png" alt="" />
        <img className="h-32" src="tesla-logo.png" alt="" />
      </div>
      <div className="mt-16 w-11/12 mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5  gap-12">
        <img className="h-32" src="tesla-logo.png" alt="" />
        <img className="h-32" src="tesla-logo.png" alt="" />
        <img className="h-32" src="tesla-logo.png" alt="" />
        <img className="h-32" src="tesla-logo.png" alt="" />
      </div>
    </section>
  );
}
