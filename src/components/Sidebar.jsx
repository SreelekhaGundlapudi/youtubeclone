import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen)
  if(!isMenuOpen) return null;
  return (
    <div className="w-64 bg-white shadow-lg min-h-screen p-4">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Subscriptions</h2>
      <ul className="space-y-2">
        <li className="p-2 hover:bg-gray-100 rounded cursor-pointer">Music</li>
        <li className="p-2 hover:bg-gray-100 rounded cursor-pointer">Trending</li>
        <li className="p-2 hover:bg-gray-100 rounded cursor-pointer">Shorts</li>
         <li className="p-2 hover:bg-gray-100 rounded cursor-pointer">Movies</li>
        <li className="p-2 hover:bg-gray-100 rounded cursor-pointer">Library</li>
      </ul>
    </div>
  )
}

export default Sidebar