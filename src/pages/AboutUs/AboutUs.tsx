import AboutCompany from "@/components/AboutUsComponents/AboutCompany";
import AboutUsHeader from "@/components/AboutUsComponents/AboutUsHeader";
import OurLocation from "@/components/AboutUsComponents/OurLocation";
import OurTeam from "@/components/AboutUsComponents/OurTeam";

const AboutUs = () => {
  return (
    <div>
      <AboutUsHeader />
      <AboutCompany />
      <OurTeam />
      <OurLocation />
    </div>
  );
};

export default AboutUs;
