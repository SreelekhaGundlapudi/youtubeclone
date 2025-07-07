import React, { useEffect, useState } from 'react'
import { Menu, Search, User } from 'lucide-react'
import { Bell } from 'lucide-react'
import { toggleMenu } from '../utils/appSlice'
import { useDispatch } from 'react-redux'
import { YOUTUBE_SEARCH_API } from '../utils/constants'


const Header = () => {
  const[searchQuery, setSearchQuery] = useState("")
  const dispatch = useDispatch()
  const toggleMenuHandler=()=>{
    dispatch(toggleMenu())
  }
    useEffect(()=>{
      const timer = setTimeout(()=>getSearchSuggestions(),200);

      return () => {
        clearTimeout(timer)
      }
    },[searchQuery])

    const getSearchSuggestions = async() => {
      const data = await fetch(YOUTUBE_SEARCH_API+ searchQuery)
      const res = data.json()
      console.log(res,"res")
    }
  
  return (
    <div className="fixed top-0 left-0 w-full h-[64px] px-6 shadow-md bg-white z-50 grid grid-cols-12 items-center">
      <div className="flex items-center space-x-4 col-span-2">
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors border-none bg-transparent">
          <Menu className="w-6 h-8 text-gray-700 cursor-pointer" onClick={()=>toggleMenuHandler()}/>
        </button>
        <div className="flex items-center space-x-2 h-[30px]">
          <img  src="https://www.freeiconspng.com/uploads/youtube-logo-png-transparent-image-5.png" width="200" height="70" alt="youtube"  />
        </div>
      </div>
      <div className='flex items-center col-span-8 justify-center'>
        <div className='flex items-center space-x-2'> 
          <input type="text" 
          placeholder='Search' 
          value={searchQuery}
          onChange={(e)=>setSearchQuery(e.target.value)}
          className='border border-gray-300 rounded-full p-2 h-[30px] w-[600px]' />
          <button className='bg-gray-200 rounded-full p-2 h-[35px] border-none'>
              <Search className='w-6 h-6 text-gray-700' />
          </button>
        </div>
      </div>
      <div className='col-span-2 flex items-center justify-center'>
        <User/>
      </div>
    </div>
  )
}

export default Header