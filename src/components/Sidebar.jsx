import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {
  const isMenuOpen=useSelector(store=>store.app.isMenuOpen)

  // Early Return pattern
  // if(!isMenuOpen) return null;

  return (
    <div className={`px-2 shadow-lg ${isMenuOpen?"w-36":"w-0"} h-full  overflow-hidden ${!isMenuOpen?"hidden":null}`}>
      <ul className='[&>*]:p-1 font-normal text-center'>
        <li className='hover:bg-slate-100 cursor-pointer flex items-center justify-center rounded-md text-sm font-medium'>Home</li>
        <li className='hover:bg-slate-100 cursor-pointer flex items-center justify-center rounded-md text-sm font-medium'>Shorts</li>
        <li className='hover:bg-slate-100 cursor-pointer flex items-center justify-center rounded-md text-sm font-medium'>Video</li>
        <li className='hover:bg-slate-100 cursor-pointer flex items-center justify-center rounded-md text-sm font-medium'>Live</li>
      </ul>
      <h1 className='font-bold pt-5 text-center'>Subscriptions</h1>
      <ul className='[&>*]:p-1 font-normal'>
        <li className='hover:bg-slate-100 cursor-pointer flex items-center justify-center rounded-md text-sm font-medium'>Music</li>
        <li className='hover:bg-slate-100 cursor-pointer flex items-center justify-center rounded-md text-sm font-medium'>Sports</li>
        <li className='hover:bg-slate-100 cursor-pointer flex items-center justify-center rounded-md text-sm font-medium'>Gamaing</li>
        <li className='hover:bg-slate-100 cursor-pointer flex items-center justify-center rounded-md text-sm font-medium'>Movies</li>
      </ul>
      <h1 className='font-bold pt-5 text-center'>Subscriptions</h1>
      <ul className='[&>*]:p-1 font-normal'>
        <li className='hover:bg-slate-100 cursor-pointer flex items-center justify-center rounded-md text-sm font-medium'>Music</li>
        <li className='hover:bg-slate-100 cursor-pointer flex items-center justify-center rounded-md text-sm font-medium'>Sports</li>
        <li className='hover:bg-slate-100 cursor-pointer flex items-center justify-center rounded-md text-sm font-medium'>Gamaing</li>
        <li className='hover:bg-slate-100 cursor-pointer flex items-center justify-center rounded-md text-sm font-medium'>Movies</li>
      </ul>
    </div>
  )
}

export default Sidebar