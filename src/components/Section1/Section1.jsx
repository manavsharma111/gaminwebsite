import React from 'react'
import Navbar from './Navbar'
import Page1content from './Page1content'

const Section1 = (props) => {
  console.log(props)
  return (
    <div className={`min-h-screen w-full ${props.theme === 'dark' ? 'bg-[#111111] text-white' : 'bg-[#fff7f1] text-[#4a1834]'}`}>
      <Navbar theme={props.theme} onToggleTheme={props.onToggleTheme} />
      
       <Page1content users={props.users}/>
    </div>
  )
}

export default Section1
