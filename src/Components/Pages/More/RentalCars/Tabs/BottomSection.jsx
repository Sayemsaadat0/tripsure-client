import React from "react";
import { GiWorld } from "react-icons/gi";
import { FaCcAmazonPay } from "react-icons/fa";
import Container from "../../../../../LayOut/Container";
import { Rating } from "@smastrom/react-rating";

const BottomSection = () => {
  return (
    <div className="bg-base-200 py-16">
      <Container>
        <div className="grid sm:grid-cols-3 gap-6 mx-4 sm:mx-0">
          <div className="text-black grid justify-items-center text-center">
            <span>
              <GiWorld size={42} />
            </span>
            <h3 className="text-2xl font-medium">Worldwide Coverage</h3>
            <p>
              Searching over 60,000 locations worldwide to find you the right
              car at the right price
            </p>
          </div>
          <div className="text-black grid justify-items-center text-center">
            <FaCcAmazonPay size={42} />
            <h3 className="text-2xl font-medium">Worldwide Coverage</h3>
            <p>
              Searching over 60,000 locations worldwide to find you the right
              car at the right price
            </p>
          </div>
          <div className="text-black grid justify-items-center text-center">
            <Rating style={{ maxWidth: 180 }} value={4} />
            <h3 className="text-2xl font-medium">Worldwide Coverage</h3>
            <p>
              Searching over 60,000 locations worldwide to find you the right
              car at the right price
            </p>
          </div>
        </div>
        <div className="mt-14 space-y-3 mx-4 sm:mx-0">
          <h3 className="text-xl font-semibold">Find the best rental car at the right price</h3>
          <p>
            As the world’s largest travel site, Tripadvisor makes every step of
            your car rental experience simple and fast. Whether you’re ready to
            explore the coast and catch some sun in a sleek convertible, or
            looking for a large-capacity vehicle for a family road trip, we’ll
            find you the perfect rental car. You can easily filter your search
            results on criteria like vehicle type, pick-up and drop-off times,
            and suppliers like Hertz, Enterprise, Avis, Budget, Alamo and more.
            You’ll also have the ability to customize your pick-up and drop-off
            locations, so one-way trips have never been easier.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim error
            cupiditate fugit dicta quaerat quis in, a perspiciatis ipsa dolorem
            numquam maxime voluptatibus veritatis modi repudiandae veniam
            doloremque quidem cum unde accusamus! Quasi non deserunt laborum!
            Quis doloremque vel sed dicta dolorem voluptatibus, harum illo
            adipisci in architecto nostrum tempora!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            mollitia ad rem quia! Voluptatum minus modi maiores consequuntur
            ipsam non ducimus. Eos labore impedit totam possimus earum amet
            cumque molestias voluptatibus nulla. Corporis facere facilis quaerat
            natus iure quis delectus?
          </p>
        </div>
      </Container>
    </div>
  );
};

export default BottomSection;
