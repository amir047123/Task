import { ArrowRight, Heart } from "lucide-react";
import Rectangle from "../../assets/Categories/Rectangle 24.png";
import RecipeCard from "../AllRecipes/RecipeCard";

export default function SpecialDishes() {
  // Array containing numbers from 1 to 4
  const dishes = [1, 2, 3, 4];

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 mx-auto">
      <div className="flex flex-col gap-5">
        <div className="flex justify-between">
          <div>
            <div>
              <p className="uppercase text-red-600">Special Dishes</p>
            </div>

            <div>
              <h1 className="text-3xl font-bold">
                Standout Recipes <br /> From{" "}
                <span className="text-primary">Our Catagories</span>
              </h1>
            </div>
          </div>

          <div className="md:flex items-center gap-2 hover:scale-105 transition-all cursor-pointer">
            <p className="text-primary">See All</p>{" "}
            <ArrowRight className="text-primary" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {dishes.map((dishId) => (
            <RecipeCard key={dishId} dishId={dishId} />
          ))}
        </div>
      </div>
    </div>
  );
}
