"use client";
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const words = ["développeuse web & mobile .", "étudiante MMI .", "apprentie en front-end ."];

export default function FlipWord() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000); // Changement toutes les 2 secondes
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex justify-center items-center h-8 w-96 overflow-hidden text-xl sm:text-2xl font-medium text-yellow">
      <AnimatePresence mode="wait">
        <motion.div
          key={words[index]}
          initial={{ y: "100%", opacity: 0 }} // Le mot commence en bas
          animate={{ y: 0, opacity: 1 }} // Il descend pour devenir visible
          exit={{ y: "-100%", opacity: 0 }} // Sort du haut
          transition={{ duration: 0.2, ease: "easeInOut" }} // Animation fluide
          className="absolute"
        >
          {words[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
