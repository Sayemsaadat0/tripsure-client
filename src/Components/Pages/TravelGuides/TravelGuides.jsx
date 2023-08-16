import GuideCard from "./GuideCard";
import "./TravelGuides.css";
const TravelGuides = () => {
  return (
    <div>

      <div className="mx-auto">
        {/* Banner  */}
        <div className="bg-guide bg-cover bg-center bg-no-repeat mx-auto h-[350px] md:h-[450px] relative">
          <div className="mx-5 lg:mx-16 absolute bottom-10">
            <p className="text-white text-xl md:text-2xl my-2">
              Traveler's Guides
            </p>
            <h1 className="text-white text-2xl md:text-5xl font-bold">
              Best of the Best Destinations
            </h1>
          </div>
        </div>
      </div>

      <GuideCard />

    </div>
  );
};

export default TravelGuides;
