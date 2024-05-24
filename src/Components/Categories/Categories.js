import { ChevronRight } from "lucide-react";
import CategoriesImage1 from "../../assets/Categories/Rice.png";
import CategoriesImage2 from "../../assets/Categories/fish.png";
import CategoriesImage3 from "../../assets/Categories/meat.png";

export default function Categories() {
  return (
    <div className=" mt-10">
      <div className=" text-center">
        <h1 className=" text-red-600 uppercase ">Favorites</h1>
        <h1 className=" text-3xl font-bold">Popular <span className=" text-primary">Catagories</span></h1>
      </div>

      <div className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-6 py-10 px-4">
        <div className="flex flex-col justify-center items-center bg-white px-4 py-5  rounded-2xl shadow-md border w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <div className="bg-customCardBg p-2 rounded-full">
            <img src={CategoriesImage1} alt="Category 1" />
          </div>
          <div className="text-center mt-4">
            <h1 className="font-bold cursor-pointer transition-all hover:scale-105">Rice Dishes</h1>
            <p>(86 Dishes)</p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center bg-white px-4 py-5 rounded-2xl shadow-md border w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <div className="bg-customCardBg p-2 rounded-full">
            <img src={CategoriesImage2} alt="Category 2" />
          </div>
          <div className="text-center mt-4">
            <h1 className="font-bold cursor-pointer transition-all hover:scale-105">Fish Dishes</h1>
            <p>(86 Dishes)</p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center bg-white px-4 py-5 rounded-2xl shadow-md border w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <div className="bg-customCardBg p-2 rounded-full">
            <img src={CategoriesImage3} alt="Category 3" />
          </div>
          <div className="text-center mt-4">
            <h1 className="font-bold cursor-pointer transition-all hover:scale-105">Meat Dishes</h1>
            <p>(86 Dishes)</p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center bg-white px-4 py-5 rounded-2xl shadow-md border w-full sm:w-1/2 md:w-1/3 lg:w-1/4 ">
          <div className="bg-customCardBg p-2 rounded-full cursor-pointer transition-all hover:rotate-90">
            <ChevronRight size={100} />
          </div>
          <div className="text-center mt-4">
            <h1 className="font-bold cursor-pointer transition-all hover:scale-105">Browse All</h1>
            <p className="">(10 Categories)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
