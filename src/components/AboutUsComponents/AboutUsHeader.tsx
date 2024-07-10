import aboutUsBannerImage from "@/assets/about_us_bannar.jpg";

const AboutUsHeader = () => {
  return (
    <div className="relative w-full lg:h-[70vh] h-[40vh] flex justify-center items-center">
      <div
        className="absolute inset-0 bg-cover bg-start"
        style={{ backgroundImage: `url(${aboutUsBannerImage})` }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <h1 className="absolute lg:text-8xl text-4xl font-sans font-extrabold text-lime-400 mt-2">
        About Us
      </h1>
    </div>
  );
};

export default AboutUsHeader;
