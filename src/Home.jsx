import React, { useState } from "react";
import { motion } from "framer-motion";
import Sidebar from "./Sidebar";

const Home = () => {
  const [selectedModel, setSelectedModel] = useState("All Models");
  const [searchQuery, setSearchQuery] = useState("");

  const carData = [
    {
      id: 1,
      name: "BMW M5 F90",
      mileage: "2.1K",
      price: "$159/h",
      recommendation: "92",
      image:
        "https://images.unsplash.com/photo-1652890041546-2de2829c43b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fG01JTIwZjkwfGVufDB8fDB8fHww",
    },
    {
      id: 2,
      name: "Jeep Rubicon",
      mileage: "35.0K",
      price: "$29/h",
      recommendation: "56",
      image:
        "https://images.unsplash.com/photo-1588899428678-f9ea565d91fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8amVlcHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 3,
      name: "Lamborghini Urus",
      mileage: "23.2K",
      price: "$42/h",
      recommendation: "94",
      image:
        "https://images.unsplash.com/photo-1620591310117-2a7946e5dc29?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fExhbWJvcmdoaW5pJTIwVXJ1c3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 4,
      name: "Mercedes-Benz AMG G 63",
      mileage: "76.9K",
      price: "$26/h",
      recommendation: "69",
      image:
        "https://images.unsplash.com/photo-1669428800842-5f1d3645cef2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8",
    },
    {
      id: 5,
      name: "Volvo XC90",
      mileage: "53.2K",
      price: "$55/h",
      recommendation: "89",
      image:
        "https://images.unsplash.com/photo-1670362924336-e0bcaec57137?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFZvbHZvJTIwWEM5MHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 6,
      name: "Porsche 911 GT3 RS",
      mileage: "8.5K",
      price: "$780/h",
      recommendation: "75",
      image:
        "https://images.unsplash.com/photo-1699325635304-a2f409b06d19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UG9yc2NoZSUyMDkxMSUyMEdUMyUyMFJTfGVufDB8fDB8fHww",
    },
  ];

  const filteredCars = carData.filter((car) => {
    const matchesModel =
      selectedModel === "All Models" || car.name.includes(selectedModel);
    const matchesSearch = car.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesModel && matchesSearch;
  });

  const models = [
    "All Models",
    "BMW",
    "Jeep",
    "Lamborghini",
    "Mercedes-Benz",
    "Volvo",
    "Porsche",
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar />

      <main className="ml-64 pt-20 px-8 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 bg-white p-6 rounded-xl shadow-sm">
            <h1 className="text-2xl font-bold mb-6 text-gray-900">
              Available Cars
            </h1>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {models.map((model) => (
                  <button
                    key={model}
                    onClick={() => setSelectedModel(model)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedModel === model
                        ? "bg-black text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {model}
                  </button>
                ))}
              </div>

              <div className="relative w-full md:w-64">
                <input
                  type="text"
                  placeholder="Search cars..."
                  className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <svg
                  className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCars.map((car) => (
              <motion.div
                key={car.id}
                className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="aspect-video relative overflow-hidden">
                  <motion.img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-48 object-cover transition-transform duration-700"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  />

                  <div className="absolute top-4 right-4 bg-white backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1 shadow-sm border border-gray-100">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span>{car.recommendation}% Rec</span>
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold line-clamp-1">
                        {car.name}
                      </h3>
                      <p className="text-gray-500 text-sm mt-1 flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        {car.mileage}
                      </p>
                    </div>
                    <p className="text-black font-bold text-lg sm:text-xl">
                      {car.price}
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <motion.button
                      whileTap={{ scale: 0.98 }}
                      className="relative flex-1 py-3.5 bg-gradient-to-r from-gray-900 to-black text-white rounded-xl text-sm font-semibold hover:shadow-lg transition-all duration-300 overflow-hidden group"
                    >
                      <span className="relative z-10">Rent Now</span>
                    </motion.button>

                    <motion.button
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 py-3.5 border-2 border-gray-200 rounded-xl text-sm font-semibold bg-white text-gray-800 hover:bg-gray-50 hover:border-gray-300 hover:text-black transition-all duration-300 shadow-sm"
                    >
                      Details
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
