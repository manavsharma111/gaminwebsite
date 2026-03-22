import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='group/card relative h-[420px] w-[260px] shrink-0 overflow-hidden rounded-4xl sm:h-[520px] sm:w-80 lg:h-full'>
      <img className='h-full w-full scale-100 rounded-4xl object-cover transition-transform duration-100 ease-in group-hover/card:scale-101' src={props.img} alt="" />
      <RightCardContent id={props.id} name={props.name} game={props.game} buyLink={props.buyLink} onNextCard={props.onNextCard} />
    </div>
  )
}

export default RightCard
