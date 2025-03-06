import React from 'react';
import Image from "next/image";
import { motion } from 'framer-motion';

const ProfileImage = () => {
  return (
    <motion.div
      className="relative w-[66px] h-[33px] rounded-lg border-2 border-gray overflow-hidden"
      whileHover={{
        x: [-2, 2, -2, 2, 0],
        transition: { duration: 0.3, repeat: 1 },
      }}
    >
      <Image
        src="/assets/png/profilePicture.png"
        alt="Profile Picture"
        layout="fill"
        objectFit="cover"
      />
    </motion.div>
  )
}

export default ProfileImage
