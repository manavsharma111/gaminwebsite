import React, { useRef } from 'react'
import RightCard from './RightCard'
// import { RiArrowRightUpFill } from 'react-icons/ri'

const RightContent = (props) => {
  const containerRef = useRef(null)

  const handleNextCard = (currentIndex) => {
    const container = containerRef.current
    if (!container) return

    const cards = container.children
    if (!cards.length) return

    const nextIndex = currentIndex === cards.length - 1 ? 0 : currentIndex + 1
    cards[nextIndex]?.scrollIntoView({
      behavior: 'smooth',
      inline: 'start',
      block: 'nearest',
    })
  }

  return (
    <div ref={containerRef} id='right-content' className='flex w-full flex-nowrap gap-4 overflow-x-auto rounded-4xl px-1 py-2 sm:gap-5 sm:p-4 lg:h-[75vh] lg:w-3/4'>
    {props.users.map(function(elem,idx){
      return <RightCard key={idx} id={idx} img={elem.img} name={elem.name} game={elem.game} buyLink={elem.buyLink} onNextCard={handleNextCard} />
    })}
    </div>
  )
}

export default RightContent
