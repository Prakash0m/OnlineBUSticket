import React from "react";
import TicketCard from "../../components/ticket/TicketCard";
import { FaBus } from "react-icons/fa";
import { IoReload } from "react-icons/io5";

const SearchResult = () => {
  return (
    <div className="w-full col-span-3 space-y-10 pt-11">
      <div className="space-y-6">
        <TicketCard
          icon={FaBus}
          busName={"Koshi Deluxe"}
          routeFrom={"Kathmandu"}
          routeTo={"Dharan"}
          arrivalTime={"05:00 AM"}
          departureTime={"03:00 PM"}
          price={"1500"}
          availableSeats={"6"}
        />
        <TicketCard
          icon={FaBus}
          busName={"Koshi Deluxe"}
          routeFrom={"Kathmandu"}
          routeTo={"Dharan"}
          arrivalTime={"05:00 AM"}
          departureTime={"03:00 PM"}
          price={"1500"}
          availableSeats={"6"}
        />
        <TicketCard
          icon={FaBus}
          busName={"Koshi Deluxe"}
          routeFrom={"Kathmandu"}
          routeTo={"Dharan"}
          arrivalTime={"05:00 AM"}
          departureTime={"03:00 PM"}
          price={"1500"}
          availableSeats={"6"}
        />
        <TicketCard
          icon={FaBus}
          busName={"Koshi Deluxe"}
          routeFrom={"Kathmandu"}
          routeTo={"Dharan"}
          arrivalTime={"05:00 AM"}
          departureTime={"03:00 PM"}
          price={"1500"}
          availableSeats={"6"}
        />
        <TicketCard
          icon={FaBus}
          busName={"Koshi Deluxe"}
          routeFrom={"Kathmandu"}
          routeTo={"Dharan"}
          arrivalTime={"05:00 AM"}
          departureTime={"03:00 PM"}
          price={"1500"}
          availableSeats={"6"}
        />
        <TicketCard
          icon={FaBus}
          busName={"Koshi Deluxe"}
          routeFrom={"Kathmandu"}
          routeTo={"Dharan"}
          arrivalTime={"05:00 AM"}
          departureTime={"03:00 PM"}
          price={"1500"}
          availableSeats={"6"}
        />
        <TicketCard
          icon={FaBus}
          busName={"Koshi Deluxe"}
          routeFrom={"Kathmandu"}
          routeTo={"Dharan"}
          arrivalTime={"05:00 AM"}
          departureTime={"03:00 PM"}
          price={"1500"}
          availableSeats={"6"}
        />
      </div>

      <div className="w-full flex items-center justify-center">
        <button className="w-fit px-5 h-full py-2 bg-red-500 hover:bg-transparent border-2 border-red-500 hover:border-red-500 rounded-xl text-base font-normal  flex items-center justify-center gap-x-2 hover:text-red-500 text-white ease-in-out duration-300">
          <IoReload />
          Load More
        </button>
      </div>
    </div>
  );
};

export default SearchResult;
