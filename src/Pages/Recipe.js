import { useEffect } from "react";
import AllRecipes from "../Components/AllRecipes/AllRecipes";

export default function Recipe() {

  const fetchRecipes = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/v1/recipes/getRecipes`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };
  
  useEffect(() => {
    fetchRecipes();
  }, []);
  return (
    <div>
      <AllRecipes />
    </div>
  );
}
