import React from 'react'

const DropDown = ({ labelName, value, handleChange }) => {
  
  return (
    <div className='flex-1 w-full flex flex-col'>
      {labelName && (
        <span className='font-epilogue font-medium text-[14px] leading-[22px] text-[#808191] mb-[10px]'>{labelName}</span>
      )}
      <select required value={value} onChange={handleChange}  className='sm:py-[18px] py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-white text-[14px] placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px]'>
          <option className='bg-[#3a3a43]' value='Philanthorpy'>Philanthorpy</option>
          <option className='bg-[#3a3a43]' value='Education'>Education</option>
          <option className='bg-[#3a3a43]' value='Contribution'>Contribution</option>
      </select>
    </div>
  )
}

export default DropDown