import React, { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../Firebase/Firebase";
import { Eye } from "lucide-react";
import CountUp from "react-countup";
import UpdateHooks from "../../Hooks/UpdateHooks";

export default function RecipeCard({ recipe }) {
  const [user] = useAuthState(auth);
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  const creatorId = recipe.userId;
  const creatorEmail = recipe.user;

  useEffect(() => {
    if (user?.email) {
      loadUserData(user.email);
    }
  }, [user]);

  const loadUserData = (email) => {
    fetch(`http://localhost:5000/api/v1/user/by-email?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          setUserData(data.data);
        } else {
          toast("Failed to load user data");
        }
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        toast("Error fetching user data");
      });
  };

  const updateUserCoins = (userId, newCoinAmount) => {
    fetch(`http://localhost:5000/api/v1/user/${userId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ coin: newCoinAmount }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          setUserData({ ...userData, coin: newCoinAmount });
          window.location.reload();
        } else {
          toast("Failed to update coin balance");
        }
      })
      .catch((error) => {
        console.error("Error updating coin balance:", error);
        toast("Error updating coin balance");
      });
  };

  const updateCreatorCoins = (creatorId, creatorEmail) => {
    // Fetch the current coin balance of the creator
    fetch(`http://localhost:5000/api/v1/user/by-email?email=${creatorEmail}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          const currentCoinBalance = data.data.coin;
          const newCoinBalance = currentCoinBalance + 1;

          // Update the creator's coin balance with the new value
          fetch(`http://localhost:5000/api/v1/user/${creatorId}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ coin: newCoinBalance }),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.status === "success") {
              } else {
                toast("Failed to update creator's coin balance");
              }
            })
            .catch((error) => {
              console.error("Error updating creator's coin balance:", error);
              toast("Error updating creator's coin balance");
            });
        } else {
          toast("Failed to fetch creator's coin balance");
        }
      })
      .catch((error) => {
        console.error("Error fetching creator's coin balance:", error);
        toast("Error fetching creator's coin balance");
      });
  };



 

  const handleViewRecipeClick =async (id,count) => {
    if (!user) {
      toast("Please log in to view recipe details.");
      return;
    }

    if (user.email === creatorEmail) {
     await UpdateHooks(`http://localhost:5000/api/v1/recipes/updateRecipes/${id}`,{watchCount:count});
      navigate(`/recipe-details/${recipe._id}`);
      return;
    }
    if (userData.coin < 10) {
      const confirmPurchase = window.confirm(
        "You don't have enough coins. Do you want to purchase coins?"
      );
      if (confirmPurchase) {
        navigate("/coins");
      }
      return;
    }
    const confirmSpend = window.confirm(
      "Do you want to spend 10 coins to view this recipe?"
    );
    if (confirmSpend) {
      console.log(count)
      await updateUserCoins(userData._id, userData.coin - 10);
      toast("You have successfully spent 10 coins to view this recipe.");
      await updateCreatorCoins(creatorId, creatorEmail);
      await UpdateHooks(`http://localhost:5000/api/v1/recipes/updateRecipes/${id}`,{watchCount:count});
      navigate(`/recipe-details/${recipe._id}`);
      
    }

  };


  return (
    <>
      {/*<!-- Component: E-commerce card --> */}
      <div className="overflow-hidden rounded ring-primary ring-1 bg-white text-slate-500 shadow-md shadow-slate-200 sm:w-72 border-primary">
        {/*  <!-- Image --> */}
        <figure>
          <img
            src={recipe?.recipeImage}
            alt="card image"
            className="aspect-video w-full"
          />
        </figure>
        {/*  <!-- Body--> */}
        <div className="p-4">
          <header className="mb-2">
            <h3 className="text-lg font-medium text-black">{recipe?.title}</h3>
          </header>
        </div>
        {/*  <!-- Action base sized basic button --> */}
        <div className=" p-4 pt-0">
          <div className=" flex justify-between">
            <div className=" flex  justify-center items-center gap-1">
              <Eye size={15} />
              <CountUp end={recipe?.watchCount}></CountUp>
            </div>

            <button
              className="inline-flex h-8 w-full sm:w-auto items-center justify-center gap-1 whitespace-nowrap rounded bg-primary px-3 text-xs font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none"
              onClick={()=>handleViewRecipeClick(recipe?._id,recipe?.watchCount+1)}
            >
              <span>View Recipes!</span>
            </button>
          </div>
        </div>
      </div>
      {/*<!-- End E-commerce card --> */}
    </>
  );
}
