import React from 'react'
import Sidebar from './Sidebar'
import Maincomponent from './Maincomponent'

const Body = () => {
  return (
    <div className="flex bg-gray-100">
        <Sidebar />
        <Maincomponent />
    </div>
  )
}

export default Body