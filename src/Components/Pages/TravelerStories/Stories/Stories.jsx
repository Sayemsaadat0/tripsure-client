import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaLocationDot } from 'react-icons/fa6';

const Stories = () => {
  const [story, setStory] = useState({});
  const { id } = useParams()
  useEffect(() => {
    fetch(`http://localhost:1000/story/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setStory(data);
        console.log(data)
      })
  }, [])
  const { description, imgUrlTitleDescription, title, url, photoURL
    , country, postedBy } = story
  return (
    <div className=" w-full max-w-[1920px] mx-auto mt-20  my-10">
      <article className=" mx-auto  px-6">

        {/* user infor */}
        <div className="my-4 flex items-center gap-4">
          <img className="w-16 rounded-full" src={photoURL} alt="" />

          <div>
            <p className="text-xl">
              {postedBy}
            </p>

            <p className="flex gap-2 items-center ">
             <FaLocationDot></FaLocationDot> {country}
            </p>
          </div>
        </div>
        {/* title  */}
        <h1 className=" text-3xl font-semibold my-5 tracking-widest">
          {title}
        </h1>
        <div className="mx-auto lg:flex">
          <img className="h-[450px] rounded-md object-contain "
            src={url}
            alt=""
          />
          <div className="lg:w-2/4  flex lg:justify-center ">
            <p className="text-xl  py-4 lg:py-0 lg:px-10">
              {description}
            </p>
          </div>
        </div>
        <div className="mx-auto my-3 lg:my-10">

          <div className=" md:px-5 lg:px-0 ">
            {
              imgUrlTitleDescription?.map(a => <div className="py-10" key={a.title}>
                <div className="  ">
                  <div className="">
                    <h2 className="text-3xl font-semibold my-5 tracking-widest">{a.title}</h2>
                    <p className="text-xl lg:w-[60%]">
                      {a.desceription}
                    </p>
                  </div>
                  <img
                    className="w-full lg:w-[70%] object-contain  py-4"
                    src={a.url}
                    alt=""
                  />

                </div>
              </div>)
            }
          </div>
        </div>
      </article>
    </div>
  );
};

export default Stories;
