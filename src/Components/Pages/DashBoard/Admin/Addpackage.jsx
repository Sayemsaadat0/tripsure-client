import React, { useState } from 'react';
import { imageUpload } from '../../../../api/utilities';
import { addpackages } from '../../../../api/bookshotels';
import { TbFidgetSpinner } from 'react-icons/tb';
import { useForm } from "react-hook-form";

const Addpackage = () => {

  const [loading, setLoading] = useState(false);
  const HandleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    const form = event.target;
    const title = form.title.value;
    const destination = form.destination.value;
    const country = form.country.value;
    const duration = form.duration.value;
    const description = form.description.value;
    const price = form.price.value;
    const departureDates = form.departureDates.value;
    const departureTime = form.departureTime.value;
    const departurePlace = form.departurePlace.value;
    const totalPeople = form.totalPeople.value;
    const limitPerBookings = form.limitPerBookings.value;
    const includedItems = form.includedItems.value;
    const optionalActivities = form.optionalActivities.value;
    const conditions = form.conditions.value;
    const accommodationDetails = form.accommodationDetails.value;
    const meals = form.meals.value;
    const itinerary = form.itinerary.value;
    const additionalInfo = form.additionalInfo.value;
    const ratings = form.ratings.value;
    const reviews = form.reviews.value;
    const picture = event.target.image.files[0];

    /*    const newPackages = {
         title,
         destination,
         country,
         duration,
         description,
         price: parseFloat(price),
         departureDates,
         departureTime,
         departurePlace,
         totalPeople,
         limitPerBookings,
         includedItems,
         optionalActivities,
         conditions,
         accommodationDetails,
         meals,
         itinerary,
         additionalInfo,
         ratings: parseFloat(ratings),
         reviews,
         picture
       };
       console.log(newPackages); */
    setUploadButtonText("Uploading...");
    // Upload image
    imageUpload(picture)
      .then((data) => {
        const newPackages = {
          title,
          destination,
          country,
          duration,
          description,
          price: parseFloat(price),
          departureDates,
          departureTime,
          departurePlace,
          totalPeople,
          limitPerBookings,
          includedItems,
          optionalActivities,
          conditions,
          accommodationDetails,
          meals,
          itinerary,
          additionalInfo,
          ratings: parseFloat(ratings),
          reviews,
          picture: data.data.display_url,
        };

        // post room data to server
        addpackages(newPackages)
          .then((data) => {
            console.log(data);
            setUploadButtonText("Uploaded!");
            setLoading(false);
            alert("Room Added!");
            // navigate('/dashboard/adminhome')
          })
          .catch((err) => console.log(err));

        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
      });
  };
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data)
    const {
      title,
      destination,
      country,
      duration,
      description,
      price,
      departureDates,
      departureTime,
      departurePlace,
      totalPeople,
      limitPerBookings,
      includedItems,
      optionalActivities,
      conditions,
      accommodationDetails,
      meals,
      itinerary,
      additionalInfo,
      ratings,
      reviews,
    } = data
  
    imageUpload(data.image[0])
    .then((data) => {
      const picture = data.display_url
      const newPackages = {
        title,
        destination,
        country,
        duration,
        description,
        price: parseFloat(price),
        departureDates,
        departureTime,
        departurePlace,
        totalPeople,
        limitPerBookings,
        includedItems,
        optionalActivities,
        conditions,
        accommodationDetails,
        meals,
        itinerary,
        additionalInfo,
        ratings: parseFloat(ratings),
        reviews,
        picture
      };
        // post room data to server
        addpackages(newPackages)
          .then((data) => {
            console.log(data);
            setUploadButtonText("Uploaded!");
            setLoading(false);
            alert("Room Added!");
            // navigate('/dashboard/adminhome')
          })
          .catch((err) => console.log(err));

        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
      })
  };

  const [uploadButtonText, setUploadButtonText] = useState("Upload Image");
  const handleImageChange = (image) => {
    console.log(image);
    setUploadButtonText(image.name);
  };


  return (
    <div className="w-full px-4 py-8">
      <div>
        <h2 className="text-2xl mt-10 mb-6">Add Packages </h2>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="space-y-1 text-sm">
              <label htmlFor="title" className="block text-gray-600 mb-2">
                Title
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-cyan-300  focus:outline-cyan-500 rounded-md "
                name="title"
                id="title"
                type="text"
                placeholder="Title Name"
                {...register("title", { required: true })} />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="destination" className="block text-gray-600 mb-2">
                destination
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-cyan-300  focus:outline-cyan-500 rounded-md "
                name="destination"
                id="destination"
                type="text"
                placeholder=" destination"
                {...register("destination", { required: true })}
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="country" className="block text-gray-600 mb-2">
                Country
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-cyan-300  focus:outline-cyan-500 rounded-md "
                name="country"
                id="country"
                type="text"
                placeholder="Country Name"
                {...register("country", { required: true })} />
            </div>
            <div className="space-y-1 text-sm">
              <label
                htmlFor="duration"
                className="block text-gray-600 mb-2"
              >
                duration
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-cyan-300  focus:outline-cyan-500 rounded-md "
                name="duration"
                id="duration"
                type="text"
                placeholder="duration"
                {...register("duration", { required: true })}
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="price" className="block text-gray-600 mb-2">
                price
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-cyan-300  focus:outline-cyan-500 rounded-md "
                name="price"
                id="price"
                type="number"
                placeholder="price "
                {...register("price", { required: true })}
              />
            </div>
            <div className="space-y-1 text-sm">
              <label
                htmlFor="optionalActivities"
                className="block text-gray-600 mb-2"
              >
                optionalActivities
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-cyan-300  focus:outline-cyan-500 rounded-md "
                name="optionalActivities"
                id="optionalActivities"
                type="text"
                placeholder="optionalActivities "
                {...register("optionalActivities", { required: true })}
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="itinerary" className="block text-gray-600 mb-2">
                itinerary
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-cyan-300  focus:outline-cyan-500 rounded-md "
                name="itinerary"
                id="itinerary"
                type="text"
                placeholder="itinerary "
                {...register("itinerary", { required: true })}
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="reviews" className="block text-gray-600 mb-2">
                Reviews
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-cyan-300  focus:outline-cyan-500 rounded-md "
                name="reviews"
                id="reviews"
                type="text"
                placeholder="reviews "
                {...register("reviews", { required: true })}
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor=" description" className="block text-gray-600 mb-2">
                description
              </label>

              <textarea
                id="description"
                className="block rounded-md focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  border border-cyan-300 focus:outline-cyan-500 "
                name="description"
                {...register("description")}
              ></textarea>
            </div>

          </div>
          <div className="space-y-6">

            <div className="space-y-1 text-sm">
              <label htmlFor="departureDates" className="block text-gray-600 mb-2">
                departureDates
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-cyan-300  focus:outline-cyan-500 rounded-md "
                name="departureDates"
                id="departureDates"
                type="date"
                placeholder="departureDates"
                {...register("departureDates", { required: true })}
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="departureTime" className="block text-gray-600 mb-2">
                departureTime
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-cyan-300  focus:outline-cyan-500 rounded-md "
                name="departureTime"
                id="departureTime"
                type="time"
                placeholder="departureTime"
                {...register("departureTime", { required: true })}
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="ratings" className="block text-gray-600 mb-2">
                ratings
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-cyan-300  focus:outline-cyan-500 rounded-md "
                name="ratings"
                id="ratings"
                type="number"
                placeholder="ratings"
                {...register("ratings", { required: true })}
              />
            </div>
            <div className="space-y-1 text-sm">
              <label
                htmlFor="departurePlace"
                className="block text-gray-600 mb-2"
              >
                departurePlace
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-cyan-300  focus:outline-cyan-500 rounded-md "
                name="departurePlace"
                id="departurePlace"
                type="text"
                placeholder="departurePlace"
                {...register("departurePlace", { required: true })}
              />
            </div>
            <div className="space-y-1 text-sm flex gap-2 items-center">
              <div>
                <label
                  htmlFor="totalPeople"
                  className="block text-gray-600 mb-2"
                >
                  totalPeople
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-cyan-300  focus:outline-cyan-500 rounded-md "
                  name="totalPeople"
                  id="totalPeople"
                  type="text"
                  placeholder="totalPeople"
                  {...register("totalPeople", { required: true })}
                />
              </div>
              <div>
                <label
                  htmlFor="limitPerBookings"
                  className="block text-gray-600 mb-2"
                >
                  limitPerBookings
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-cyan-300  focus:outline-cyan-500 rounded-md "
                  name="limitPerBookings"
                  id="limitPerBookings"
                  type="text"
                  placeholder="limitPerBookings"
                  {...register("limitPerBookings", { required: true })}
                />
              </div>
            </div>
            <div className=" p-4 bg-white w-full  m-auto rounded-lg">
              <div className="file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg">
                <div className="flex flex-col w-max mx-auto text-center">
                  <label>
                    <input
                      className="text-sm cursor-pointer w-36 hidden"
                      onChange={(event) => {
                        handleImageChange(event.target.files[0]);
                      }}
                      type="file"
                      name="image"
                      id="image"
                      accept="image/*"
                      {...register("image", { required: true })}
                      hidden
                    />
                    <div className="bg-rose-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-rose-500">
                      {uploadButtonText}
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="includedItems" className="block text-gray-600 mb-2">
                includedItems
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-cyan-300  focus:outline-cyan-500 rounded-md "
                name="includedItems"
                id="includedItems"
                type="text"
                placeholder="includedItems"
                {...register("includedItems", { required: true })}
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="conditions" className="block text-gray-600 mb-2">
                conditions
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-cyan-300  focus:outline-cyan-500 rounded-md "
                name="conditions"
                id="conditions"
                type="text"
                placeholder="conditions"
                {...register("conditions", { required: true })}
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="meals" className="block text-gray-600 mb-2">
                meals
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-cyan-300  focus:outline-cyan-500 rounded-md "
                name="meals"
                id="meals"
                type="text"
                placeholder="meals"
                {...register("meals", { required: true })}
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor=" accommodationDetails" className="block text-gray-600 mb-2">
                accommodationDetails
              </label>

              <textarea
                id="accommodationDetails"
                className="block rounded-md focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  border border-cyan-300 focus:outline-cyan-500 "
                name="accommodationDetails"
                {...register("accommodationDetails")}
              ></textarea>
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor=" additionalInfo" className="block text-gray-600 mb-2">
                additionalInfo
              </label>

              <textarea
                id="additionalInfo"
                className="block rounded-md focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  border border-cyan-300 focus:outline-cyan-500 "
                name="additionalInfo"
                {...register("additionalInfo")}
              ></textarea>
            </div>
          </div>
        </div>

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
      </form>
    </div>
  );
};

export default Addpackage;