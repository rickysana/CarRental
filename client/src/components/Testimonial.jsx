import React from 'react'
import Title from './Title'
import { assets } from '../assets/assets'

const Testimonial = () => {

    const testimonials = [
        {  
            name: "Neoraj Rajkumar", 
            location: "Keishamthong, Manipur", 
            image: "/testimonial/neoraj.png",
            rating: 5,
            testimonial: "Rentora made my trip so much easier. The booking process was simple, and the car was clean and well-maintained. I’ll definitely use it again."
        },
        {  
            name: "Thokchom Rahul", 
            location: "Khuda Lahora, Chandigarh", 
            image: "/testimonial/rahul.png",
            rating: 4,
            testimonial: "As a student, I needed an affordable rental option, and Rentora was perfect. Great prices and smooth experience from start to finish."
        },
        {  
            name: "Konsam Dayal", 
            location: "Safdarjung, Delhi", 
            image: "/testimonial/dayal.png",
            rating: 5, 
            testimonial: "I travel frequently for work, and Rentora has become my go-to rental platform. Reliable vehicles and excellent customer support."
        
        },];

    return (
        <div className="py-20 px-6 md:px-16 lg:px-24 xl:px-44">
           <Title title="Trusted by Riders Everywhere" subTitle="From daily commutes to long trips, Rentora delivers a seamless rental experience our customers love." />

            <div className="flex flex-wrap items-center justify-center gap-6 mt-20 mb-10">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-beige p-6 rounded-xl shadow-xl hover:-translate-y-1 transition-all duration-500 w-full max-w-sm min-h-[280px] flex flex-col">
                        
                        <div className="flex items-center gap-3">
                            <img className="w-12 h-12 rounded-full" src={testimonial.image} alt={testimonial.name} />
                            <div>
                                <p className=" text-xl">{testimonial.name}</p>
                                <p className="text-gray-500">{testimonial.location}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 mt-4">
                            {Array(5).fill(0).map((_, starIndex) => (
                                <img
                                    key={starIndex}
                                    src={assets.star_icon}
                                    alt="star-icon"
                                    className={starIndex < testimonial.rating ? "opacity-100" : "opacity-30"}
                                />
                            ))}
                        </div>
                        <p className="text-gray-500 max-w-90 mt-4 font-light">"{testimonial.testimonial}"</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Testimonial