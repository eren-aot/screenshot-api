import { Button } from '@/components/ui/button'
import React from 'react'
import URLForm from '../_components/URLForm'

type Props = {}

const DashboardPage = (props: Props) => {
  return (
    <div className='h-full flex flex-col'>
      <h1 className='text-lg font-semibold pt-5 pl-5'>Playground</h1>
      <div className='flex p-5 justify-between'>
        <div className='flex flex-col'>
          <URLForm />
        </div>
        <div >
          <h3>Hello world!!</h3>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage