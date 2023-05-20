import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SubCategoryCard from "./SubCategoryCard/SubCategoryCard";
import AOS from "aos";
import "aos/dist/aos.css";

const SubCategory = ({ cars, trucks, policeCars }) => {
    return (
        <div>
            <div>
                <h1 className="text-4xl font-bold mb-5 text-center mt-10">Find Your Favorite Category</h1>
            </div>
            <div>
                <Tabs>
                    <TabList className={"flex gap-10 justify-center mb-10"}>
                        <Tab className={"btn rounded-lg"}>Sports Car</Tab>
                        <Tab className={"btn"}>Truck</Tab>
                        <Tab className={"btn"}>Mini Police Car</Tab>
                    </TabList>

                    <TabPanel>
                        <div data-aos="zoom-in" className="grid grid-cols-1 md:grid-cols-3 justify-items-center">
                            {cars.slice(0, 3).map((car) => (
                                <SubCategoryCard key={car._id} car={car} what="cars"></SubCategoryCard>
                            ))}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div data-aos="zoom-out" className="grid grid-cols-1 md:grid-cols-3 justify-items-center">
                            {trucks.map((truck) => (
                                <SubCategoryCard key={truck._id} car={truck} what="trucks"></SubCategoryCard>
                            ))}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div data-aos="zoom-in" className="grid grid-cols-1 md:grid-cols-3 justify-items-center">
                            {policeCars.map((car) => (
                                <SubCategoryCard key={car._id} car={car} what="police-cars"></SubCategoryCard>
                            ))}
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default SubCategory;
