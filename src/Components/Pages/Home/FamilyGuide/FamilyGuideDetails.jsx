import React, { useEffect, useState } from "react";
import Container from "../../../../LayOut/Container";
import KidsGuide from "./KidsGuide";
import HoneyMoons from "./HoneyMoons";
import FamilyBeach from "./FamilyBeach";
import Zoo from "./Zoo";
import ThemePark from "./ThemePark";
import axios from "axios";
import CommonSwiperForFamilyAndSummer from "./CommonSwiperForFamilyAndSummer";
import LazyLoad from "react-lazy-load";
import PageTitle from "../../../PageTitle/PageTitle";
// import div from '../../../../LayOut/div';

const FamilyGuideDetails = () => {
  const [inspiredByFamily, setInspiredByFamily] = useState([]);
  const [summerData, setSummerData] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_API}/allFamilyGuide/family`)
      .then((res) => {
        setInspiredByFamily(res.data);
      });
  }, []);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_API}/allFamilyGuide/summer`)
      .then((res) => {
        setSummerData(res.data);
      });
  }, []);

  return (
    <div>
      {/* todo by sayem need to dynamix this datas */}
      <PageTitle title="Family Guides"/>
      <div>
        {/* introduction */}
        <Container>
          <div>
            <section className="pt-20 mx-4">
              <div className="md:w-[70%] mx-auto">
                <h1 className="text-4xl text-center underline underline-offset-4 tracking-widest font-semibold">
                  Family travel, handled
                </h1>

                <h3 className="text-xl text-center mt-4 tracking-widest">
                  An inspo-packed playbook filled with tips, destination ideas,
                  and more.
                </h3>
              </div>
              <div className="mt-10 mb-10 ">
                <p className="md:w-[70%] mx-auto text-xl ">
                  Let’s face it: If there are a million-gazillion-bajillion—in
                  5-year-old parlance—ways to be a family, there are a
                  million-gazillion-bajillion-times-infinity ways to travel
                  together.
                </p>
                <p className="md:w-[70%] mx-auto text-xl mt-5">
                  Below, you'll find a family-travel playbook packed with
                  inspiration and guidance from our forums, reviews, and
                  experts. There are road-trip ideas that promise to tear your
                  teens away from TikTok. There are city guides that help you
                  maximize time so that you’re not still stuck on the Brooklyn
                  Bridge at nap-time. There’s insight from our community about
                  nailing trips with little kids, trips with older kids, and
                  trips with senior parents. You’ll also find ideas for getting
                  your next adventure into motion—even if you’ve got no idea
                  where to go.
                </p>
              </div>
            </section>
          </div>
        </Container>

        {/* Tips part */}
        <section className="mt-10 w-full h-full">
          <Container>
            <div>
              <img
                className="w-full min-h-[200px] my-10"
                src="
                 https://i.ibb.co/zGtGhxT/trip-ideas.png"
                alt="BannerPhoto"
              />
              <KidsGuide></KidsGuide>
              <HoneyMoons></HoneyMoons>
              <LazyLoad>
                <img
                  className="w-full my-10 min-h-[200px]"
                  src="https://i.ibb.co/4t9BwDQ/footar.png"
                  alt="BannerPhoto"
                />
              </LazyLoad>
              <FamilyBeach></FamilyBeach>
              <Zoo></Zoo>
              <ThemePark></ThemePark>
            </div>
          </Container>
        </section>

        {/* get inspired by real familys */}
        <section className="mb-10">
          <Container>
            <div>
              {/* inspiration */}
              <div className="mt-10">
                <h2 className="pt-10  text-2xl md:text-3xl text-center font-semibold underline underline-offset-2 tracking-widest">
                  Get inspired by real family
                </h2>
                <div className="mt-10  gap-5 md:p-4">
                  <CommonSwiperForFamilyAndSummer
                    SwiperData={inspiredByFamily}
                  ></CommonSwiperForFamilyAndSummer>
                </div>
              </div>
              {/* Summer Trip tips for family */}
              <div className="mt-10">
                <h2 className="pt-10  text-2xl md:text-3xl text-center font-semibold underline underline-offset-2 tracking-widest">
                  Summer Trip tips for family
                </h2>
                <div className="mt-10 md:p-4">
                  <CommonSwiperForFamilyAndSummer
                    SwiperData={summerData}
                  ></CommonSwiperForFamilyAndSummer>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </div>
    </div>
  );
};

export default FamilyGuideDetails;
