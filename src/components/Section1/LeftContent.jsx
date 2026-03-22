import React from 'react'
import { RiArrowRightUpFill } from 'react-icons/ri'
import HeroText from './HeroText'
import Arrow from './Arrow'
const LeftContent = () => {
  return (
       <div className='flex w-full flex-col justify-between lg:h-full lg:w-1/3'>
      <HeroText />
      <Arrow />
    </div>
  )
}

export default LeftContent
