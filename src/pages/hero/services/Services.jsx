import React from "react";
import RootLayout from "../../../layout/RootLayout";

const Services = () => {
  return (
    <RootLayout className="space-y-12">
      {/* Tag */}
      <div className="w-full flex items-center justify-center text-center">
        <h1 className="text-3xl text-neutral-800 font-bold">
          Our <span className="text-red-500">Service</span>
        </h1>
      </div>
    </RootLayout>
  );
};

export default Services;
