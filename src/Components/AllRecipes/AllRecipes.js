import React from "react";
import RecipeCard from "./RecipeCard";

export default function AllRecipes() {
  // Sample array with 10 elements
  const recipeData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="container mx-auto py-10 px-4 lg:px-0">
        <h1 className=" text-2xl font-bold">All Recipes</h1>
      <div class="relative my-6">
        <input
          id="id-s01"
          type="search"
          name="id-s01"
          placeholder="Search here"
          aria-label="Search content"
          class="relative w-full h-10 px-4 pr-12 text-sm transition-all border-b outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="absolute top-2.5 right-4 h-5 w-5 cursor-pointer stroke-slate-400 peer-disabled:cursor-not-allowed"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
          aria-label="Search icon"
          role="graphics-symbol"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {/* Sidebar for categories (visible on larger screens) */}
        <div
          className="lg:block lg:col-span-1 bg-white rounded-lg p-4"
          style={{ height: "calc(100vh - 80px)" }}
        >
          <h2 className="text-lg font-semibold mb-4 uppercase">Categories</h2>
          {/* selected bg secondary */}
          <ul>
            <li className="mb-2 border p-2 bg-secondary cursor-pointer">
              Rice Dishes (1)
            </li>
            <li className="mb-2 border p-2 cursor-pointer">Fish Dishes(0)</li>
            <li className="mb-2 border p-2 cursor-pointer">Meat Dishes (0)</li>
            <li className="mb-2 border p-2 cursor-pointer">Street Food (0)</li>
            <li className="mb-2 border p-2 cursor-pointer">Snacks (0)</li>
            <li className="mb-2 border p-2 cursor-pointer">
              Sweets and Desserts (0)
            </li>
            <li className="mb-2 border p-2 cursor-pointer">
              Bread and Naan (0)
            </li>
            <li className="mb-2 border p-2 cursor-pointer">
              Vegetarian Dishes (0)
            </li>
            <li className="mb-2 border p-2 cursor-pointer">
              Spicy Curries (0)
            </li>{" "}
            <li className="mb-2 border p-2 cursor-pointer">Beverages (0)</li>
            {/* Add more categories as needed */}
          </ul>
        </div>

        {/* Recipe Cards */}
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
            {recipeData.map((recipe, index) => (
              <RecipeCard key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
