import React, { useState } from 'react'


const SidebarIcon = ({ styles, name, imgUrl, isActive, handleClick}) => {
  const [hovering, setHovering] = useState(false)

  return (
    <div className={`w-[50px] h-[50px] rounded-[10px] ${isActive === name && 'bg-[#2c2f32]'} flex flex-col justify-center items-center cursor-pointer ${styles}`}  onClick={handleClick} onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
      <img src={imgUrl} alt='no_logo' className={`w-1/2 h-1/2 ${isActive !== name && 'grayscale'}`}/>
      <div className={`absolute mb-[52px] ${isActive === name && 'mb-[82px]'} bg-[#2c2f32] pr-[5px] pl-[5px] rounded-[6px]`}>
        <p className={`text-white font-light ${!hovering && 'hidden'} `}>{name.charAt(0).toUpperCase() + name.slice(1)}</p>
      </div>
    </div>
  )
}

export default SidebarIcon