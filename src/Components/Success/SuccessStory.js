export default function SuccessStory() {
  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Our Success <span className=" text-primary">Stories</span>
            </h2>

            <p className="mt-4  ">
              Explore the inspiring journeys of individuals and businesses who
              turned their passion for cooking into lucrative ventures. Discover
              how they overcame challenges, innovated in the kitchen, and carved
              their niche in the culinary world.
            </p>
          </div>

          <div className="mt-8 sm:mt-12">
            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:divide-x sm:divide-primary">
              <div className="flex flex-col px-4 py-8 text-center">
                <dt className="order-last text-lg font-medium text-gray-500">
                  Total Catagories
                </dt>

                <dd className="text-4xl font-extrabold text-primary md:text-5xl">
              78
                </dd>
              </div>

              <div className="flex flex-col px-4 py-8 text-center">
                <dt className="order-last text-lg font-medium text-gray-500">
                 Total Recipes
                </dt>

                <dd className="text-4xl font-extrabold text-primary md:text-5xl">
                  24
                </dd>
              </div>

              <div className="flex flex-col px-4 py-8 text-center">
                <dt className="order-last text-lg font-medium text-gray-500">
                  Total Users
                </dt>

                <dd className="text-4xl font-extrabold text-primary md:text-5xl">
                  86
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </div>
  );
}
