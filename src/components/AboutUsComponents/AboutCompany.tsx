import aboutCompanyImage from "@/assets/Carousel_image-02.jpg";

const AboutCompany = () => {
  return (
    <div className="mt-20 mb-10">
      <div className="grid lg:grid-cols-2 lg:mx-14 mx-8 gap-7">
        <div>
          <h1 className="text-3xl font-bold text-lime-500">
            SUPER TRUSTED & APPROVED SPORTS ACCESSORIES COMPANY OF BANGLADESH
          </h1>
          <p className="lg:mt-5 sm:mt-3 text-justify">
            At Sportify, we take pride in being a renowned Bangladeshi sport
            accessories brand, celebrated for our exceptional craftsmanship and
            dedication to providing cricketers with top-notch gear. Established
            with a passion for the sport, we have emerged as the most trusted
            and sought-after cricket bat manufacturer in the industry.
          </p>
        </div>
        <div>
          <img src={aboutCompanyImage} className="rounded-lg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;
