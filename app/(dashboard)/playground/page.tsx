"use client"

import { Button } from '@/components/ui/button'
import React from 'react'
import URLForm from '../_components/URLForm'
import ScreenshotReturn from '../_components/ScreenshotReturn'

type Props = {}

const DashboardPage = (props: Props) => {

  // const user = userStore((state: any) => state.user)
  // const updateuser = userStore((state: any) => state.updateUser)

  return (
    <div className='h-full flex flex-col'>
      <h1 className='text-lg font-semibold pt-5 pl-5'>Playground</h1>
      <div className='flex p-5 justify-between'>
        <div className='flex flex-col'>
          <URLForm />
        </div>
        <div className='flex flex-col'>
          <ScreenshotReturn />
        </div>
      </div>
    </div>
  )
}

export default DashboardPage