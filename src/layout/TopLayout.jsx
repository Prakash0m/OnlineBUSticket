import React from "react";
import { motion } from "framer-motion";
import RootLayout from "./RootLayout";

const containerVariants = {
  hidden: { opacity: 0, y: -100 },
  visible: { opacity: 1, y: 0 },
};

const titleVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const transitionSettings = { duration: 1, ease: "easeInOut" };

const TopLayout = ({ bgImg, title, className }) => {
  return (
    <motion.div
      className={`w-full bg-cover bg-center relative min-h-[10vh] md:min-h-[20vh] lg:min-h-[30vh] flex items-center justify-center ${className}`}
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={containerVariants}
      transition={transitionSettings}
    >
      {/* Dark overlay for better readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      <RootLayout className="relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -800 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -800 }}
          variants={titleVariants}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-4xl md:text-5xl text-neutral-50 font-bold capitalize "
        >
          {title}
        </motion.h1>
      </RootLayout>
    </motion.div>
  );
};

export default TopLayout;
