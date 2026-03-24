import React from 'react'
import Navbar from './Navbar'
import Page1content from './Page1content'

const Section1 = (props) => {
  return (
    <section id='section-1' className={`min-h-screen w-full ${props.theme === 'dark' ? 'bg-[#111111] text-white' : 'bg-[#fff7f1] text-[#4a1834]'}`}>
      <Navbar
        theme={props.theme}
        onToggleTheme={props.onToggleTheme}
        authUser={props.authUser}
        onQuickLogin={props.onQuickLogin}
        onLogout={props.onLogout}
        onAddGame={props.onAddGame}
      />
      
       <Page1content users={props.users}/>
    </section>
  )
}

export default Section1
