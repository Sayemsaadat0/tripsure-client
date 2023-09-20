import { Carousel } from "antd";
import Container from "../../../../LayOut/Container";
import { useLoaderData } from "react-router-dom";
import { FaHospitalAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { AiTwotonePhone } from "react-icons/ai";

const MadicalDetails = () => {
  const medicalData = useLoaderData();

  const {
    doctors,
    details,
    hospital_name,
    ratings,
    type,
    contact_no,
    specialites,
    winning_prizes,
    location,
    website,
    open_hours,
    medical_departments,
  } = medicalData;

  return (
    <div className=" mt-20">
      <Container>
        <div className=" w-full">
          <Carousel autoplay className="rounded-lg">
            {medicalData?.pictures.map((picture, i) => (
              <img
                key={i}
                className=" h-[420px] object-cover w-full rounded-lg"
                src={picture}
                alt="hospital"
              />
            ))}
          </Carousel>

          <div className="flex justify-between  mt-3 mb-4">
            <div className="space-y-2">
              <span className="flex items-center gap-3">
                <h3 className="sm:text-2xl text-lg font-bold">
                  {hospital_name}
                </h3>
                <span className="rating rating-sm flex items-center gap-1">
                  <p className="font-medium">{ratings}</p>
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star"
                  />
                </span>
              </span>
              <span className="flex items-center space-x-1">
                <IoLocationSharp size={22} />
                <p className="text-lg">{location}</p>
              </span>
              <span className="flex items-center space-x-1">
                <AiTwotonePhone size={22} />
                <p className="text-lg">{contact_no}</p>
              </span>
            </div>

            <span className="flex items-center space-x-2">
              <FaHospitalAlt size={20} />
              <p className="text-xl">{type}</p>
            </span>
          </div>
            <div className="flex gap-10 text-center my-10">
              {winning_prizes?.map((prize, index) => (
                <div
                  className="border hover:text-white hover:bg-[#303131] duration-500 rounded-md p-4"
                  key={index}
                >
                  <p className="text-xl font-semibold">{prize.award}</p>
                  <p>{prize.year}</p>
                </div>
              ))}
            </div>
          <div className=" md:flex grid gap-4 ">
            <div className="col-span-1">
              <div className="mt-10 mb-4 md:w-[60%]">
                <h3 className="mb-4 text-2xl font-bold">Description</h3>
                <span>{details}</span>
              </div>
              <a
                className="font-semibold btn-link "
                href={website}
                target="_blank"
              >
                Visit website
              </a>
              <div className="my-10 ">
                <h3 className=" md:text-2xl text-lg font-semibold capitalize">
                  {" "}
                  the Iconic Department this Medical has
                </h3>

                {medical_departments?.map((p, index) => (
                  <li className="" key={index}>
                    {p}
                  </li>
                ))}
              </div>
            </div>
            <div className="col-span-1 mb-4">
              <h3 className="sm:text-xl md:text-2xl text-lg font-semibold capitalize mb-2">
                Meet Some Doctors
              </h3>
              <div className="space-y-2">
                {doctors.map((d, index) => (
                  <div className=" border p-3 sm:w-[60%] md:w-full" key={index}>
                    <p>{d.name}</p>
                    <p>Degree : {d.degree}</p>
                    <p>{d.medical_college}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* s */}
      </Container>
    </div>
  );
};

export default MadicalDetails;

