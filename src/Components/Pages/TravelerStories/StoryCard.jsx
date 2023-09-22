import { Link } from "react-router-dom";
const StoryCard = ({ story }) => {


  return (
    <div className="my-4">
     

      <div className="mt-10">
        {/* article1 */}
        <div className="flex flex-col lg:flex-row mx-auto mb-10 lg:mx-0 justify-between gap-6 items-center p-4">
          <div className="lg:w-[40%] w-full">
            <img
              className="rounded-md w-full"
              src={story.url}
              alt=""
            />
          </div>
          <div className="lg:w-[60%] w-full ">
            <h2 className="text-2xl wides  font-bold">
              {story.title}
            </h2>
            <p className=" my-2 text-justify">
              {story.description}
            </p>
            <Link to={`/travelStory/${story._id}`}>
              <button className="btn-link text-blue-400">
                Read More
              </button>
            </Link>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default StoryCard;
