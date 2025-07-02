import React from 'react'

const Videocomponent = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-gray-300 h-32"></div>
        <div className="p-3">
          <h3 className="font-semibold text-sm mb-1">Sample Video Title</h3>
          <p className="text-gray-600 text-xs">Channel Name</p>
          <p className="text-gray-500 text-xs">100K views • 2 days ago</p>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-gray-300 h-32"></div>
        <div className="p-3">
          <h3 className="font-semibold text-sm mb-1">Another Video Title</h3>
          <p className="text-gray-600 text-xs">Another Channel</p>
          <p className="text-gray-500 text-xs">50K views • 1 week ago</p>
        </div>
      </div>
    </div>
  )
}

export default Videocomponent