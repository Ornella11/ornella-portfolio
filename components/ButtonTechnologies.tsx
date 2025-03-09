import React from 'react';

interface ButtonTechnologiesProps {
  text: string;
}

const ButtonTechnologies: React.FC<ButtonTechnologiesProps> = ({ text }) => {
  return (
    <span className="px-1 py-[2px] text-gray rounded-[6px] bg-gray-100 text-xs font-medium">
      {text}
    </span>
  );
};

export default ButtonTechnologies;
