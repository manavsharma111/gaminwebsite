import React from 'react'
import { fillButtonClass, fillTextClass, lightFillLayerClass, darkFillLayerClass } from './section2Shared'

const Section2Button = ({ as = 'button', className = '', children, theme = 'light', ...props }) => {
  const Component = as
  const fillLayerClass = theme === 'dark' ? darkFillLayerClass : lightFillLayerClass

  return (
    <Component className={`${fillButtonClass} ${className}`.trim()} {...props}>
      <span className={fillLayerClass}></span>
      <span className={fillTextClass}>{children}</span>
    </Component>
  )
}

export default Section2Button
