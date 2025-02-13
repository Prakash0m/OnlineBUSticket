import React from "react";
import TopLayout from "../../layout/TopLayout";
import InBusImg from "../../assets/inbus.jpg";
import RootLayout from "../../layout/RootLayout";

import { motion } from "framer-motion";
import { Search } from "./search/Search";
import Filter from "./Filter";

const Tickets = () => {
  return (
    <div className="w-full space-y-12 pb-16 text-center">
      {/* Top Layout */}
      <TopLayout bgImg={InBusImg} title={"Book Your Tickets"} />
      <RootLayout className="space-y-12 relative">
        {/* Search section */}
        {/* fixing this sections on the top to be sticky so that we can esaly change the route */}
        <div className="space-y-5 w-full bg-neutral-50 flex py-4 items-center justify-center flex-col sticky top-0 z-30">
          <motion.h1
            initial={{ opacity: 0, y: -800 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -800 }}
            transition={{ duration: 1.35, ease: "easeOut" }}
            className="text-3xl md:text-5xl text-neutral-700 font-semibold"
          >
            Want to change the route?
          </motion.h1>

          {/* Search */}
          <Search />
        </div>
        {/* Serach bus tickests */}
        <div className="w-full h-auto grid grid-cols-4 gap-16 relative">
          {/* Filter Section */}
          <div className="col-span-1">
            <Filter className="space-y-4 sticky top-52 z-20" />
          </div>
          {/* Search Section */}
        </div>
      </RootLayout>
    </div>
  );
};

export default Tickets;
