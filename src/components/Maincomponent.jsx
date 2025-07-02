import React from 'react'
import Buttonlist from './Buttonlist'
import Videocomponent from './Videocomponent'

const Maincomponent = () => {
  return (
    <div className="flex-1 p-6">
        <Buttonlist />
        <Videocomponent />
    </div>
  )
}

export default Maincomponent