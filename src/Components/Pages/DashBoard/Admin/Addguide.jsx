import axios from "axios";
import React , { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { TbFidgetSpinner } from "react-icons/tb";
import Swal from "sweetalert2";

const Addguide = () => {
    const [loading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
        setLoading(true);
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_API}/addguide`, data);
        console.log(response.data); // Response from the server
  
        setLoading(false);
  
        // Show SweetAlert2 success alert
        Swal.fire({
          icon: "success",
          title: "Guide Added",
          text: "The guide has been added successfully!",
        });
      } catch (error) {
        console.error(error);
        setLoading(false);
  
        // Show SweetAlert2 error alert
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "An error occurred while adding the guide.",
        });
      }
    };
   

  return (
    <div>
      <h1 className="text-xl font-bold mt-20 mb-15 text-center">Add a Guide</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="p-10">
          <div className="space-y-1 text-sm">
            <label htmlFor="name" className="block text-gray-600 mb-2">
              Guide Name:
            </label>
            <input
              className="w-full px-4 py-3 text-gray-800 border   focus:outline-cyan-500 rounded-md "
              type="text"
              id="name"
              placeholder="name"
              {...register("name", { required: true })}
            />
            <br />
            <br />

            <label htmlFor="language" className="block text-gray-600 mb-2">
              Language:
            </label>
            <input
              className="w-full px-4 py-3 text-gray-800 border   focus:outline-cyan-500 rounded-md "
              type="text"
              id="language"
              placeholder="language"
              {...register("language", { required: true })}
            />
            <br />
            <br />

            <label htmlFor="experience" className="block text-gray-600 mb-2">
              Experience:
            </label>
            <input
              className="w-full px-4 py-3 text-gray-800 border   focus:outline-cyan-500 rounded-md "
              type="number"
              id="experience"
              placeholder="experience"
              {...register("experience", { required: true })}
            />
            <br />
            <br />

            <label htmlFor="availability" className="block text-gray-600 mb-2">
              Availability:
            </label>
            <input
              className="w-full px-4 py-3 text-gray-800 border   focus:outline-cyan-500 rounded-md "
              type="text"
              id="availability"
              placeholder="availability"
              {...register("availability", { required: true })}
            />
            <br />
            <br />

            <button
            type="submit"
            className="w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-cyan-500"
          >
            {loading ? (
              <TbFidgetSpinner className="m-auto animate-spin" size={24} />
            ) : (
              "Save & Continue"
            )}
          </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Addguide;


/* "name": "Mizanur Rahman",
"email": "mizanurrahman55@gmail.com",
"picture": "bangladeshi-guide.jpg"
"residence": "Dhaka, Bangladesh",
"occupation": "Local Culture and Nature Guide",
"speaks": ["Bengali", "English"],
"age" : 30 
"gender" : "male" 
"dateofbirth" : 30 
"phone" : 019999999999 
"guiding_locations": ["Dhaka", "Cox's Bazar", "Sundarbans"],
"specialties": ["Cultural Heritage", "Eco-Tourism"],
"description": "Explore the rich cultural heritage and breathtaking natural beauty of Bangladesh with me. From bustling Dhaka to the serene Sundarbans, I'll be your guide to this remarkable land.",
"rating": 4.7, */