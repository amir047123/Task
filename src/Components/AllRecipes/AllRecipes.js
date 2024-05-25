import React, { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard";
import axios from "axios";

export default function AllRecipes() {
  const [recipes, setRecipes] = useState([]);
  const [categories, setCategories] = useState([]); // State to store categories
  const [selectedCategory, setSelectedCategory] = useState(""); // State to store the selected category

  useEffect(() => {
    // Fetch recipes data from your backend API
    const fetchRecipes = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/v1/recipes/getRecipes");
        const fetchedRecipes = response.data.data;

        // Extract categories from recipes and remove empty or undefined categories
        const allCategories = fetchedRecipes
          .map(recipe => recipe.category)
          .filter(category => category); // filter out empty or undefined categories

        // Remove duplicate categories
        const uniqueCategories = [...new Set(allCategories)];
        setCategories(uniqueCategories);

        setRecipes(fetchedRecipes);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category); // Update selected category
  };

  // Count the number of recipes for each category
  const categoryCounts = {};
  recipes.forEach((recipe) => {
    if (!categoryCounts[recipe.category]) {
      categoryCounts[recipe.category] = 1;
    } else {
      categoryCounts[recipe.category]++;
    }
  });

  return (
    <div className="container mx-auto py-10 px-4 lg:px-0">
      <h1 className="text-2xl font-bold">All Recipes</h1>
      {/* Search input */}
      {/* ... */}

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {/* Sidebar for categories (visible on larger screens) */}
        <div
          className="lg:block lg:col-span-1 bg-white rounded-lg p-4"
          style={{ height: "calc(100vh - 80px)" }}
        >
          <h2 className="text-lg font-semibold mb-4 uppercase">Categories</h2>
          <ul>
            {categories.map((category) => (
              <li
                key={category}
                className={`mb-2 border p-2 ${selectedCategory === category ? "bg-secondary" : ""} cursor-pointer`}
                onClick={() => handleCategoryClick(category)}
              >
                {category} ({categoryCounts[category] || 0})
              </li>
            ))}
          </ul>
        </div>

        {/* Recipe Cards */}
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
            {recipes
              .filter((recipe) => !selectedCategory || recipe.category === selectedCategory)
              .map((recipe, index) => (
                <RecipeCard key={index} recipe={recipe} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
