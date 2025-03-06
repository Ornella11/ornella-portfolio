import React from "react";
import Link from "next/link";

interface ButtonProps {
  text: string;
  href: string;
  external?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, href, external = false, className }) => {
  return (
    <div>
      {external ? (
        // 🔗 Lien EXTERNE
        <a 
          href={href} 
          target="_blank" 
          rel="noopener noreferrer"
          className={className}
        >
          {text}
        </a>
      ) : (
        // 🔗 Lien INTERNE (Next.js)
        <Link href={href} passHref>
          <button className={className}>
            {text}
          </button>
        </Link>
      )}
    </div>
  );
};

export default Button;
