import React from 'react'
import { RiArrowRightLine } from 'react-icons/ri'

const RightCardContent = (props) => {
  return (
        <div className='absolute top-0 left-0 flex h-full w-full flex-col items-center justify-end gap-2 overflow-hidden rounded-4xl bg-black/20 p-5 text-center sm:p-8 lg:p-16'>
        <span className='absolute top-0 left-0 h-full w-0 bg-black/50 transition-all duration-500 ease-out group-hover/card:w-full'></span>
        <h2 className='absolute left-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-lg font-bold text-black sm:h-12 sm:w-12 sm:text-xl lg:left-6 lg:top-6 lg:h-14 lg:w-14 lg:text-2xl'>{props.id + 1}</h2>
        <h2 className='z-10 text-xl font-bold text-white sm:text-2xl'>{props.name}</h2>
        <p className='z-10 text-sm leading-normal text-gray-300 sm:text-base'>{props.game}</p>
        <div className='z-10 flex w-full justify-between pt-4 sm:pt-6 lg:pt-8'>
          <a href={props.buyLink || '#'} target='_blank' rel='noreferrer' className='group/button relative cursor-pointer overflow-hidden rounded-xl bg-gray-800 px-3 py-2 text-sm font-medium text-white sm:px-4 sm:text-base'>
            <span className='absolute inset-x-0 bottom-0 h-0 bg-white transition-all duration-300 ease-out group-hover/button:h-full'></span>
            <span className='relative z-10 transition-colors duration-300 group-hover/button:text-gray-800'>
              View Details
            </span>
          </a>
          <button onClick={() => props.onNextCard?.(props.id)} className='group/button relative cursor-pointer overflow-hidden rounded-xl bg-gray-800 px-3 py-2 text-sm font-medium text-white sm:px-4 sm:text-base'>
            <span className='absolute inset-x-0 bottom-0 h-0 bg-white transition-all duration-300 ease-out group-hover/button:h-full'></span>
            <span className='relative z-10 transition-colors duration-300 group-hover/button:text-gray-800'>
              <RiArrowRightLine />
            </span>
          </button>
        </div>

      </div>
  )
}

export default RightCardContent
