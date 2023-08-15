import React from "react";
import Container from "../../../../LayOut/Container";

const Card = () => {
  return (
    <Container>
      <div className="my-12 grid sm:grid-cols-2 md:grid-cols-3 gap-5">
        <div className="border p-3">
          <div className="relative">
            <div className="avatar-group -space-x-6 -top-10 left-32 absolute">
              <div className="avatar">
                <div className="w-12 h-12 rounded-full">
                  <img
                    className="rounded-full"
                    src="https://i.ibb.co/5jbb1TW/image.png"
                  />
                </div>
              </div>
              <div className="avatar z-10">
                <div className="w-14 h-14 rounded-full">
                  <img
                    className="rounded-full"
                    src="https://i.ibb.co/5jbb1TW/image.png"
                  />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12 h-12 ">
                  <img
                    className="rounded-full"
                    src="https://i.ibb.co/5jbb1TW/image.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 space-y-2 text-center">
            <h3 className="text-green-500 text-2xl font-medium">
              See the last reviews
            </h3>
            <p>Read airline reviews from our global traveler community</p>
          </div>
        </div>
        <div className="border p-3">
          <div className=" relative">
            <div className="avatar-group -space-x-6 -top-10 left-32 absolute">
              <div className="avatar">
                <div className="w-12 h-12 rounded-full">
                  <img
                    className="rounded-full"
                    src="https://i.ibb.co/5jbb1TW/image.png"
                  />
                </div>
              </div>
              <div className="avatar z-10">
                <div className="w-14 rounded-full">
                  <img
                    className="rounded-full"
                    src="https://i.ibb.co/5jbb1TW/image.png"
                  />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12 h-12 ">
                  <img
                    className="rounded-full"
                    src="https://i.ibb.co/5jbb1TW/image.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 space-y-2 text-center">
            <h3 className="text-green-500 text-2xl font-medium">
              See the last reviews
            </h3>
            <p>Read airline reviews from our global traveler community</p>
          </div>
        </div>
        <div className="border p-3">
          <div className="relative">
            <div className="avatar-group -space-x-6 -top-10 left-32 absolute">
              <div className="avatar">
                <div className="w-12 h-12 rounded-full">
                  <img
                    className="rounded-full"
                    src="https://i.ibb.co/5jbb1TW/image.png"
                  />
                </div>
              </div>
              <div className="avatar z-10">
                <div className="w-14 rounded-full">
                  <img
                    className="rounded-full"
                    src="https://i.ibb.co/5jbb1TW/image.png"
                  />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12 h-12 ">
                  <img
                    className="rounded-full"
                    src="https://i.ibb.co/5jbb1TW/image.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 space-y-2 text-center">
            <h3 className="text-green-500 text-2xl font-medium">
              See the last reviews
            </h3>
            <p>Read airline reviews from our global traveler community</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Card;
