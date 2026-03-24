import React from 'react'
import { RiHeart3Fill, RiHeart3Line } from 'react-icons/ri'
import { darkFillLayerClass, fillButtonClass, fillTextClass, lightFillLayerClass } from './section2Shared'

const FavoriteButton = ({ active, onClick, theme = 'light', className = '' }) => {
  const fillLayerClass = theme === 'dark' ? darkFillLayerClass : lightFillLayerClass

  return (
    <button
      type='button'
      onClick={onClick}
      className={`${fillButtonClass} ${className}`.trim()}
    >
      <span className={fillLayerClass}></span>
      <span className={`${fillTextClass} inline-flex items-center gap-2`}>
        {active ? <RiHeart3Fill className='text-[#f28c28]' /> : <RiHeart3Line />}
        <span>{active ? 'Saved' : 'Favorite'}</span>
      </span>
    </button>
  )
}

export default FavoriteButton
