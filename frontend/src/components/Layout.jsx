import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'


function Layout() {
  return (
    <div>
        {/* navbar */}
        <div className="">
          <Navbar/>
        </div>
        {/* outlet */}
        <div className="">
            <Outlet/>
        </div>
        {/* footer */}
        <div className="">

        </div>
    </div>
  )
}

export default Layout