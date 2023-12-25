import React, { useState } from 'react';
import pft from "/tst.jpg"
function ClickableCard({firstname,lastname ,role ,id,avatar}) {
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(!hovered);
  };

  const handleClick = () => {
    // Handle click logic here
    console.log(`Clicked: ${title}`);
  };

  return (
    <div
      className={`custom-shadow w-[200px] h-[230px]  flex rounded-lg items-center relative flex-wrap justify-between mb-[20px] mr-[20px] overflow-hidden group bg-cover bg-center `} 
      style={{backgroundImage : `url(${avatar})`}}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      onClick={handleClick}
    >
      
      <div className='absolute bottom-[-300px]  group-hover:bottom-0 transition-all duration-400 ease-out  w-full h-[40%] bg-[#171825] rounded-lg rounded-tl-none rounded-tr-none border-[#1D203E] border-t-4 '> 
      <p className='flex p-2 text-sm mt-[-4px] text-[#989898] '>Hello,<br /> I am {firstname} {lastname}</p>
        <div className='absolute flex justify-center items-center bg-[#171825] w-[40%] top-[-40px] h-[40px] rounded-lg rounded-b-none rounded-tl-none border-[#1D203E] border-t-4 border-r-4'>
        <p className='text-white '>{role}</p>
        </div>
      </div>
    </div>
  );
} 

export default ClickableCard;
