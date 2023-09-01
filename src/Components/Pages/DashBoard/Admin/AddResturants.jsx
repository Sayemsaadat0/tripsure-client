import React, { useState } from "react";
import { TbFidgetSpinner } from "react-icons/tb";
import { imageUpload } from "../../../../api/utilities";
import { addresturants } from "../../../../api/bookshotels";
const AddResturants = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    const form = event.target;
    const title = form.title.value;
    const address = form.address.value;
    const cuisine = form.cuisine.value;
    const hours = form.hours.value;
    const menu = form.menu.value;
    const email = form.email.value;
    const number = form.number.value;
    const reviews = form.reviews.value;
    const speciality = form.speciality.value;
    const ratings = form.ratings.value;
    const features = form.features.value;
    const faq = form.faq.value;
    const description = form.description.value;
    const picture = event.target.image.files[0];

    const bookresturants = {
      title,
      address,
      cuisine,
      hours,
      menu,
      email,
      number,
      reviews,
      speciality,
      ratings,
      features,
      faq,
      description,
      picture,
    };
    console.log(bookresturants);

    setUploadButtonText("Uploading...");
    // Upload image
    imageUpload(picture)
      .then((data) => {
        const bookresturants = {
          title,
          address,
          cuisine,
          hours,
          menu,
          email,
          number,
          reviews,
          speciality,
          features,
          faq,
          description,
          ratings: parseFloat(ratings),
          picture: data.data.display_url,
        };

        // post room data to server
        addresturants(bookresturants)
          .then((data) => {
            console.log(data);
            setUploadButtonText("Uploaded!");
            setLoading(false);
            alert("resturants Added!");
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

  const [uploadButtonText, setUploadButtonText] = useState("Upload Image");
  const handleImageChange = (image) => {
    console.log(image);
    setUploadButtonText(image.name);
  };

  return (
    <div className="max-w-screen-lg mx-auto px-4 py-8">
      <div>
        <h2 className="text-2xl mt-10 mb-6">Add Resturants </h2>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="space-y-1 text-sm">
              <label htmlFor="title" className="block text-gray-600 text-lg mb-2">
                Title
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-cyan-300  focus:outline-cyan-500 rounded-md "
                name="title"
                id="title"
                type="text"
                placeholder="Title"
                required
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="address" className="block text-gray-600 text-lg mb-2">
                Address Name
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-cyan-300  focus:outline-cyan-500 rounded-md "
                name="address"
                id="address"
                type="text"
                placeholder=" Address Name"
                required
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="cuisine" className="block text-gray-600 text-lg mb-2">
                cuisine
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-cyan-300  focus:outline-cyan-500 rounded-md "
                name="cuisine"
                id="cuisine"
                type="text"
                placeholder="cuisine "
                required
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="menu" className="block text-gray-600 text-lg mb-2">
                menu
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-cyan-300  focus:outline-cyan-500 rounded-md "
                name="menu"
                id="menu"
                type="text"
                placeholder="  menu "
                required
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="email" className="block text-gray-600 text-lg mb-2">
                email
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-cyan-300  focus:outline-cyan-500 rounded-md "
                name="email"
                id="email"
                type="text"
                placeholder="  email "
                required
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="hours" className="block text-gray-600 text-lg mb-2">
                Hours
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-cyan-300  focus:outline-cyan-500 rounded-md "
                name="hours"
                id="hours"
                type="time"
                placeholder="hours how many days stay "
                required
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="reviews" className="block text-gray-600 text-lg mb-2">
                Reviews
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-cyan-300  focus:outline-cyan-500 rounded-md "
                name="reviews"
                id="reviews"
                type="text"
                placeholder="reviews "
                required
              />
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-1 text-sm">
              <label htmlFor="speciality" className="block text-gray-600 text-lg mb-2">
                speciality
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-cyan-300  focus:outline-cyan-500 rounded-md "
                name="speciality"
                id="speciality"
                type="text"
                placeholder="speciality"
                required
              />
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="ratings" className="block text-gray-600 text-lg mb-2">
                ratings
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-cyan-300  focus:outline-cyan-500 rounded-md "
                name="ratings"
                id="ratings"
                type="text"
                placeholder="ratings"
                required
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="features" className="block text-gray-600 text-lg mb-2">
                Features
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-cyan-300  focus:outline-cyan-500 rounded-md "
                name="features"
                id="features"
                type="text"
                placeholder="roomFeatures"
                required
              />
            </div>
            <div className=" p-4 bg-white w-full  m-auto rounded-lg">
              <div className="file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg">
                <div className="flex flex-col w-max mx-auto text-center">
                  <label>
                    <input
                      onChange={(event) => {
                        handleImageChange(event.target.files[0]);
                      }}
                      className="text-sm cursor-pointer w-36 hidden"
                      type="file"
                      name="image"
                      id="image"
                      accept="image/*"
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
              <label htmlFor="faq" className="block text-gray-600 text-lg mb-2">
                Faq
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-cyan-300  focus:outline-cyan-500 rounded-md "
                name="faq"
                id="faq"
                type="text"
                placeholder="faq"
                required
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="number" className="block text-gray-600 text-lg mb-2">
                number
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-cyan-300  focus:outline-cyan-500 rounded-md "
                name="number"
                id="number"
                type="text"
                placeholder="number"
                required
              />
            </div>
            <div className="space-y-1 text-sm">
              <label
                htmlFor=" description"
                className="block text-gray-600 text-lg mb-2"
              >
                description
              </label>

              <textarea
                id="description"
                className="block rounded-md focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  border border-cyan-300 focus:outline-cyan-500 "
                name="description"
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

export default AddResturants;
