import { Link } from "react-router-dom";
import { AutoComplete } from "antd";
import { FaSearch } from "react-icons/fa";

import { useEffect, useState } from "react";
import axios from "axios";
import StoryCard from "./StoryCard";
import PageTitle from "../../PageTitle/PageTitle";

const TravelarStories = () => {
  const [stories, setStories] = useState([]);

  const [selectedValue, setSelectedValue] = useState("");
  const [selectedStory, setSelectedStory] = useState(null);

  const [radioOption, setRadioOption] = useState("all");

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_API}/story`).then((res) => {
      setStories(res.data);
    });
  }, []);

  // Filter `option.label` match the user type `input`
  const filterOption = (input, option) =>
    (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  const options = stories.map((story) => ({
    value: story.country,
    label: `${story.country}`,
  }));

  const handleSelectChange = (value) => {
    setSelectedValue(value);
  };

  const handleRadioChange = (e) => {
    setRadioOption(e.target.value);
  };

  return (
    <div className=" mx-auto mt-20 pb-10 max-w-[1920px]  min-h-screen">
      <PageTitle title="Travel Stories"/>
      <div className="mx-auto">
        {/* banner */}
        <h2 className="text-center text-3xl tracking-widest underline underline-offset-2 ">
          Discover the Tales from the Trail
        </h2>
        {/* food and drink  */}
        <div>
          <div className="mx-auto text-center mt-2">
            <p className="font-light tracking-wider mt-3">
              Dig into the best restaurants and bars, street food, and culinary
              hotspots around the world. <br /> Whos hungry?
            </p>
          </div>

          <div className="flex flex-col justify-start   my-5 px-4">
            <span className="font-light my-1">Search here</span>
            <AutoComplete
              className=""
              style={{ width: 250 }}
              options={options}
              placeholder="Search by country or name"
              filterOption={(inputValue, option) =>
                option.label.toUpperCase().indexOf(inputValue.toUpperCase()) !==
                -1
              }
              onChange={handleSelectChange}
            />
          </div>

          {stories
            .filter(
              (story) =>
                !selectedValue ||
                story.country
                  .toLowerCase()
                  .includes(selectedValue.toLowerCase())
            )
            .map((story, index) => (
              <StoryCard key={story._id} story={story} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default TravelarStories;
