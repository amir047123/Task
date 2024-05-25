import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

// Assuming you have imported your category images correctly
import CategoriesImage1 from "../../assets/Categories/Rice.png";
import CategoriesImage2 from "../../assets/Categories/fish.png";
import CategoriesImage3 from "../../assets/Categories/meat.png";

export default function Categories() {
  const [categoriesData, setCategoriesData] = useState({
    rice: [],
    fish: [],
    meat: [],
  });

  useEffect(() => {
    // Fetch data for Rice Dishes
    fetch("http://localhost:5000/api/v1/recipes/specific/?fieldName=category&fieldValue=Rice Dishes")
      .then((response) => response.json())
      .then((data) => {
        setCategoriesData((prevData) => ({
          ...prevData,
          rice: data.data,
        }));
      })
      .catch((error) => {
        console.error("Error fetching Rice Dishes data:", error);
      });

    // Fetch data for Fish Dishes
    fetch("http://localhost:5000/api/v1/recipes/specific/?fieldName=category&fieldValue=Fish Dishes")
      .then((response) => response.json())
      .then((data) => {
        setCategoriesData((prevData) => ({
          ...prevData,
          fish: data.data,
        }));
      })
      .catch((error) => {
        console.error("Error fetching Fish Dishes data:", error);
      });

    // Fetch data for Meat Dishes
    fetch("http://localhost:5000/api/v1/recipes/specific/?fieldName=category&fieldValue=Meat Dishes")
      .then((response) => response.json())
      .then((data) => {
        setCategoriesData((prevData) => ({
          ...prevData,
          meat: data.data,
        }));
      })
      .catch((error) => {
        console.error("Error fetching Meat Dishes data:", error);
      });
  }, []);

  return (
    <div className=" mt-10">
      <div className=" text-center">
        <h1 className=" text-red-600 uppercase ">Favorites</h1>
        <h1 className=" text-3xl font-bold">
          Popular <span className=" text-primary">Categories</span>
        </h1>
      </div>

      <div className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-6 py-10 px-4">
        <CategoryCard image={CategoriesImage1} title="Rice Dishes" count={categoriesData.rice.length} />
        <CategoryCard image={CategoriesImage2} title="Fish Dishes" count={categoriesData.fish.length} />
        <CategoryCard image={CategoriesImage3} title="Meat Dishes" count={categoriesData.meat.length} />
        {/* Add more CategoryCards if needed */}
      </div>
    </div>
  );
}

function CategoryCard({ image, title, count }) {
  return (
    <div className="flex flex-col justify-center items-center bg-white px-4 py-5 rounded-2xl shadow-md border w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
      <div className="bg-customCardBg p-2 rounded-full">
        <img src={image} alt={title} />
      </div>
      <div className="text-center mt-4">
        <h1 className="font-bold cursor-pointer transition-all hover:scale-105">{title}</h1>
        <CountUp end={count} duration={20} />
      </div>
    </div>
  );
}
