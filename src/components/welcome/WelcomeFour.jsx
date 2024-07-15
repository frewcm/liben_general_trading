export default function WelcomeFour() {
  return (
    <section className="relative w-full bg-primary h-screen ">
      <img
        className="absolute h-full w-full opacity-40 object-cover"
        src="workers.jpg"
        alt=""
      />
      <div className="w-11/12 mx-auto h-full flex flex-col justify-center gap-4 text-white">
        <div className="mt-10 w-full md:w-2/3 lg:w-1/2 h-60 rounded flex flex-col p-10">
          <p className="text-3xl font-kanit font-bold">Who we are...</p>
          <p className="text-lg font-kanit py-2">
            We are Liben General Trading, a dynamic company specializing in the
            import and export of electric vehicles, healthcare supplies, black
            cumin, construction machinery rentals, and mining resources. Our
            commitment is to quality, innovation, and fostering global trade
            partnerships.
          </p>
        </div>
        <div className="mt-10 w-full md:w-2/3 lg:w-1/2 h-60  rounded backdrop-blur-xl flex flex-col p-10">
          <p className="text-3xl font-kanit font-bold">Our Mission.</p>
          <p className="text-lg font-kanit py-2">
            Committed to excellence in global trade, delivering sustainable
            solutions, superior products, and reliable services worldwid
          </p>
        </div>
      </div>
    </section>
  );
}
