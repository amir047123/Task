import React from "react";

export default function Coins() {
  // Fake data representing different plans
  const plans = [
    {
      type: "Basic",
      description: "buying 100 coins by spending 1 dollar.",
      price: 1,
    },
    {
      type: "Standard",
      description: " buying 500 coins by spending 5 dollars.       ",
      price: 5,
    },
    {
      type: "Premium",
      description: "1000 coins by spending 10 dollars.",
      price: 10,
    },
  ];

  return (
    <div className=" my-10 px-10">
      <h1 className=" text-2xl text-center py-5 font-bold " >Purchase Coin</h1>
      <div className="flex justify-center items-center gap-5 ">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="flex flex-col gap-6 p-6 text-slate-400 border"
          >
            <h3 className="text-xl font-bold  text-primary">
              {plan.type}
              <span className="block text-sm font-normal text-slate-400">
                {plan.description}
              </span>
            </h3>
            <h4>
              <span className="text-3xl text-primary">$</span>
              <span className="text-5xl font-bold tracking-tighter transition-all duration-300 text-slate-700 lg:text-6xl">
                {plan.price}
              </span>
            </h4>
            <button className="inline-flex items-center justify-center w-full h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded shadow-lg whitespace-nowrap bg-primary shadow-emerald-100 hover:bg-emerald-600 hover:shadow-md hover:shadow-emerald-100 focus:bg-emerald-700 focus:shadow-md focus:shadow-emerald-100 focus-visible:outline-none">
              <span>PURCHASE</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
