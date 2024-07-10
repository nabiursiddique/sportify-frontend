import Categories from "@/components/HomeComponents/CategoriesSection/Categories";
import FeaturedSection from "@/components/HomeComponents/FeaturedSection/FeaturedSection";
import HeroSection from "@/components/HomeComponents/HeroSection/HeroSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedSection />
      <Categories />
    </div>
  );
};

export default Home;
