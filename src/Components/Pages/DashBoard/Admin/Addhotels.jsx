import React, { useEffect, useRef, useState } from "react";
import { addRoom } from "../../../../api/bookshotels";
import { TbFidgetSpinner } from "react-icons/tb";
import { imageUpload } from "../../../../api/utilities";
import AddHotelQ_Ans from "./AddHotelQ_Ans";
import Swal from 'sweetalert2'
import CreatableSelect from 'react-select/creatable';

const Addhotels = () => {
  const [loading, setLoading] = useState(false);
  const [QA, setQA] = useState([])
  const [selectedRoomFeatures, setSelectedRoomFeatures] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedOption, setSelectedOption] = useState([]);
  const [language, setLanguage] = useState([])
  const formRef = useRef(null);

  useEffect(() => {
    if (selectedOption.length > 0) {
      const languages = selectedOption?.map(options => options.value)
      console.log(languages, language)
      setLanguage(languages)
    }
  },[selectedOption])

  const handle_submit = (event) => {
    event.preventDefault();
    if (QA.length < 1 || selectAll.length < 1) {
      return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'plase add one or more question and minimum 1 checkbox checked  !',
      })
    }
    setLoading(true);
    const form = event.target;
    const hotelName = form.hotelName.value;
    const address = form.address.value;
    const country = form.country.value;
    const hotel_website = form.hotel_website.value;
    const email = form.email.value;
    const hotline_number = form.hotline_number.value;
    const reviews = form.reviews.value;
    const ratings = form.ratings.value;
    // const roomFeatures = form.roomFeatures.value;
    const details = form.details.value;
    const picture = event.target.image.files[0];

    // const roomData = {
    //   hotelName,
    //   address,
    //   country,
    //   hotel_website,
    //   email,
    //   hotline_number,
    //   reviews,
    //   language,
    //   ratings,
    //   roomFeatures: selectedRoomFeatures,
    //   FAQ: QA,
    //   details,
    //   picture,
    // };
    // console.log();
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
          ratings: parseFloat(ratings),
          roomFeatures: selectedRoomFeatures,
          FAQ: QA,
          details,
          language,
          picture: data.data.display_url,
        };
        if (formRef.current) {
          formRef.current.reset();
        }
        // post room data to server
        addRoom(roomData)
          .then((data) => {
            console.log(data);
            setUploadButtonText("Uploaded!");
            setLoading(false);
            console.log(roomData)
            if (formRef.current) {
              formRef.current.reset();
            }
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

  const features = [
    "Blackout Curtains",
    "Air-Conditioned Rooms",
    "Cable / Satellite TV",
    "Mini Refrigerator",
    "In-Room Safe",
    "Luxurious Bathrobes",
    "Complimentary Toiletries",
    "Work Desk and Chair",
    "Coffee / Tea Maker",
    "High-Speed Internet"];


  const handleRoomFeatureChange = (event) => {
    const feature = event.target.value;
    if (event.target.checked) {
      // Add the feature to the selectedRoomFeatures array if it's checked
      setSelectedRoomFeatures([...selectedRoomFeatures, feature]);
    } else {
      // Remove the feature from the selectedRoomFeatures array if it's unchecked
      setSelectedRoomFeatures(
        selectedRoomFeatures.filter((item) => item !== feature)
      );
    }
  };



  const handleSelectAllChange = (event) => {
    const checked = event.target.checked;
    setSelectAll(checked);

    // If "Select All" is checked, set all room features as selected; otherwise, clear the selectedRoomFeatures array.
    if (checked) {
      setSelectedRoomFeatures(features);
    } else {
      setSelectedRoomFeatures([]);
    }
  };

  const options = [
    { value: 'Bangla', label: 'Bangla' },
    { value: 'Arabic', label: 'Arabic' },
    { value: 'Russian', label: 'Russian' },
    { value: 'English', label: 'English' },
    { value: 'Hindi', label: 'Hindi' },
  ];

  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="bg-[#F3F4F6] py-5 px-4 md:px-6 lg:px-0 md:py-10">
      <div className="max-w-4xl w-full mx-auto bg-white p-2 md:p-6 lg:p-10">
        <div>
          <h2 className="text-2xl mb-6">Add Hotel Details </h2>
        </div>

        <form onSubmit={handle_submit} ref={formRef}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-4">
              <div className="space-y-1 text-sm">
                <label htmlFor="hotelName" className="block mb-1 text-xs font-medium text-gray-600">
                  Hotel Name
                </label>
                <input
                  className="w-full  px-1 sm:px-2 md:px-3 py-1 bg-[#F3F4F6] text-gray-800 border-2  focus:outline-cyan-600  rounded-md "
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
                  className="block mb-1 text-xs font-medium text-gray-600"
                >
                  Address Name
                </label>
                <input
                  className="w-full  px-1 sm:px-2 md:px-3 py-1 bg-[#F3F4F6] text-gray-800 border-2  focus:outline-cyan-600  rounded-md  "
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
                  className="block mb-1 text-xs font-medium text-gray-600"
                >
                  Country
                </label>
                <input
                  className="w-full  px-1 sm:px-2 md:px-3 py-1 bg-[#F3F4F6] text-gray-800 border-2  focus:outline-cyan-600  rounded-md  "
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
                  className="block mb-1 text-xs font-medium text-gray-600"
                >
                  Hotel Website
                </label>
                <input
                  className="w-full  px-1 sm:px-2 md:px-3 py-1 bg-[#F3F4F6] text-gray-800 border-2  focus:outline-cyan-600  rounded-md  "
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
                  className="block mb-1 text-xs font-medium text-gray-600"
                >
                  email
                </label>
                <input
                  className="w-full  px-1 sm:px-2 md:px-3 py-1 bg-[#F3F4F6] text-gray-800 border-2  focus:outline-cyan-600  rounded-md  "
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
                  className="block mb-1 text-xs font-medium text-gray-600"
                >
                  hotline Number
                </label>
                <input
                  className="w-full  px-1 sm:px-2 md:px-3 py-1 bg-[#F3F4F6] text-gray-800 border-2  focus:outline-cyan-600  rounded-md  "
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
                  className="block mb-1 text-xs font-medium text-gray-600"
                >
                  Reviews
                </label>
                <input
                  className="w-full  px-1 sm:px-2 md:px-3 py-1 bg-[#F3F4F6] text-gray-800 border-2  focus:outline-cyan-600  rounded-md  "
                  name="reviews"
                  id="reviews"
                  type="text"
                  placeholder="reviews "
                  required
                />
              </div>
              <div className="space-y-1 text-sm">
                <label
                  htmlFor="language"
                  className="block mb-1 text-xs font-medium text-gray-600"
                >
                  Language
                </label>

                <CreatableSelect
                  required
                  defaultValue={selectedOption}
                  onChange={setSelectedOption}
                  options={options}
                  isMulti
                />

              </div>
              <div className="space-y-1 text-sm">
                <label
                  htmlFor="ratings"
                  className="block mb-1 text-xs font-medium text-gray-600"
                >
                  ratings
                </label>
                <input
                  className="w-full  px-1 sm:px-2 md:px-3 py-1 bg-[#F3F4F6] text-gray-800 border-2  focus:outline-cyan-600  rounded-md  "
                  name="ratings"
                  id="ratings"
                  type="text"
                  placeholder="ratings"
                  required
                />
              </div>
              <div className="space-y-1 text-sm">
                <label
                  htmlFor=" details"
                  className="block mb-1 text-xs font-medium text-gray-600"
                >
                  details
                </label>

                <textarea
                  id="details"
                  className="w-full h-32  px-1 sm:px-2 md:px-3 py-1 bg-white text-gray-800 border-2  focus:outline-cyan-600  rounded-md "
                  name="details"
                ></textarea>
              </div>
            </div>
            <div className="space-y-6">

              <div className="space-y-1 text-sm">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    onChange={handleSelectAllChange}
                    checked={selectAll}
                  />
                  <span>Select All</span>
                </label>
              </div>

              {features.map((category) => (
                <label key={category} className=" flex  items-center space-x-2">
                  <input
                    type="checkbox"
                    name="roomFeatures"
                    value={category}
                    onChange={handleRoomFeatureChange}
                    checked={selectedRoomFeatures.includes(category)}
                  />
                  <span>{category}</span>
                </label>
              ))}
              <div className=" bg-white w-full  m-auto rounded-lg">
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
              {
                QA.length > 0 ? <> {
                  QA.map((singleQAPair, index) => <div key={index} className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                      {singleQAPair.question}
                    </div>
                    <div className="collapse-content">
                      <p>{singleQAPair.answer}</p>
                    </div>
                  </div>)
                }

                </> : <div className="flex justify-center items-center w-full mx-auto  border-gray-300 rounded-md border-4 border-dotted py-3">
                  <div onClick={() => setIsOpen(true)} className="bg-rose-500 text-white border w-fit rounded font-semibold cursor-pointer p-1 px-3 hover:bg-rose-500">
                    <span className="uppercase cursor-pointer">add questions and answer</span>
                  </div>
                </div>
              }

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
        <AddHotelQ_Ans QA={QA} setQA={setQA} isOpen={isOpen} setIsOpen={setIsOpen}></AddHotelQ_Ans>
      </div>
    </div>
  );
};

export default Addhotels;
