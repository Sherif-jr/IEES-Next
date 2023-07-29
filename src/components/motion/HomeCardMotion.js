"use client";
import React from "react";
import { motion } from "framer-motion";

const HomeCardMotion = ({ children }) => {
  const variants = {
    hidden: {
      scale: 0,
      borderRadius: "50%",
    },
    visible: {
      scale: 1,
      borderRadius: "0%",
      transition: {
        duration: 0.3,
        delayChildren: 0.5,
      },
    },
  };
  return (
    <motion.div
      className="overflow-hidden"
      //   animate={{
      //     scale: [0, 1, 1, 0.7, 0],
      //     rotate: [0, 0, 180, 180, 0],
      //     borderRadius: ["0%", "0%", "50%", "50%", "0%"],
      //   }}
      //   transition={{
      //     duration: 2,
      //     ease: "easeInOut",
      //     times: [0, 0.2, 0.5, 0.8, 1],
      //     repeat: Infinity,
      //     repeatDelay: 1,
      //   }}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      exit="hidden"
    >
      {children}
    </motion.div>
  );
};

export default HomeCardMotion;

export function HomeCardInnerFade({ children }) {
  const inner = {
    hidden: {
      opacity: 0,
      // translateX: -200
    },
    visible: {
      opacity: 1,
      //   translateX: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  return <motion.div variants={inner}>{children}</motion.div>;
}
