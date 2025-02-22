import { div } from 'framer-motion/client'
import React from 'react'
import Link from 'next/link' 

interface ButtonProps {
  text: string;
  href: string;
  external?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, href, external = false }) => {
  return (
    <div>
      {external ? (
        // 🔗 Lien EXTERNE (ouvre dans un nouvel onglet)
        <a 
          href={href} 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-2 py-1 text-gray tracking-widest text-sm hover:rounded-[10px] font- transition-all duration-300 ease-in-out hover:bg-gray-100"
        >
          {text}
        </a>
      ) : (
        // 🔗 Lien INTERNE (Next.js)
        <Link href={href} passHref>
          <button 
            className="px-2 py-1 text-gray tracking-widest text-sm hover:rounded-[10px] font- transition-all duration-300 ease-in-out hover:bg-gray-100"
          >
            {text}
          </button>
        </Link>
      )}
    </div>
  )
}

export default Button
