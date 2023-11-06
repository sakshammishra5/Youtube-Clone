import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {
  const isMenuOpen=useSelector(store=>store.app.isMenuOpen)

  // Early Return pattern
  if(!isMenuOpen) return null;

  return (
    <div className='p-5 shadow-lg w-full'>
      <ul className='[&>*]:p-1 font-semibold'>
        <li className='hover:bg-slate-100 cursor-pointer flex items-center justify-center rounded-md'>Home</li>
        <li className='hover:bg-slate-100 cursor-pointer flex items-center justify-center rounded-md'>Shorts</li>
        <li className='hover:bg-slate-100 cursor-pointer flex items-center justify-center rounded-md'>Video</li>
        <li className='hover:bg-slate-100 cursor-pointer flex items-center justify-center rounded-md'>Live</li>
      </ul>
      <h1 className='font-bold pt-5'>Subscriptions</h1>
      <ul className='[&>*]:p-1 font-semibold'>
        <li className='hover:bg-slate-100 cursor-pointer flex items-center justify-center rounded-md'>Music</li>
        <li className='hover:bg-slate-100 cursor-pointer flex items-center justify-center rounded-md'>Sports</li>
        <li className='hover:bg-slate-100 cursor-pointer flex items-center justify-center rounded-md'>Gamaing</li>
        <li className='hover:bg-slate-100 cursor-pointer flex items-center justify-center rounded-md'>Movies</li>
      </ul>
      <h1 className='font-bold pt-5'>Subscriptions</h1>
      <ul className='[&>*]:p-1 font-semibold'>
        <li className='hover:bg-slate-100 cursor-pointer flex items-center justify-center rounded-md'>Music</li>
        <li className='hover:bg-slate-100 cursor-pointer flex items-center justify-center rounded-md'>Sports</li>
        <li className='hover:bg-slate-100 cursor-pointer flex items-center justify-center rounded-md'>Gamaing</li>
        <li className='hover:bg-slate-100 cursor-pointer flex items-center justify-center rounded-md'>Movies</li>
      </ul>
    </div>
  )
}

export default Sidebar