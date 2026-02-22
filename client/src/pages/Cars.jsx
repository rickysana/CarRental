import React from "react"
import { useNavigate } from "react-router-dom"
import { dummyCarData, assets } from "../assets/assets"

const Cars = () => {
  const navigate = useNavigate()

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 py-10">
      
      {/* 3 per row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {dummyCarData.map(car => (
          <div
            key={car._id}
            onClick={() => navigate(`/car/${car._id}`)}
            className="cursor-pointer group"
          >
            <div className="rounded-xl overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-300">
              <img
                src={car.image}
                alt={car.model}
                className="w-full h-[260px] object-contain rounded-xl group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="mt-4 group-hover:text-pink-600 transition-colors duration-300">
              <h2 className="text-lg font-semibold group-hover:text-pink-600 transition-colors duration-300">
                {car.brand} {car.model}
              </h2>

              <p className="text-gray-500 text-sm">
                {car.category} • {car.year}
              </p>

              <div className="flex flex-wrap gap-4 mt-3 text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">
                <div className="flex items-center gap-1">
                  <img src={assets.users_icon} className="h-4" />
                  {car.seating_capacity}
                </div>

                <div className="flex items-center gap-1">
                  <img src={assets.fuel_icon} className="h-4" />
                  {car.fuel_type}
                </div>

                <div className="flex items-center gap-1">
                  <img src={assets.car_icon} className="h-4" />
                  {car.transmission}
                </div>

                <div className="flex items-center gap-1">
                  <img src={assets.location_icon} className="h-4" />
                  {car.location}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Cars