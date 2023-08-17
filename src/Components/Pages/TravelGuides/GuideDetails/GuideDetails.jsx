
import GuideBanner from "./GuideBanner";
import GuidePlaces from "./GuidePlaces";
import GuideHotels from "./GuideHotels";

const GuideDetails = () => {
  return (
    <div className="max-w-7xl mx-5 md:mx-auto py-10">
      {/* title  */}
      <h1 className="text-2xl ml-16 md:text-4xl font-bold text-black">
        <span className="text-[#19a0c9]">Explore</span> Ho Chi Minh City
      </h1>
      {/* featured image  */}
      <GuideBanner />
      {/* About  */}
      <div className="max-w-5xl mx-auto">
        <h1 className="font-bold text-3xl my-5 text-black">
          The Pearl of the Far East; a dynamic city that dazzles and delights
        </h1>
        <p className="text-xl text-black text-justify">
          As Vietnam’s largest economic center and cultural capital, Ho Chi Minh
          City boasts soaring skyscrapers that tower over charming French
          colonial structures and traditional pagodas from Saigon’s yesteryear.
          Past the bustling streets and dizzying traffic, uncover the delicious
          street food, booming nightlife and historical landmarks that give this
          city its distinct appeal. Visit The War Remnants Museum for a glimpse
          into the Vietnam War, wander down Bui Vien Street for cheap beer or
          cruise through the Mekong Delta for sprawling views of paddy fields
          and houseboats.
        </p>
      </div>

      {/* Details  */}
      <div className="mt-16">
        <h1 className="font-bold text-3xl my-5 hidden md:block text-[#19a0c9] pb-3 w-[30%] border-b-8 border-[#19a0c9]">
          Essential Ho Chi Minh City
        </h1>
      </div>
      {/* Do in this city  */}
      <GuidePlaces />
      {/* hotels in this city  */}
      <GuideHotels />
    </div>
  );
};

export default GuideDetails;
