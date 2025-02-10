import React from "react";
import { motion } from "framer-motion";
import herobg from "../../assets/herobg.png";
import RootLayout from "../../layout/RootLayout";
import { Search } from "./search/Search";

const Hero = () => {
  const variants = {
    hidden: { opacity: 0, y: -800 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="w-full flex-1 h-screen bg-cover bg-no-repeat bg-top relative"
      style={{ backgroundImage: `url(${herobg})` }}
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={variants}
      transition={{ duration: 0.85, ease: "easeInOut" }}
    >
      <RootLayout className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-neutral-50/70 via-neutral-50/15 to-neutral-50/5 flex items-center text-center flex-col ">
        {/* Title Section */}
        <div className="space-y-2 text-center justify-start gap-9 py-[9ch]">
          <motion.p
            initial={{ opacity: 0, y: -800 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -800 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="text-lg text-neutral-500 font-medium"
          >
            Get your bus Tickets
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: -800 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -800 }}
            transition={{ duration: 1.85, ease: "easeOut" }}
            className="text-5xl text-neutral-800 font-bold capitalize"
          >
            Find best bus For You!
          </motion.h1>
        </div>

        {/* Search section */}
        <Search />
      </RootLayout>
    </motion.div>
  );
};

export default Hero;
