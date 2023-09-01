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
      <div className="max-w-7xl mx-auto"><OneWay /></div>
      <AirLineReview />
    </>
  );
};

export default Flights;
