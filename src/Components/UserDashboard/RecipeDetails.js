import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function RecipeDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/v1/recipes/getRecipesById/${id}`
        );
        setRecipe(response.data.data); // Assuming the response contains the recipe data
      } catch (error) {
        console.error("Error fetching recipe:", error);
      }
    };

    fetchRecipe();
  }, [id]);

  return (
    <div className=" min-h-screen p-4">
      <section>
        <div className="container px-6 mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-8 lg:grid-cols-12">
            <div className="col-span-1 md:col-span-8 lg:col-span-7">
              <div className="p-4 bg-white rounded-lg shadow-md">
                {recipe && (
                  <>
                    <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
                    <div
                      className="text-sm"
                      dangerouslySetInnerHTML={{
                        __html: recipe.recipeDetails,
                      }}
                    />{" "}
                    <p className="text-md mb-2">
                      <strong>Country:</strong> {recipe.country}
                    </p>
                  </>
                )}
              </div>
            </div>
            <div
              className="col-span-1 md:col-span-8 lg:col-span-5 border p-5 rounded-md bg-white"
              style={{ height: "300px" }}
            >
              {recipe && (
                <div
                  className="relative"
                  style={{ paddingBottom: "56.25%", height: 0 }}
                >
                  <iframe
                    src={recipe.youtubeVideo}
                    frameBorder="0"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full "
                    title="Recipe Video"
                  ></iframe>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
