import { useEffect, useState } from "react";
import KeepExploring from "../KeepExploring";
import { useParams } from "react-router-dom";

const Stories = () => {
  const [story, setStory] = useState({});
  const { id } = useParams()
  console.log(id)
  useEffect(() => {
    fetch(`http://localhost:1000/story/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setStory(data);
        console.log(data)
      })
  }, [])
  const { description, imgUrlTitleDescription, title, url, whenYouGo, withYou } = story
  console.log(imgUrlTitleDescription)
  return (
    <div className="max-w-5xl w-full mx-auto mt-16 my-10">
      <article>
        {/* title  */}
        <h1 className="text-black text-3xl my-5  md:text-5xl font-bold">
          Where to go between July 4th and Labor Day
        </h1>
        <div className="bg-cover bg-center  mx-auto ">
          <h4 className="text-xl md:text-3xl font-bold text-black my-5">
            {title}
          </h4>
          <img className="w-full max-h-[500px] h-full"
            src={url}
            alt=""
          />
          <p className="text-xl text-black text-justify">
            {description}
          </p>
        </div>
        <div className="w-[90%] md:w-[70%] lg:w-[60%] mx-auto my-3 lg:my-10">

          <div className="px-3 md:px-5 lg:px-0">
            {
              imgUrlTitleDescription?.map(a => <div key={a.title}>
                <h2 className="font-bold text-3xl my-5 text-black">{a.title}</h2>
                <img
                  className="w-full max-h-[400px]"
                  src={a.url}
                  alt=""
                />
                <p className="text-xl text-black text-justify">
                  {a.desceription}
                </p>
              </div>)
            }
          </div>
        </div>
      </article>
      <KeepExploring />
    </div>
  );
};

export default Stories;
