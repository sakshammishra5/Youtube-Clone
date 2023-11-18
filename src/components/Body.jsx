import React from 'react'
import MainContainer from './MainContainer'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import Head from './Head'
import { useSelector } from 'react-redux'

const Body = () => {
  const isMenuOpen=useSelector(store=>store.app.isMenuOpen)
  return (
    <>
    <Head/>
    <div className='flex'>
       <div className={`w-1/12`}> <Sidebar/></div>
        <div className='w-11/12'><Outlet/></div>
    </div>
    </>
  )
}

export default Body