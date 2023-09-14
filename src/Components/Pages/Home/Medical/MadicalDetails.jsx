import React from "react";
import Container from "../../../../LayOut/Container";

const MadicalDetails = () => {
  return (
    <div className="mt-20 h-screen ">
      <Container>
        <div className="md:h-[380px] h-auto w-[80%] mx-auto ">
          <img
            className="rounded-lg h-full w-full "
            src="https://i.ibb.co/41xnK2X/image.png"
            alt="madical"
          />
          <div className="flex flex-row items-center justify-between mt-2">
            <h3 className="text-2xl font-bold">Health Guidelines</h3>
            <p className="font-bold">Location</p>
          </div>

          <div className="flex mt-10 ">
            <div className=" space-y-3">
              <h3 className="text-xl font-bold">Discription</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                repellat et eum modi ex, eius asperiores at similique minima
                dolor odio nam corrupti quam id ut impedit velit consequatur qui
                aspernatur expedita est amet. Quibusdam libero cumque officia
                voluptas qui! Corrupti dolor corporis autem cupiditate accusamus
                expedita dolorem quae sint.
              </p>
              <button className="btn-primary">Button</button>
            </div>
            <div>
              <img className="rounded-lg hover:scale-105 transition" src="https://i.ibb.co/9Zm7TJp/image.png" alt="" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MadicalDetails;
