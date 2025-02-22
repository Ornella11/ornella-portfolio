import React from 'react';
import Image from "next/image";

const ProfileImage = () => {
  return (
    <div className="relative w-[66px] h-[33px] rounded-lg border-2 border-gray overflow-hidden">
      <Image
        src="/assets/png/profilePicture.png"
        alt="Profile Picture"
        layout="fill"
        objectFit="cover"
      />
    </div>
  )
}

export default ProfileImage
