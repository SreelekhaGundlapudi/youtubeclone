import React from 'react'
import Sidebar from './Sidebar'
import Maincomponent from './Maincomponent'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className="flex bg-gray-100">
        <Sidebar />
        {/* <Maincomponent /> */}
        <Outlet/>
    </div>
  )
}

export default Body