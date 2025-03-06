"use client"; 

import React from 'react';
import ProfileImage from './ProfileImage';
import Button from './Button';
import FlipWords from './FlipWords';

const Hero = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen">

      <div className="flex flex-col items-center justify-center p-6 sm:p-8 md:p-12 lg:p-16 h-[75vh] w-[70vw] max-w-[1000px] mx-auto">

        {/* Texte central + boutton */}
        <div className="text-center">
          <h1 className="text-xl sm:text-2xl font-medium text-yellow">
            Ornella 
            <span className="inline-block mx-2">
              <ProfileImage /> 
            </span>
            Motengo Bauti, <FlipWords />
          </h1>
        </div>

        <div className='relative top-20'>
          <Button text={'ENTER'} href={'/projects'} className={'px-2 py-1 text-white rounded-[10px] tracking-widest text-sm transition-all duration-300 ease-in-out hover:bg-[rgba(255,255,255,0.2)]'} />
        </div>

      </div>
    
    </div>
  )
}

export default Hero