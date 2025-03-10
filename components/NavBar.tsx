"use client";
import React, { useState, useEffect } from "react";
import Button from "./Button";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const buttonClassName = "px-2 py-1 text-gray rounded-[10px] bg-gray-100 text-sm hover:rounded-[10px] font-medium transition-all duration-300 ease-in-out hover:bg-[rgba(255,255,255,0.2)] hover:text-yellow";
  const buttonClassNameMobile = "px-2 py-1 text-gray rounded-[10px] bg-gray-100 text-sm hover:rounded-[10px] font-medium transition-all duration-300 ease-in-out hover:text-black";

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      className="relative w-full flex justify-between items-center p-4 rounded-[10px]
      bg-[url('/assets/png/backgroundWallpaper.jpg')] bg-cover bg-center"
    >
      <div className="absolute inset-0 bg-black/20 rounded-[10px]"></div>

      {/* Navbar */}
      <div className="relative flex w-full justify-between items-center">
        {/* Logo à gauche */}
        {/* <div className="text-yellow font-semibold text-lg z-10" >Ornella Ormb .</div> */}
        <div className="z-10">
          <Link href="/" className="text-yellow font-semibold text-lg">
            Ornella Ormb .
          </Link>
        </div>

        {/* Bouton menu burger / Close */}
        <div className="lg:hidden z-10">
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-8 h-8 text-yellow hover:text-[#FFFDA3] transition-colors duration-300"
              >
                <path d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor" // Permet de changer la couleur via Tailwind
                strokeWidth="2"
                strokeLinecap="round"
                className="w-8 h-8 text-yellow hover:text-[#FFFDA3] transition-colors duration-300"
              >
                <path d="M4 18L20 18" />
                <path d="M4 12L20 12" />
                <path d="M4 6L20 6" />
              </svg>
            )}
          </button>
        </div>


        {/* Menu déroulant (mobile) */}
        {menuOpen && (
          <div className="absolute top-12 right-4 bg-gray-100 shadow-lg p-6 rounded-md flex flex-col space-y-4 w-48 z-10">
            <Button className={buttonClassNameMobile} text="Mail" href="mailto:Ornellaormb@gmail.com" external />
            <Button className={buttonClassNameMobile} text="GitHub" href="https://github.com/Ornella11" external />
            <Button className={buttonClassNameMobile} text="LinkedIn" href="https://www.linkedin.com/in/ornella-motengo-bauti-35b438256/" external />
            <Button className={buttonClassNameMobile} text="Curriculum vitæ" href="/assets/cv.pdf" external />
          </div>
        )}

        {/* Liens en version desktop */}
        <div className="hidden lg:flex space-x-2 z-10">
          <Button className={buttonClassName} text="Mail" href="mailto:Ornellaormb@gmail.com" external />
          <Button className={buttonClassName} text="GitHub" href="https://github.com/Ornella11" external />
          <Button className={buttonClassName} text="LinkedIn" href="https://www.linkedin.com/in/ornella-motengo-bauti-35b438256/" external />
          <Button className={buttonClassName} text="Curriculum vitæ" href="/assets/cv.pdf" external />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
