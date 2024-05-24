import amir from "../../assets/DevInfo/Amir Faysal (2).png";

export default function DevInfo() {
  return (
    <div>
      <div className=" text-center">
        <h1 className=" text-red-600 uppercase ">Developer</h1>
        <h1 className=" text-3xl font-bold">Dev <span className=" text-primary">Info</span></h1>
      </div>

      <section class="pt-10 overflow-hidden bg-gray-50 dark:bg-gray-800 md:pt-0 sm:pt-16 2xl:pt-16 mb-5">
        <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div class="grid items-center grid-cols-1 md:grid-cols-2">
            <div>
              <h2 class="text-3xl font-bold leading-tight text-black dark:text-white ">
                Hey 👋 I am Amir Faysal
              </h2>
              <p class="max-w-lg mt-3  leading-relaxed text-gray-600 dark:text-gray-300 md:mt-8">
                Experienced and detail-oriented web developer with a passion for
                crafting efficient, user-friendly, and visually appealing
                websites. Seeking a challenging role to leverage my skills in
                front-end and back-end development, along with my proficiency in
                various web technologies. Committed to staying abreast of
                emerging trends and technologies to contribute innovative
                solutions and enhance user experiences.
              </p>

              <p class="mt-4 text-xl text-gray-600 dark:text-gray-300 md:mt-8">
                <span class="relative inline-block">
                  <span class="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300 dark:bg-gray-900"></span>
                  <span class="relative"> Have a question? </span>
                </span>
                <br class="block sm:hidden" />
                Feel free to contact me with any questions or opportunities.
                <a
                  href="https://drive.google.com/file/d/1muyJ-Ey9DgTmDPizRnpN61-NxZvBA7ct/view?usp=drive_link"
                  title=""
                  class="transition-all duration-200 text-primary dark:text-sky-400 hover:text-sky-600 dark:hover:text-sky-500 hover:underline"
                >
                  Resume Download
                </a>
              </p>
            </div>

            <div class="relative">
              <img
                class="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg"
                alt=""
              />

              <img
                class="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
                src={amir}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>



    </div>
  );
}
