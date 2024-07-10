import { Link } from "react-router-dom";
import sliderImage from "@/assets/Carousel_image-01.jpg";

const Categories = () => {
  const categories = ["Category-01", "Category-02", "Category-03"];
  return (
    <div>
      <h1 className="text-5xl pt-5 pb-2 text-center font-extrabold">
        Categories
      </h1>

      <div className="grid lg:grid-cols-3 lg:gap-10 gap-5  mt-5 p-5 lg:my-10">
        {categories.map((category, ind) => (
          <Link key={ind} to="/category">
            <div
              className="relative rounded-sm  h-[200px] bg-cover bg-center shadow-md shadow-neutral-600 hover:scale-105 transition-all"
              style={{ backgroundImage: `url(${sliderImage})` }}
            >
              <div className="absolute z-20 top-1/2 left-20 transform -translate-x-1/2 -translate-y-1/2">
                <h5 className="text-center font-bold text-white text-2xl  font-sans">
                  {category}
                </h5>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;