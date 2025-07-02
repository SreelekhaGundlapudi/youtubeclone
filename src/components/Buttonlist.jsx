import React from 'react'

const Buttonlist = () => {
  return (
    <div className="mb-6">
      <div className="flex space-x-2 overflow-x-auto pb-2">
        <button className="bg-gray-800 text-white px-4 py-2 rounded-full whitespace-nowrap">All</button>
        <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full whitespace-nowrap">Music</button>
        <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full whitespace-nowrap">Gaming</button>
        <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full whitespace-nowrap">Live</button>
        <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full whitespace-nowrap">News</button>
      </div>
    </div>
  )
}

export default Buttonlist
