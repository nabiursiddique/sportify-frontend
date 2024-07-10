import Categories from "@/components/HomeComponents/CategoriesSection/Categories";
import ContactUsSection from "@/components/HomeComponents/ContactUsSection/ContactUsSection";
import FeaturedSection from "@/components/HomeComponents/FeaturedSection/FeaturedSection";
import HeroSection from "@/components/HomeComponents/HeroSection/HeroSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedSection />
      <Categories />
      <ContactUsSection />
    </div>
  );
};

export default Home;
