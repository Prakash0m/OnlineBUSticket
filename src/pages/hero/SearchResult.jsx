import React from "react";
import TicketCard from "../../components/ticket/TicketCard";
import { FaBus } from "react-icons/fa";

const SearchResult = () => {
  return (
    <div className=" w-full col-span-3 space-y-10 pt-11">
      <div className="space-y-6">
        <TicketCard
          icon={FaBus}
          busName={"Koshi Deluxe"}
          routeFrom={"Kathmandu"}
          routeTo={"Dharan"}
          arrivalTime={"05:00 AM"}
          departureTime={"03:00 PM"}
          price={"1500"}
          availableSeats={"06"}
        />
      </div>
    </div>
  );
};

export default SearchResult;
