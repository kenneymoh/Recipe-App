import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="w-full relative">
      <div>
        <video autoPlay muted loop className="w-full h-full">
          <source
            src="https://database-six.vercel.app/video/2.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="absolute w-full top-0 h-full flex flex-col items-center justify-evenly">
        <div className="relative z-10 text-gray-100 w-3/5">
          <h1 className="text-5xl text-white-500 font-bold mb-4">
            WELCOME TO FLAVOR HUB
          </h1>
          <div className="text-2xl text-center text-gray-50 mb-4">
            <div className="bg-white/20 p-4">
              <p className="mb-4">
                This app primary function is to find recipes based on specified
                ingredients. Once you enter what you have on hand, Flavorhub
                will give you a list of recipes using only those ingredients.
              </p>
              <p className="mb-4">
                For our company to become as we are today, our experts have
                spent most of their time on various pets research. They also
                have spent most of their time seeking recommendations,
                commendations and guidance from various experts when it comes to
                taking care of pets. We use every possible way that we can to
                provide the best for our animals to be reciprocated by potential
                pet owners.
              </p>
            </div>
          </div>
          <div className="flex space-x-2 justify-center">
            <Link to="/register">
              <button
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                className="inline-block px-10 text-1.8xl py-3 bg-cyan-400 text-gray-800 font-medium leading-tight rounded shadow-md hover:bg-cyan-500 hover:shadow-lg focus:bg-cyan-500 focus:shadow-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
              >
                Get Started
              </button>
            </Link>
          </div>
        </div>
        <div className="absolute top-0 left-0 h-full w-full z-0">
          <video autoPlay muted loop className="w-full h-full">
            <source
              src="https://database-six.vercel.app/video/2.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </div>
  );
}
export default Home;