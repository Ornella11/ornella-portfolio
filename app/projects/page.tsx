import React from 'react'
import Image from "next/image";

const projects = () => {
  return (
    <div className="relative min-h-screen bg-cover bg-center">
      <Image 
        src="/assets/png/backgroundWallpaper.png"
        alt="Background"
        layout="fill"
        objectFit="cover"
      />

      <div className="absolute inset-0 flex items-center justify-center">

        <div className="relative flex items-center justify-center min-h-screen">

          {/* Cadre central avec image, texte, et bouton */}
          <div className="flex flex-col items-center justify-center bg-white p-6 sm:p-8 md:p-12 lg:p-16 rounded-2xl shadow-lg h-[75vh] w-[70vw] max-w-[1000px] mx-auto">
            
          </div>

        </div>

      </div>

    </div>
  )
}

export default projects
