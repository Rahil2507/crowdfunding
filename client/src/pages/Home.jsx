import React from 'react'
import { useNavigate } from 'react-router-dom'

import { CustomButton } from '../components'
import { thirdweb } from '../assets'


const Home = () => {
  const navigate = useNavigate()

  return (
    <div className='flex flex-col sm:flex-row justify-start items-center'>
      <div className='flex-3/5 flex flex-col justify-center items-center sm:items-start'>
        <img src={thirdweb} alt='user' className='w-[200px] sm:w-[320px] object-contain' />
        <p className='text-[#8c18ba] text-[34px] sm:text-[48px] mb-[30px]'>Gideon Crowfunding</p>  
        <p className='text-[#ed249d]  text-[16px] sm:text-[28px] mb-[15px]'>Let's help make the world a better place to live in.</p>  
        <p className='text-[#e83cc3] text-[16px] sm:text-[28px] mb-[15px]'>Your small donations could make a huge part in this transformation.</p>  
      </div>
      <div className='flex flex-col mt-[20px] items-center flex-2/5 bg-[#1c1c24] p-[30px] rounded-[15px]'>
        <p className='text-white text-[28px] mb-[50px]'>Get going </p>
        <div className='flex flex-col items-end'>
          <CustomButton btnType='button' title='Dive in' styles= 'bg-[#31d68c] w-[170px] ml-[10px]' handleClick={() => navigate('/dashboard')} />
          <p className='text-white text-[9px] m-[2px]'>*in few simpler steps</p>
        </div>
      </div>
    </div>
  )
}

export default Home