import { Carousel } from "antd";
import Container from "../../../../LayOut/Container";
import { useLoaderData } from "react-router-dom";
import { FaHospitalAlt, FaIcicles } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

const MadicalDetails = () => {
  const medicalData = useLoaderData();
  console.log(medicalData);

  const {
    doctors,
    details,
    hospital_name,
    ratings,
    type,
    specialites,
    winning_prizes,
    location,
    website,
  } = medicalData;

  return (
    <div className=" mt-16">
      <Container>
        <div className="w-full md:flex grid gap-4 md:gap-8">
          <div className="md:w-[60%]">
            <Carousel autoplay className="rounded-lg">
              {medicalData?.pictures.map((picture, i) => (
                <img
                  key={i}
                  className="md:h-[320px] w-full rounded-lg"
                  src={picture}
                  alt="hospital"
                />
              ))}
            </Carousel>

            <div className="flex justify-between  mt-3 mb-4">
              <div className="space-y-2">
                <span className="flex items-center gap-3">
                  <h3 className="text-2xl font-bold">{hospital_name}</h3>
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
              </div>
              <span className="flex items-center space-x-2">
                <FaHospitalAlt size={20} />
                <p className="text-xl">{type}</p>
              </span>
            </div>
            <div className="flex gap-10 text-center mt-10">
              
              {
                winning_prizes?.map((prize, index)=> <div className="border p-4" key={index}>
                  <p className="text-xl">{prize.award}</p>
                  <p>{prize.year}</p>
                </div> )
              }
            </div>
            <div className="mt-10 mb-4">
              <h3 className="mb-4 text-2xl font-bold">Description</h3>
              <p>{details}</p>
            </div>
            <a
              className="font-semibold btn-link "
              href={website}
              target="_blank"
            >
              Visit website
            </a>
          </div>
          <div className="md:w-[40%] border p-6">
            <h3 className="text-2xl font-bold pb-8 ">Doctors</h3>
            {medicalData?.doctors.map((doctor, i) => {
              <div className="border p-4 rounded-md" key={i}>
                <div className="flex space-x-2">
               
                  <span>
                    <h3 className="text-xl font-bold">{doctor.name} alskdjflasjdf </h3>
                    <p>{doctor.degree}</p>
                  </span>
                </div>
                <p>{doctor.medical_college}</p>
              </div>;
            })}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MadicalDetails;
