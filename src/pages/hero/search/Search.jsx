import React from "react";
import { motion } from "framer-motion";
import { TbArrowsExchange } from "react-icons/tb";
import { FaMapMarkerAlt, FaSearch } from "react-icons/fa";

export const Search = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -800 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -800 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="w-full bg-neutral-50/20 border-2 border-neutral-300 shadow-lg rounded-xl p-5"
    >
      <div className="w-full flex flex-col md:flex-row items-center gap-5 justify-between">
        {/* from and to input section */}
        <div className="w-full md:w-[60%] flex items-center gap-5 relative">
          {/* From */}
          <div className="w-1/2 h-14 border border-neutral-300 bg-white/70 text-base text-neutral-700 font-medium px-5 flex items-center gap-x-1 rounded-lg">
            <input
              type="text"
              placeholder="From..."
              className="w-full h-full border-none bg-transparent focus:outline-none"
            />
            <div className=" w-5 h-5 text-neutral-400 ">
              <FaMapMarkerAlt className="w-full h-full" />
            </div>
          </div>
          {/* To */}
          <div className="w-1/2 h-14 border border-neutral-300 bg-white/70 text-base text-neutral-700 font-medium px-5 flex items-center gap-x-1 rounded-lg">
            <input
              type="text"
              placeholder="To..."
              className="w-full h-full border-none bg-transparent focus:outline-none"
            />
            <div className=" w-5 h-5 text-neutral-400 ">
              <FaMapMarkerAlt className="w-full h-full" />
            </div>
          </div>

          {/* Exchange button  */}
          <button className="absolute w-11 h-11 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center bg-red-500">
            <TbArrowsExchange className="w-6 h-6 text-neutral-50" />
          </button>
        </div>

        {/* date and button section */}
        <div className="w-full md:flex-1 h-14 flex items-center gap-5">
          {/* Add your date input and button here */}
          {/* Date */}

          <div className="flex-1 h-full  border border-neutral-300 bg-white/70 text-base text-neutral-700 font-medium px-5 flex items-center gap-x-1 rounded-lg">
            <input
              type="date"
              className="w-full h-full border-none bg-transparent focus:outline-none"
            />
          </div>

          {/* search Button */}
          <button className="w-fit px-5 h-full bg-red-500 hover:bg-transparent border-2 border-red-500 hover:border-primary rounded-xl text-base font-medium text-neutral-50 flex items-center justify-center gap-x-2 hover:text-primary ease-in-out duration-300  ">
            <FaSearch />
            Search
          </button>
        </div>
      </div>
    </motion.div>
  );
};
