import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { logo, sun } from '../assets'
import { navlinks } from '../constants'
import SidebarIcon from './SidebarIcon'

const Sidebar = ({isActive, setIsActive}) => {
  const [darkMode, setDarkMode] = useState(true)
  const navigate = useNavigate()
  
  const changeDisplayMode = () => {
    setDarkMode(!darkMode)
    setTimeout(() => {
      setDarkMode(true)
    }, 10000);
  }

  const Icon = ({ styles, imgUrl, handleClick}) => (
    <div className={`w-[50px] h-[50px] rounded-[10px]  flex flex-col justify-center items-center cursor-pointer ${styles}`}  onClick={handleClick} >
      <img src={imgUrl} alt='no_logo' className={`w-1/2 h-1/2`}/>
    </div>
  )

  return (
    <div className='flex justify-between items-center flex-col sticky top-5 h-[93vh]'>
      <Link to='/'>
        <Icon styles='w-[52px] h-[52px] bg-[#2c2f32]' imgUrl={logo} />
      </Link>

      <div className="flex-1 flex flex-col justify-between items-center bg-[#1c1c24] rounded-[20px] w-[76px] py-4 mt-12">
        <div className="flex flex-col justify-center items-center gap-5">
          {navlinks.map((link) => (
            <SidebarIcon key={link.name} {...link} isActive={isActive} handleClick={() => {setIsActive(link.name);navigate(link.link)}} />
          ))}
        </div>
        <div className='flex'>
          <Icon styles={`${darkMode ? 'bg-[#1c1c24]' : 'bg-[#cdcdd4]'} grayscale  shadow-secondary`} imgUrl={sun} handleClick={() => changeDisplayMode()} />
          {!darkMode &&<div className={`absolute w-[305px] mt-[12px] ml-[56px] bg-[#cdcdd4] p-[2px] pl-[5px] rounded-[6px]`}>
           <p className=' font-light'>Sorry, Light Mode is not available right now.</p>
          </div>}
        </div>
      </div>
    </div>
  )
}

export default Sidebar