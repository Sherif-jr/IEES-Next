"use client";
import React from "react";
import { motion } from "framer-motion";

const MotionContainer = ({ staggerChildren = 0.5, children, ...props }) => {
  return (
    <motion.div transition={{ staggerChildren: staggerChildren }} {...props}>
      {children}
    </motion.div>
  );
};

export default MotionContainer;
