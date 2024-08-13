
import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'


const DashboardLayout = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <SideBar className="md:w-1/4 w-full" />
      <div className="md:w-3/4 w-full">
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardLayout
