import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './rightContent'

const Page1content = (props) => {
  return (
    <div className='flex min-h-[calc(100vh-88px)] flex-col gap-8 px-4 pb-10 pt-2 sm:px-6 lg:flex-row lg:items-center lg:gap-10 lg:px-6 lg:py-6 lg:pb-16'>
        <LeftContent />
        <RightContent users={props.users} />
    </div>
  )
}

export default Page1content
