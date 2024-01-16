import { imageStore } from '@/store/imageStore'
import React from 'react'
import Image from 'next/image'

type Props = {}

const ScreenshotReturn = (props: Props) => {

  const screenshots = imageStore((state: any) => state.screenshots)
  // console.log("Hi there")
  // console.log(screenshots.screenshot)
  const image = screenshots.screenshot;
  const imgSrc = 'data:image/jpeg;base64,' + image;

  return (
    <Image
      height={200}
      width={600}
      alt="Screenshot"
      src={imgSrc}
    />
  )
}

export default ScreenshotReturn