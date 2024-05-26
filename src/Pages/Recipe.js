import { useEffect } from "react";
import AllRecipes from "../Components/AllRecipes/AllRecipes";

export default function Recipe() {

  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/recipes/getRecipes`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div>
      <AllRecipes />
    </div>
  );
}
