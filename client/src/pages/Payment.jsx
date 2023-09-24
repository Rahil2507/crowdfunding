import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom' 

import { useStateContext } from '../context'
import { CustomButton, FundCard, Loader } from '../components'
import { loader } from '../assets'

const Payment = () => {
  const [campaigns, setCampaigns] = useState(null)
  const [selectedCampaign, setSelectedCampaign] = useState(0)
  const [amount, setAmount] = useState('')
  const [isLoading, setisLoading] = useState(false)

  const { address, contract, getCampaigns, donate } = useStateContext()
  const navigate = useNavigate()
  
  useEffect(() => {
    if(contract) fetchCampaigns()
  }, [address, contract])
  
  const fetchCampaigns = async () => {
    const data = await getCampaigns()
    setCampaigns(data)
  }

  const handleDonate = async () => {
    setisLoading(true)
    await donate(selectedCampaign, amount)
    setisLoading(false)
    navigate('/dashboard')
  }

  return (
    <>
    {isLoading && <Loader text='Transaction is in progress'/>}
    {!campaigns ? <img src={loader} alt='loader' className='w-[100px] h-[100px] object-contain' />
    :<div className='flex flex-1 justify-around flex-col-reverse sm:flex-row '>
      <div>
        <div className='flex-1 w-full flex flex-col'>
          <span className='font-epilogue font-medium text-[14px] leading-[22px] text-[#808191] mb-[10px]'>Select the campaign you want to contribute to</span>
          <select required value={selectedCampaign} onChange={(e) => setSelectedCampaign(e.target.value)}  className='py-[18px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-white text-[14px] placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px]'>
            {campaigns.map((campaign,i) => (
              <option key={i} className='bg-[#3a3a43]' value={campaign.pId}>{campaign.title}</option>
            ))}
          </select>
        </div>
        <div className='flex-1'>
          <div className='mt-[20px] flex flex-col p-4 bg-[#1c1c24] rounded-[10px]'>
            <p className='font-epilogue font-medium text-[20px] leading-[30px] text-center text-[#808191]'>Fund the campaign</p>        
            <div className='mt-[30px]'>
              <input type='number' placeholder='ETH 0.1' step='0.01' value={amount} onChange={(e) => setAmount(e.target.value)} className='w-full py-[10px] sm:px-[20px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-white text-[18px] leading-[30px] placeholder:text-[#4b5264] rounded-[10px]' />
              <div className='my-[20px] p-4 bg-[#13131a] rounded-[10px]'>
                <h4 className='font-epilogue font-semibold text-[14px] leading-[22px] text-white'>Back it because you believe in it.</h4>
                <p className='mt-[20px] font-epilogue leading-[22px] text-[#808191]'>Support the project for no reward, just because it speaks to you.</p>
              </div>
              <CustomButton btnType='button' title='Fund Campaign' styles='w-full bg-[#8c6dfd]' handleClick={handleDonate} />
            </div>
          </div>
        </div>
      </div>
      <div className='mb-[30px]'>
        <h4 className='font-epilogue text-[16px] text-center text-white mb-[5px]'>Make your generous contributions</h4>
        <FundCard {...campaigns[selectedCampaign]} handleClick={() => {}} />
      </div>
      </div>}
      </>
  )
}

export default Payment