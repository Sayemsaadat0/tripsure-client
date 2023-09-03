import React, { useState } from "react";
import { addRoom } from "../../../../api/bookshotels";
import { TbFidgetSpinner } from "react-icons/tb";
import { imageUpload } from "../../../../api/utilities";
import AddHotelQ_Ans from "./AddHotelQ_Ans";

const Addhotels = () => {
  const [loading, setLoading] = useState(false);
  const [QA, setQA] = useState([])
  console.log(QA)
  const handle_submit = (event) => {
    event.preventDefault();
    setLoading(true);
    const form = event.target;
    const hotelName = form.hotelName.value;
    const address = form.address.value;
    const country = form.country.value;
    const hotel_website = form.hotel_website.value;
    const email = form.email.value;
    const hotline_number = form.hotline_number.value;
    const reviews = form.reviews.value;
    const language = form.language.value;
    const ratings = form.ratings.value;
    const roomFeatures = form.roomFeatures.value;
    const faq = form.faq.value;
    const details = form.details.value;
    const picture = event.target.image.files[0];

    const roomData = {
      hotelName,
      address,
      country,
      hotel_website,
      email,
      hotline_number,
      reviews,
      language,
      ratings,
      roomFeatures,
      faq,
      details,
      picture,
    };
    console.log(roomData);
    setUploadButtonText("Uploading...");
    // Upload image
    imageUpload(picture)
      .then((data) => {
        const roomData = {
          hotelName,
          address,
          country,
          hotel_website,
          email,
          hotline_number,
          reviews,
          language,
          ratings: parseFloat(ratings),
          roomFeatures,
          faq,
          details,
          picture: data.data.display_url,
        };

        // post room data to server
        addRoom(roomData)
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

  const [uploadButtonText, setUploadButtonText] = useState("Upload Image");
  const handleImageChange = (image) => {
    console.log(image);
    setUploadButtonText(image.name);
  };

  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const features = ["Wi-Fi", "TV", "Air Conditioning", "Mini Fridge"];

  const handleFeatureChange = (event) => {
    const { value } = event.target;
    if (value === "all") {
      setSelectedFeatures(event.target.checked ? features : []);
    } else {
      setSelectedFeatures((prevSelected) =>
        event.target.checked
          ? [...prevSelected, value]
          : prevSelected.filter((feature) => feature !== value)
      );
    }
  };

  const languages = [
    {
      label: "bangla",
    },
    {
      label: "english",
    },
    {
      label: "Hindi",
    },
    {
      label: "pakistani",
    },
  ];

  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="max-w-screen-lg mx-auto px-4 py-8">
      <div>
        <h2 className="text-2xl mt-10 mb-6">Add Hotel Details </h2>
      </div>

      <form onSubmit={handle_submit}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="space-y-1 text-sm">
              <label htmlFor="hotelName" className="text-gray-600 text-lg mb-2">
                Hotel Name
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-cyan-300  focus:outline-cyan-500 rounded-md "
                name="hotelName"
                id="hotelName"
                type="text"
                placeholder="Hotel Name"
                required
              />
            </div>
            <div className="space-y-1 text-sm">
              <label
                htmlFor="address"
                className="block text-gray-600 mb-2 text-lg"
              >
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
              <label
                htmlFor="country"
                className="block text-gray-600 mb-2 text-lg"
              >
                Country
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-cyan-300  focus:outline-cyan-500 rounded-md "
                name="country"
                id="country"
                type="text"
                placeholder="Country Name"
                required
              />
            </div>
            <div className="space-y-1 text-sm">
              <label
                htmlFor="hotel_website"
                className="block text-gray-600 mb-2 text-lg"
              >
                Hotel Website
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-cyan-300  focus:outline-cyan-500 rounded-md "
                name="hotel_website"
                id="hotel_website"
                type="text"
                placeholder="  Hotel Website"
                required
              />
            </div>
            <div className="space-y-1 text-sm">
              <label
                htmlFor="email"
                className="block text-gray-600 mb-2 text-lg"
              >
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
              <label
                htmlFor="hotline_number"
                className="block text-gray-600 mb-2 text-lg"
              >
                hotline Number
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-cyan-300  focus:outline-cyan-500 rounded-md "
                name="hotline_number"
                id="hotline_number"
                type="number"
                placeholder="hotline_number "
                required
              />
            </div>
            <div className="space-y-1 text-sm">
              <label
                htmlFor="reviews"
                className="block text-gray-600 mb-2 text-lg"
              >
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
              <label
                htmlFor="language"
                className="block text-gray-600 mb-2 text-lg"
              >
                Language
              </label>
              {/* <input
                className="w-full px-4 py-3 text-gray-800 border border-cyan-300  focus:outline-cyan-500 rounded-md "
                name="language"
                id="language"
                type="text"
                placeholder="language"
                required
              /> */}
              <select
                required
                className="w-full px-4 py-3 text-gray-800 border border-cyan-300  focus:outline-cyan-500 rounded-md"
                name="language"
                id="language"
                type="text"
                placeholder="language"
              >
                {languages.map((category) => (
                  <option value={category.label} key={category.label}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-1 text-sm">
              <label
                htmlFor="ratings"
                className="block text-gray-600 mb-2 text-lg"
              >
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
              <label
                htmlFor="roomFeatures"
                className="block text-gray-600 mb-2 text-lg"
              >
                Room Features
              </label>
              {/* <div className="flex items-center">
                <label className="cursor-pointer label">
                  <span className="label-text">Select All</span>
                  <input
                    type="checkbox"
                    className="checkbox checkbox-accent"
                    value="all"
                    checked={selectedFeatures.length === features.length}
                    onChange={handleFeatureChange}
                  />
                </label>
              </div> */}
              {/* {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <label className="cursor-pointer label">
                    <span className="label-text">{feature}</span>
                    <input
                      type="checkbox"
                      className="checkbox checkbox-accent"
                      value={feature}
                      name= "roomFeatures"
                      checked={selectedFeatures.includes(feature)}
                      onChange={handleFeatureChange}
                    />
                  </label>
                </div>
              ))} */}
               <select
                required
                className="w-full px-4 py-3 text-gray-800 border border-cyan-300  focus:outline-cyan-500 rounded-md"
                name="roomFeatures"
              >
                {features.map((category) => (
                  <option value={category} key={category}>
                    {category}
                  </option>
                ))}
              </select>

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
              <label htmlFor="faq" className="block text-gray-600 mb-2">
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
              <label htmlFor="q&a" className="block text-gray-600 mb-2 text-lg">
                Q & A
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-cyan-300  focus:outline-cyan-500 rounded-md "
                name="q&a"
                id="q&a"
                type="text"
                placeholder="Q & A"
                required
              />
            </div>
            <div className="space-y-1 text-sm">
              <label
                htmlFor=" details"
                className="block text-gray-600 mb-2 text-lg"
              >
                details
              </label>

              <textarea
                id="details"
                className="block rounded-md focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  border border-cyan-300 focus:outline-cyan-500 "
                name="details"
              ></textarea>
            </div>
          </div>
        </div>
        <button onClick={() => setIsOpen(true)} className="btn">add questions and answer</button>
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
      <AddHotelQ_Ans QA={QA} setQA={setQA} isOpen={isOpen} setIsOpen={setIsOpen}></AddHotelQ_Ans>
    </div>
  );
};

export default Addhotels;
