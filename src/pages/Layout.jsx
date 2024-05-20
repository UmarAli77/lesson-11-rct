import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
      <header className='w-[1100px] my-0 mx-auto'>
        <div className='flex items-center gap-5'>
            <NavLink className={(el) => {
                if(el.isActive) {
                    return 'text-red-500'
                }
            }} to={'/'}>
                Home
            </NavLink>
            <NavLink className={(el) => {
                if(el.isActive) {
                    return 'text-red-500'
                }
            }} to={'/admin'}>
                Admin
            </NavLink>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
