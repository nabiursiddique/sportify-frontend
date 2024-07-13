import { Link } from "react-router-dom";
import cricket from "@/assets/cricket.jpg";
import football from "@/assets/Football.jpg";
import badminton from "@/assets/Badminton.jpg";

const Categories = () => {
  const categories = [
    {
      name: "Cricket",
      path: "/all-products?category=cricket",
      bgImage: `url(${cricket})`,
    },
    {
      name: "Football",
      path: "/all-products?category=football",
      bgImage: `url(${football})`,
    },
    {
      name: "Badminton",
      path: "/all-products?category=badminton",
      bgImage: `url(${badminton})`,
    },
  ];
  return (
    <div>
      <h1 className="text-5xl pt-5 pb-2 text-center font-extrabold text-lime-500">
        Categories
      </h1>

      <div className="grid lg:grid-cols-3 lg:gap-10 gap-5  mt-5 p-5 lg:my-10">
        {categories.map((category, ind) => (
          <Link key={ind} to={`${category.path}`}>
            <div
              className="relative rounded-sm  h-[200px] bg-cover bg-center shadow-md shadow-neutral-600 hover:scale-105 transition-all"
              style={{ backgroundImage: category?.bgImage }}
            >
              <div className="absolute inset-0 bg-black opacity-30"></div>
              <div className="flex items-center translate-x-1/3 h-full z-20 absolute">
                <h5 className="text-center font-extrabold text-2xl  font-sans text-white">
                  {category.name}
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
