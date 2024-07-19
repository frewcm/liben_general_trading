export default function WelcomeOne() {
  return (
    <section className="mt-24 w-full h-[1100px] md:h-[900px] bg-white font-kanit">
      <div className="w-11/12 mx-auto md:py-10 h-full flex flex-col items-center">
        <p className="text-secondary my-2 mt-6">--welcome--</p>
        <p className="text-4xl text-primary">What We Do Here</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-1">
          <div className="w-11/12 mx-auto mt-4 flex flex-col text-lg">
            <p className="text-center md:text-start">
              At Liben General Trading Company, we excel in a broad spectrum of
              import and export activities, catering to diverse market needs. We
              facilitate the global distribution of BYD electric vehicles,
              promoting sustainable and eco-friendly transportation solutions.
              By championing the adoption of electric vehicles, we contribute to
              the shift towards greener transportation options.
            </p>
            <p className="mt-4 text-center md:text-start">
              Our extensive portfolio also includes the trade of high-quality
              medicines and medical equipment, ensuring vital healthcare
              supplies reach those in need. Additionally, we specialize in the
              export of black cumin, a commodity renowned for its health
              benefits and culinary uses. We are committed to providing
              high-quality products and making a positive impact on global
              markets.
            </p>
          </div>
          <div className="mt-10 lg:mt-4 flex items-center justify-center">
            <img
              className="w-[500px] lg:w-[550px] object-cover object-right"
              src="global.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
