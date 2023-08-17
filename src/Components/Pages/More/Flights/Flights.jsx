import React, { useState } from "react";
import Container from "../../../../LayOut/Container";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import RoundTrip from "./Tabs/RoundTrip";
import OneWay from "./Tabs/OneWay";
import Card from "./Card";
import AirLineReview from "./AirLineReview";

const Flights = () => {
  return (
    <>
      <div className="flightBackground">
        <h3 className="text-center text-4xl font-bold text-white pt-12">
          Find the best flight for the right price
        </h3>
        <div className="flex justify-center mt-6 ">
          <Tabs>
            <TabList className="custom-tab-list">
              <Tab className=" custom-tab">Round Trip</Tab>
              <Tab className="custom-tab">One-way</Tab>
              <Tab className="custom-tab">Multi-city</Tab>
            </TabList>
            <TabPanel>
              <div>
                <RoundTrip />
              </div>
            </TabPanel>
            <TabPanel>
              <div>
                <OneWay />
              </div>
            </TabPanel>
            <TabPanel>
              <h2>Multi-city</h2>
            </TabPanel>
          </Tabs>
        </div>
      </div>
      <Card />
      <AirLineReview />
    </>
  );
};

export default Flights;
