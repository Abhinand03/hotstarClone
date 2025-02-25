import { div } from 'framer-motion/client'
import React from 'react'
import MenuBar from '../component/menuBar/MenuBar'
import { Outlet } from 'react-router-dom'

function AppLayout() {
  return (
    <div className='flx'>
        <MenuBar/>
        <Outlet/>
    </div>
  )
}

export default AppLayout