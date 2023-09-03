import React, { useState } from "react";
import { TbFidgetSpinner } from "react-icons/tb";
import { imageUpload } from "../../../../api/utilities";
import { addresturants } from "../../../../api/bookshotels";

const AddResturants = () => {
  const [loading, setLoading] = useState(false);
  const [selectedRoomFeatures, setSelectedRoomFeatures] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    const form = event.target;
    const title = form.title.value;
    // const state = form.state.value;
    // const city = form.city.value;
    // const street = form.street.value;
    // const postal_code = form.postal_code.value;
    // const country = form.country.value;
    const cuisine = form.cuisine.value;
    const hours = form.hours.value;
     const menu = form.menu.value;
    const email = form.email.value;
    const number = form.number.value;
    const reviews = form.reviews.value;
    // const speciality = form.speciality.value;
    const food = form.food.value;
    const service = form.service.value;
    const atmosphere = form.atmosphere.value;
    // const features = form.features.value;
    const faq = form.faq.value;
    const description = form.description.value;
    const picture = event.target.image.files[0];

    const address = {
      street: form.street.value,
      city: form.city.value,
      state: form.state.value,
      postal_code: parseFloat(form.postal_code.value),
      country: form.country.value,
    };
    const bookresturants = {
      title,
      address,
      cuisine,
      hours,
      menu,
      email,
      number,
      reviews,
      speciality: selectedspecial,
      ratings: {
        food: parseFloat(food),
        service: parseFloat(service),
        atmosphere: parseFloat(atmosphere),
      },
      features: selectedRoomFeatures,
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
          speciality: selectedspecial,
          features: selectedRoomFeatures,
          faq,
          description,
          ratings: parseFloat(ratings),
          picture: data.data.display_url,
        };

        // Post restaurant data to the server
        addresturants(bookresturants)
          .then((data) => {
            console.log(data);
            setUploadButtonText("Uploaded!");
            setLoading(false);

            alert("Restaurant Added!");
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
    "Elegant Dining",
    "Private Events Space",
    "Wine and Cocktail Bar",
    "Live Music on Fridays",
    "Outdoor Patio Seating",
  ];

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

  const [selectedspecial, setSelectedspecial] = useState([]);
  const [selectAlls, setSelectAlls] = useState(false);

  const specialties = [
    "Signature Seafood Risotto",
    "Prime Rib with Truffle Butter",
    "Decadent Chocolate Fondue",
  ];

  const handleSpecialChange = (event) => {
    const specialties = event.target.value;
    if (event.target.checked) {
      // Add the feature to the selectedRoomFeatures array if it's checked
      setSelectedspecial([...selectedspecial, specialties]);
    } else {
      // Remove the feature from the selectedRoomFeatures array if it's unchecked
      setSelectedspecial(
        selectedspecial.filter((item) => item !== specialties)
      );
    }
  };

  const handleSelectAllChanges = (event) => {
    const checked = event.target.checked;
    setSelectAlls(checked);

    // If "Select All" is checked, set all room features as selected; otherwise, clear the selectedRoomFeatures array.
    if (checked) {
      setSelectedspecial(specialties);
    } else {
      setSelectedspecial([]);
    }
  };


//  menu item
const [menuItems, setMenuItems] = useState([]);
const [menuItem, setMenuItem] = useState({
  name: "",
  description: "",
  price: 0,
});


const handleMenuItemChange = (e) => {
  const { name, value } = e.target;
  setMenuItem((prevItem) => ({
    ...prevItem,
    [name]: name === "price" ? parseFloat(value) : value,
  }));
};

const addMenuItem = () => {
  if (menuItem.name && menuItem.description && menuItem.price > 0) {
    setMenuItems((prevMenu) => [...prevMenu, menuItem]);
    setMenuItem({ name: "", description: "", price: 0 });
  } else {
    alert("Please fill in all menu item details.");
  }
};

const removeMenuItem = (index) => {
  const updatedMenu = [...menuItems];
  updatedMenu.splice(index, 1);
  setMenuItems(updatedMenu);
};









  return (
    <div className="max-w-screen-lg mx-auto px-4 py-8">
      <div>
        <h2 className="text-2xl mt-10 mb-6">Add Restaurants </h2>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="space-y-1 text-sm">
              <label
                htmlFor="title"
                className="block text-gray-600 text-lg mb-2"
              >
                Title
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-cyan-300 focus:outline-cyan-500 rounded-md"
                name="title"
                id="title"
                type="text"
                placeholder="Title"
                required
              />
            </div>
            <div className="space-y-1 text-sm">
              <label
                htmlFor="city"
                className="block text-gray-600 text-lg mb-2"
              >
                city
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-cyan-300 focus:outline-cyan-500 rounded-md"
                name="city"
                id="city"
                type="text"
                placeholder="city"
                required
              />
            </div>
            <div className="space-y-1 text-sm">
              <label
                htmlFor="country"
                className="block text-gray-600 text-lg mb-2"
              >
                country
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-cyan-300 focus:outline-cyan-500 rounded-md"
                name="country"
                id="country"
                type="text"
                placeholder="country"
                required
              />
            </div>
            <div className="space-y-1 text-sm ">
              <label
                htmlFor="address"
                className="block text-gray-600 text-lg mb-2"
              >
                Address:
              </label>
              <div className="flex items-center gap-2">
                <input
                  className="w-32 px-4 py-3 text-gray-800 border border-cyan-300 focus:outline-cyan-500 rounded-md"
                  name="street"
                  id="street"
                  type="text"
                  placeholder="Address"
                  required
                />
                <input
                  className="w-32 px-4 py-3 text-gray-800 border border-cyan-300 focus:outline-cyan-500 rounded-md"
                  name="state"
                  id="state"
                  type="text"
                  placeholder="state"
                  required
                />
                <input
                  className="w-32 px-4 py-3 text-gray-800 border border-cyan-300 focus:outline-cyan-500 rounded-md"
                  name="postal_code"
                  id="postal_code"
                  type="text"
                  placeholder="postal_code"
                  required
                />
              </div>
            </div>
            <div className="space-y-1 text-sm">
              <label
                htmlFor="cuisine"
                className="block text-gray-600 text-lg mb-2"
              >
                Cuisine
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-cyan-300 focus:outline-cyan-500 rounded-md"
                name="cuisine"
                id="cuisine"
                type="text"
                placeholder="Cuisine"
                required
              />
            </div>
            <div className="space-y-1 text-sm">
              <label
                htmlFor="menu"
                className="block text-gray-600 text-lg mb-2"
              >
                Menu Item Name
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-cyan-300 focus:outline-cyan-500 rounded-md"
                type="text"
                name="menu"
                required
                id="email"
                placeholder="Email"
              />
            </div>
           
           
           

            <div className="space-y-1 text-sm">
              <label
                htmlFor="email"
                className="block text-gray-600 text-lg mb-2"
              >
                Email
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-cyan-300 focus:outline-cyan-500 rounded-md"
                name="email"
                id="email"
                type="text"
                placeholder="Email"
                required
              />
            </div>
            <div className="space-y-1 text-sm">
              <label
                htmlFor="hours"
                className="block text-gray-600 text-lg mb-2"
              >
                Hours
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-cyan-300 focus:outline-cyan-500 rounded-md"
                name="hours"
                id="hours"
                type="time"
                placeholder="Hours of Operation"
                required
              />
            </div>
            <div className="space-y-1 text-sm">
              <label
                htmlFor="reviews"
                className="block text-gray-600 text-lg mb-2"
              >
                Reviews
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-cyan-300 focus:outline-cyan-500 rounded-md"
                name="reviews"
                id="reviews"
                type="text"
                placeholder="Reviews"
                required
              />
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-1 text-sm">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  onChange={handleSelectAllChanges}
                  checked={selectAlls}
                />
                <span>Select All</span>
              </label>
            </div>

            {specialties.map((category) => (
              <label key={category} className=" flex  items-center space-x-2">
                <input
                  type="checkbox"
                  name="specialties"
                  value={category}
                  onChange={handleSpecialChange}
                  checked={selectedspecial.includes(category)}
                />
                <span>{category}</span>
              </label>
            ))}

            <div className="space-y-1 text-sm flex gap-2 items-center">
              <label
                htmlFor="ratings"
                className="block text-gray-600 text-lg mb-2"
              >
                Ratings
              </label>
              <input
                className="w-32 px-4 py-3 text-gray-800 border border-cyan-300 focus:outline-cyan-500 rounded-md"
                name="food"
                id="ratings"
                type="number"
                step="0.1"
                min="0"
                max="5"
                placeholder="food"
                required
              />
              <input
                className="w-32 px-4 py-3 text-gray-800 border border-cyan-300 focus:outline-cyan-500 rounded-md"
                name="service"
                id="ratings"
                type="number"
                step="0.1"
                min="0"
                max="5"
                placeholder="service"
                required
              />
              <input
                className="w-32 px-4 py-3 text-gray-800 border border-cyan-300 focus:outline-cyan-500 rounded-md"
                name="atmosphere"
                id="ratings"
                type="number"
                step="0.1"
                min="0"
                max="5"
                placeholder="atmosphere"
                required
              />
            </div>
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
                  name="features"
                  value={category}
                  onChange={handleRoomFeatureChange}
                  checked={selectedRoomFeatures.includes(category)}
                />
                <span>{category}</span>
              </label>
            ))}
            <div className="p-4 bg-white w-full m-auto rounded-lg">
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
                FAQ
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-cyan-300 focus:outline-cyan-500 rounded-md"
                name="faq"
                id="faq"
                type="text"
                placeholder="FAQ"
                required
              />
            </div>
            <div className="space-y-1 text-sm">
              <label
                htmlFor="number"
                className="block text-gray-600 text-lg mb-2"
              >
                Number
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-cyan-300 focus:outline-cyan-500 rounded-md"
                name="number"
                id="number"
                type="text"
                placeholder="Number"
                required
              />
            </div>
            <div className="space-y-1 text-sm">
              <label
                htmlFor="description"
                className="block text-gray-600 text-lg mb-2"
              >
                Description
              </label>
              <textarea
                id="description"
                className="block rounded-md focus:rose-300 w-full h-32 px-4 py-3 text-gray-800 border border-cyan-300 focus:outline-cyan-500"
                name="description"
                placeholder="Description"
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
