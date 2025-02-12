import React from "react";
import RootLayout from "../../layout/RootLayout";
import TopSearchCard from "./TopSearchCard";

const TopSearch = () => {
  return (
    <RootLayout className="space-y-12">
      {/* Tag */}
      <div className="w-full flex items-center justify-center text-center">
        <h1 className="text-3xl text-neutral-800 font-bold">
          Top Search <span className="text-red-500">Route</span>
        </h1>
      </div>
      {/* Top Serach tickets rotues  Card */}
      <div className="w-full grid grid-cols-3 gap-5">
        <TopSearchCard
          routeFrom={"Kathmandu"}
          routeTo={"Dharan"}
          timeDuration={"12 Hrs"}
          price={"1500"}
        />
        <TopSearchCard
          routeFrom={"Dharan"}
          routeTo={"Kathmandu"}
          timeDuration={"12 Hrs"}
          price={"1500"}
        />
        <TopSearchCard
          routeFrom={"Kathmandu"}
          routeTo={"Kakarbhitta"}
          timeDuration={"14 Hrs"}
          price={"2000"}
        />
        <TopSearchCard
          routeFrom={"Kathmandu"}
          routeTo={"Birathnagar"}
          timeDuration={"12 Hrs"}
          price={"1500"}
        />
        <TopSearchCard
          routeFrom={"Pokhara"}
          routeTo={"Dharan"}
          timeDuration={"12 Hrs"}
          price={"1600"}
        />
        <TopSearchCard
          routeFrom={"Kanchanpur"}
          routeTo={"Kathmandu"}
          timeDuration={"20 Hrs"}
          price={"2500"}
        />
      </div>
    </RootLayout>
  );
};

export default TopSearch;
