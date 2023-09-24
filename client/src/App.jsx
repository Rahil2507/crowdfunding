import React, { useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

import { Home, Dashboard, Profile, Payment, CreateCampaign, CampaignDetails, Withdraw, LogOut } from './pages'
import { Navbar, Sidebar } from './components'

const App = () => {
  const location = useLocation()
  const [isActive, setIsActive] = useState('')

  
  const changePage = (page) => {
    setIsActive(page)
  }

  return (
    <div className='relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row'>
      <div className="sm:flex hidden mr-10 relative ">
        {location.pathname !== '/' && location.pathname !== '/logout' && <Sidebar isActive={isActive} setIsActive={changePage}/>}
      </div>

      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        {location.pathname !== '/' && location.pathname !== '/logout' && <Navbar isActive={isActive} setIsActive={changePage}/>}

        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/dashboard' element={<Dashboard setIsActive={changePage}/>} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/payment' element={<Payment/>} />
          <Route path='/create-campaign' element={<CreateCampaign/>} />
          <Route path='/campaign-details/:id' element={<CampaignDetails/>} />
          <Route path='/withdraw' element={<Withdraw/>} />
          <Route path='/logout' element={<LogOut/>} />
        </Routes>

      </div>
    </div>
  )
}

export default App