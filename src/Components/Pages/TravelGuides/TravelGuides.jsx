import React, { useEffect, useState } from "react";
import { Card } from "antd";
import Container from "../../../LayOut/Container";
import { AutoComplete } from "antd";
import PageTitle from "../../PageTitle/PageTitle";

const { Meta } = Card;

const TravelGuides = () => {
  const [guides, setGuides] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedGuide, setSelectedGuide] = useState(null);

  useEffect(() => {
    fetch("/guides.json")
      .then((res) => res.json())
      .then((data) => setGuides(data));
  }, []);

  const options = guides.map((guide) => ({
    value: guide.country,
    label: `${guide.country}`,
  }));

  const handleSelectChange = (value) => {
    setSelectedValue(value);
  };

  // Function to open the modal and set the selected guide
  const openGuideDetails = (guide) => {
    setSelectedGuide(guide);
    const modal = document.getElementById("guide_modal");
    modal.open = true;
  };

  return (
    <div className="mt-20 min-h-screen">
      <PageTitle title="Travel Guides" />
      <Container>
        <div className="md:pt-10 px-10 text-center md:text-left md:flex justify-between">
          <h3 className="font-bold mb-4 text-xl tracking-widest underline underline-offset-2">
            Meet Our Guides
          </h3>

          <div className="flex gap-4 items-center justify-start my-5">
            <p>Search</p>
            <AutoComplete
              className=""
              style={{ width: 250 }}
              options={options}
              placeholder="country or name"
              filterOption={(inputValue, option) =>
                option.label.toUpperCase().indexOf(inputValue.toUpperCase()) !==
                -1
              }
              onChange={handleSelectChange}
            />
          </div>
        </div>

        {/* card */}
        <div className="place-items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {guides
            .filter(
              (guide) =>
                !selectedValue ||
                guide.country
                  .toLowerCase()
                  .includes(selectedValue.toLowerCase()) ||
                guide.name.toLowerCase().includes(selectedValue.toLowerCase())
            )
            .map((guide, index) => (
              <Card
                key={index}
                hoverable
                style={{
                  width: 260,
                  padding: 0,
                }}
              >
                <img
                  className="w-full object-cover p-0"
                  src={guide.picture}
                  alt="example"
                  onClick={() => openGuideDetails(guide)}
                  style={{ cursor: "pointer" }}
                />
                <div className="p-4">
                  <p
                    className="font-semibold text-lg tracking-widest"
                    onClick={() => openGuideDetails(guide)}
                  >
                    {guide.name}
                  </p>
                  <p>{guide.country}</p>
                  <p>Occupation : {guide.occupation}</p>
                  <p>ratings : {guide.rating}</p>
                </div>
              </Card>
            ))}
        </div>
      </Container>

      {/* Guide Details Modal */}
      {selectedGuide && (
        <dialog id="guide_modal" className="modal bg-transparent">
          <form method="dialog" className="modal-box">
            <button
              className="hover:text-white w-8 h-8 rounded-full absolute duration-500 right-2 top-2 hover:bg-[#79c7ff]"
              onClick={() => setSelectedGuide(null)}
            >
              ✕
            </button>
            <div className="">
              <h3>
                {" "}
                <span className="font-bold text-lg my-2">
                  {selectedGuide.name}{" "}
                </span>
                Details
              </h3>

              <div className="my-4 flex justify-centers items-center gap-5">
                <img
                  className="w-32 rounded-md"
                  src={selectedGuide.picture}
                  alt="Guide's picture"
                />
                <div className="leading-8">
                  <p>
                    <span className="underline underline-offset-4">
                      Speaks:{" "}
                    </span>
                    {selectedGuide.speaks.join(", ")}
                  </p>
                  <p>
                    <span className="underline underline-offset-4">
                      Guiding Locations:
                    </span>{" "}
                    {selectedGuide.guiding_locations.join(", ")}
                  </p>
                  <p>
                    <span className="underline underline-offset-4">
                      Specialties :
                    </span>{" "}
                    {selectedGuide.specialties.join(", ")}
                  </p>
                  <p>
                    <span className="underline underline-offset-4">
                      Rating:
                    </span>{" "}
                    {selectedGuide.rating}
                  </p>
                </div>
              </div>
              <div>
                <p>
                  <span className="font-bold">Age: </span> {selectedGuide.age}
                </p>
                <p>
                  <span className="font-bold">Gender:</span>{" "}
                  {selectedGuide.gender}
                </p>
                <p>{selectedGuide.description}</p>
              </div>
            </div>
          </form>
        </dialog>
      )}
    </div>
  );
};

export default TravelGuides;
