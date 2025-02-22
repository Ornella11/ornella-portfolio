"use client"; 

import React from 'react';
import ProfileImage from './ProfileImage';
import Button from './Button';

const Hero = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen">

      {/* Cadre central avec image, texte, et bouton */}
      <div className="flex flex-col items-center justify-center bg-white p-6 sm:p-8 md:p-12 lg:p-16 rounded-2xl shadow-lg h-[75vh] w-[70vw] max-w-[1000px] mx-auto">

        {/* Texte central + boutton */}
        <div className="text-center">
          <h1 className="text-xl sm:text-2xl font-medium text-pink">
            Ornella 
            <span className="inline-block mx-2">
              <ProfileImage /> 
            </span>
            Motengo Bauti, <br /> développeuse web & mobile .
          </h1>
        </div>

        <div className='relative top-20'>
          <Button text={'ENTER'} href={'/projects'} />
        </div>

      </div>
    
    </div>
  )
}

export default Hero


  {/* Image de profil */}
        {/* <ProfileImage src="/assets/images/profile-pic.jpg" alt="Profile Picture" /> */}

        {/* Texte du nom et description */}
        {/* <h1 className="text-3xl font-semibold text-center mt-4">Ton Nom</h1>
        <p className="text-lg text-gray-600 text-center mt-2">
          Une petite description de toi ou de ton projet.
        </p> */}

        {/* Bouton sous le texte */}
        {/* <div className="mt-6">
          <CustomButton onClick={() => alert('Button clicked!')} text="Contact Me" />
        </div> */}