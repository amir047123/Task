import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import axios from "axios";
import RecipeCard from "../AllRecipes/RecipeCard";
import { Link } from "react-router-dom";

export default function SpecialDishes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/v1/recipes/getRecipes"
        );
        setRecipes(response.data.data);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();
  }, []);

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
                <span className="text-primary">Our Categories</span>
              </h1>
            </div>
          </div>
          <Link to="recipe" className="md:flex items-center gap-2 hover:scale-105 transition-all cursor-pointer">
        
              <p className="text-primary">See All</p>
              <ArrowRight className="text-primary" />
          
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe._id} recipe={recipe} />
          ))}
        </div>
      </div>
    </div>
  );
}
