"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import ProfileImage from "./ProfileImage";
import FlipWords from "./FlipWords";

const Hero = () => {
  const router = useRouter();
  const [isLeaving, setIsLeaving] = useState(false);

  const handleClick = () => {
    setIsLeaving(true);
    setTimeout(() => {
      router.push("/projects");
    }, 500);
  };

  return (
    <motion.div
      className="relative flex items-center justify-center min-h-screen"
      initial={{ opacity: 1 }}
      animate={{ opacity: isLeaving ? 0 : 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center justify-center p-6 sm:p-8 md:p-12 lg:p-16 h-[75vh] w-[70vw] max-w-[1000px] mx-auto">
        {/* Texte central + bouton */}
        <div className="text-center">
          <h1 className="text-xl sm:text-2xl font-medium text-yellow">
            Ornella
            <span className="inline-block mx-2">
              <ProfileImage />
            </span>
            Motengo Bauti, <FlipWords />
          </h1>
        </div>

        <div className="relative top-20">
          <button
            onClick={handleClick}
            className="px-2 py-1 text-white rounded-[10px] tracking-widest text-sm transition-all duration-300 ease-in-out hover:bg-[rgba(255,255,255,0.2)]"
          >
            ENTER
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
