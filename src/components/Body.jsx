import React from 'react'
import MainContainer from './MainContainer'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import Head from './Head'

const Body = () => {
  return (
    <>
    <Head/>
    <div className='flex'>
       <div className='w-1/12'> <Sidebar/></div>
        <div className='w-11/12'><Outlet/></div>
    </div>
    </>
  )
}

export default Body