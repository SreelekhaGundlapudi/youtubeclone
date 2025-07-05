import React from 'react'

const Videocard = ({ info }) => {
  console.log(info)
  const { snippet, statistics } = info
  const { channelTitle, title, thumbnails } = snippet

  return (
    <div className="p-2 shadow-md border rounded-lg border-none mb-2 h-70">
      <img alt="thumbnail" src={thumbnails?.medium?.url} className="w-full rounded-md" />
      <ul className="mt-2 text-sm">
        <li className="font-semibold">{title}</li>
        <li className="text-gray-600">{channelTitle}</li>
        <li className="text-gray-500">{statistics?.viewCount} views</li>
      </ul>
    </div>
  )
}

export default Videocard
