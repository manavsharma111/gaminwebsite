import React from 'react'

const GamePoster = ({ game, compact = false }) => (
  <div
    className={`relative overflow-hidden ${compact ? 'h-[320px] sm:h-[420px]' : 'h-72'} rounded-[2rem] bg-gradient-to-br ${game.accent}`}
  >
    {game.image ? (
      <img
        src={game.image}
        alt={game.title}
        className='absolute inset-0 h-full w-full object-cover'
      />
    ) : null}
    <div className='absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.14),transparent_35%,rgba(34,8,24,0.72))]'></div>
    <div className='absolute right-4 top-4 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-white/90'>
      {game.platform}
    </div>
    <div className='absolute bottom-0 left-0 right-0 p-5'>
      <p className='text-xs uppercase tracking-[0.25em] text-white/75'>{game.genre}</p>
      <h3 className='mt-2 text-2xl font-bold leading-tight text-white'>{game.title}</h3>
      <p className='mt-1 text-sm text-[#fff1ea]/80'>{game.studio}</p>
    </div>
  </div>
)

export default GamePoster
