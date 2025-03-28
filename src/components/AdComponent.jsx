import React from 'react';

const AdComponent = ({ image, title, description, link }) => {
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="bg-[#1F2937] text-[#e5e7eb] rounded-[15px] shadow-md overflow-hidden w-44 transition transform hover:scale-105 hover:shadow-xl cursor-pointer"
    >
      <img 
        src={image} 
        alt={title} 
        className="w-full h-40 object-cover" 
      />
      <div className="p-2 flex flex-col gap-1">
        <h3 className="text-md font-bold text-[#ebb305] leading-tight">{title}</h3>   
        <p className="text-xs text-[#9ca3af] leading-snug">{description}</p>        
      </div>
    </a>
  );
};

export default AdComponent;
