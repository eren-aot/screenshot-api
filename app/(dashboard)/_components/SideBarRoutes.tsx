"use client"
import React from 'react'
import { Layout,Joystick } from 'lucide-react';
import { usePathname } from 'next/navigation';
import SideBarItems from './SideBarItems';


const routes = [
    {
        icon : Layout,
        label : "Dashboard",
        href : "/dashboard",
    },
    {
        icon: Joystick,
        label: "Playground",
        href: "/playground",
    }
]

const SideBarRoutes = () => {


  return (

    <div className='flex flex-col w-full'>
        {routes.map((route,index) => (
            <SideBarItems 
                key={index}
                icon={route.icon}
                label={route.label}
                href={route.href}
            />
        ))}
    </div>
  )
}

export default SideBarRoutes