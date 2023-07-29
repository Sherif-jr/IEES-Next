"use client";
import React from "react";
import { motion } from "framer-motion";
const FadeGrow = ({
  duration = 0.3,
  startScale = 0,
  endScale = 1,
  ...props
}) => {
  const varients = {
    hidden: {
      scale: startScale,
    },
    visible: {
      scale: endScale,
      transition: {
        duration: duration,
      },
    },
  };
  return (
    <motion.div
      variants={varients}
      initial="hidden"
      whileInView="visible"
      exit="hidden"
      {...props}
    >
      {props.children}
    </motion.div>
  );
};

export default FadeGrow;
