import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/constants'
import Videocard from './Videocard'
import { Link } from 'react-router-dom'

const Videocomponent = () => {
  const [video , setVideo] = useState([])
  useEffect(()=>{
    videolist()
  },[])

  const videolist = async()=> {
    const videos = await fetch(YOUTUBE_VIDEO_API)
    const data = await videos.json()
    console.log(data,"data")
    setVideo(data.items)
  }

  if (video.length === 0) {
  return <p className="text-center text-gray-500">Loading videos...</p>
}
 
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {video.map((video)=>(
        <Link to={"/watch?v=" + video.id}><Videocard key={video.id} info={video}/></Link>
        ))}
    </div>
  )
}

export default Videocomponent