import React from "react";

export default function RecipeCard() {
  return (
    <>
      {/*<!-- Component: E-commerce card --> */}
      <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200 sm:w-72 border-primary ring-primary">
        {/*  <!-- Image --> */}
        <figure>
          <img
            src="https://picsum.photos/id/493/800/600"
            alt="card image"
            className="aspect-video w-full"
          />
        </figure>
        {/*  <!-- Body--> */}
        <div className="p-4">
          <header className="mb-2">
            <h3 className="text-lg font-medium text-primary">
              Greek breakfast
            </h3>
           
          </header>
          <p className="text-sm">
            Blueberry Superpower: Vanilla Greek Yogurt + Fresh Blueberries +
            Granola + Honey.
          </p>
        </div>
        {/*  <!-- Action base sized basic button --> */}
        <div className="flex justify-end p-4 pt-0">
          <button className="inline-flex h-8 w-full sm:w-auto items-center justify-center gap-1 whitespace-nowrap rounded bg-primary px-3 text-xs font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
            <span>View Recipes!</span>
          </button>
        </div>
      </div>
      {/*<!-- End E-commerce card --> */}
    </>
  );
}
