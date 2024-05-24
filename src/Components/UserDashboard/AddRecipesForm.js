import React, { useState } from "react";
import JoditEditor from "jodit-react";

export default function AddRecipesForm() {
  const [title, setTitle] = useState("");
  const [recipeImage, setRecipeImage] = useState(null);
  const [youtubeVideo, setYoutubeVideo] = useState("");
  const [country, setCountry] = useState("");
  const [category, setCategory] = useState("");
  const [recipeDetails, setRecipeDetails] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      title,
      recipeImage,
      youtubeVideo,
      country,
      category,
      recipeDetails,
    };

    console.log(formData);

    // Reset form fields
    setTitle("");
    setRecipeImage(null);
    setYoutubeVideo("");
    setCountry("");
    setCategory("");
    setRecipeDetails("");
  };

  return (
    <div>
      <div className="">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              name="title"
              className="mt-1 block w-full border p-3"
              placeholder="Type your recipe title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Upload Recipe Image
            </label>
            <input
              type="file"
              name="recipeImage"
              accept="image/*"
              className="mt-1 block w-full border p-3"
              onChange={(e) => setRecipeImage(e.target.files[0])}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              YouTube Video Link
            </label>
            <input
              type="text"
              name="youtubeVideo"
              className="mt-1 block w-full border p-3"
              placeholder="YouTube video link"
              value={youtubeVideo}
              onChange={(e) => setYoutubeVideo(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Country
            </label>
            <input
              type="text"
              name="country"
              className="mt-1 block w-full border p-3"
              placeholder="Type your country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Category
            </label>
            <select
              name="category"
              className="mt-1 block w-full border p-3"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select a category</option>
              <option value="Rice Dishes">Rice Dishes</option>
              <option value="Fish Dishes">Fish Dishes</option>
              <option value="Meat Dishes">Meat Dishes</option>
              <option value="Street Food">Street Food</option>
              <option value="Snacks">Snacks</option>
              <option value="Sweets and Desserts">Sweets and Desserts</option>
              <option value="Bread and Naan">Bread and Naan</option>
              <option value="Vegetarian Dishes">Vegetarian Dishes</option>
              <option value="Spicy Curries">Spicy Curries</option>
              <option value="Beverages">Beverages</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Recipe Details
            </label>
            <JoditEditor
              value={recipeDetails}
              onChange={(newContent) => setRecipeDetails(newContent)}
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-emerald-500 text-white font-bold rounded-lg hover:bg-emerald-600 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
