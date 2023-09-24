import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useDisconnect } from '@thirdweb-dev/react'
import { CustomButton } from '../components'
import { thirdweb } from '../assets'

const LogOut = () => {
  const navigate = useNavigate()
  const disconnect = useDisconnect();

  useEffect(() => {

    // disconnect()
  })
  

  return (
    <div className='flex flex-col sm:flex-row justify-between items-center'>
      <div className='flex-2/3 flex flex-col justify-center items-center sm:items-start'>
        <img src={thirdweb} alt='user' className='w-[300px] h-[300px] object-contain' />
        <p className='text-[#8c18ba] text-[28px] mb-[20px] sm:text-[34px]'>Thank you for contributing to the cause.</p>  
        <p className='text-[#e81ab4] text-[22px] mb-[20px] sm:text-[28px]'>Hope to see you here soon.</p>  
      </div>
      <div className='flex flex-col flex-1/3'>
        <p className='text-white text-[14px] sm:text-[26px] mt-[30px]'>Lets do it again !
          <CustomButton btnType='button' title='Go to Homepage' styles= 'bg-[#d61ca7] w-[180px] ml-[10px]' handleClick={() => navigate('/')} /> </p>
        <p className='text-white text-[14px] sm:text-[26px] mt-[30px]'>Go straight to dashboard.
          <CustomButton btnType='button' title='Dive in Again' styles= 'bg-[#31d68c] w-[180px] ml-[10px]' handleClick={() => navigate('/dashboard')} /> </p>
      </div>
    </div>
  )
}

export default LogOut