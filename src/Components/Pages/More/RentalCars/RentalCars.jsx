import React from "react";
import Container from "../../../../LayOut/Container";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import FindRentalCars from "./Tabs/FindRentalCars";
import BottomSection from "./Tabs/BottomSection";

const RentalCars = () => {
  return (
    <div className="">
      <h3 className="text-4xl font-semibold text-center">
        Search for the Best Rental Car Deals
      </h3>
      <div className=" h-auto mt-12">
        <Tabs>
          <TabList className="custom-tab-list ">
            <Tab className=" custom-tab">Find rental cars</Tab>
            <Tab className="custom-tab">Browse locations</Tab>
          </TabList>
          <TabPanel>
            <div className="h-auto">
              <FindRentalCars />
              <BottomSection />
            </div>
          </TabPanel>
          <TabPanel>
            <h2>Browse locations</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default RentalCars;
