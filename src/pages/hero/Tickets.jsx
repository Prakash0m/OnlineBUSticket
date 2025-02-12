import React from "react";
import TopLayout from "../../layout/TopLayout";
import InBusImg from "../../assets/inbus.jpg";

const Tickets = () => {
  return (
    <div className="w-full space-y-12 pb-16">
      {/* Top Layout */}
      <TopLayout bgImg={InBusImg} title={"Book Your Tickets"} />
    </div>
  );
};

export default Tickets;
