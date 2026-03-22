import React from 'react'
import { fillButtonClass, fillLayerClass, fillTextClass } from './section2Shared'

const Section2Button = ({ as = 'button', className = '', children, ...props }) => {
  const Component = as

  return (
    <Component className={`${fillButtonClass} ${className}`.trim()} {...props}>
      <span className={fillLayerClass}></span>
      <span className={fillTextClass}>{children}</span>
    </Component>
  )
}

export default Section2Button
