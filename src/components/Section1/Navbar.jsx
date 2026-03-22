import React from 'react'

const Navbar = ({ theme, onToggleTheme }) => {
  const handleGoToGames = () => {
    document.getElementById('section-2')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleOpenReviews = () => {
    const gameName = window.prompt('Kaunse game ki Steam reviews dekhni hain?')
    if (!gameName?.trim()) return

    const steamSearchUrl = `https://store.steampowered.com/search/?term=${encodeURIComponent(gameName.trim())}`
    window.open(steamSearchUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className='flex items-center justify-between px-4 py-4 sm:px-6 lg:px-16 lg:py-6'>
      <div className='flex items-center gap-3'>
        <button onClick={handleGoToGames} className={`group relative overflow-hidden rounded-full border-none px-4 py-2 text-sm outline-none sm:px-6 sm:py-3 sm:text-base ${theme === 'dark' ? 'bg-[#2c2c2c] text-[#fff3e7]' : 'bg-gray-500 text-amber-50'}`}>
          <span className='absolute inset-x-0 bottom-0 h-0 bg-black transition-all duration-300 ease-out group-hover:h-full'></span>
          <span className='relative z-10 transition-colors duration-300 group-hover:text-amber-50'>Games</span>
        </button>
        <button onClick={onToggleTheme} className={`group relative overflow-hidden rounded-full border-none px-4 py-2 text-xs uppercase tracking-[0.2em] outline-none sm:text-sm ${theme === 'dark' ? 'bg-[#2c2c2c] text-[#fff3e7]' : 'bg-gray-500 text-white'}`}>
          <span className='absolute inset-x-0 bottom-0 h-0 bg-black transition-all duration-300 ease-out group-hover:h-full'></span>
          <span className='relative z-10 transition-colors duration-300 group-hover:text-amber-50'>{theme === 'dark' ? 'Light' : 'Dark'}</span>
        </button>
      </div>
        <button onClick={handleOpenReviews} className={`group relative overflow-hidden rounded-full border-none px-4 py-2 text-xs uppercase tracking-[0.2em] outline-none sm:text-sm sm:tracking-widest ${theme === 'dark' ? 'bg-[#2c2c2c] text-[#fff3e7]' : 'bg-gray-500 text-white'}`}>
          <span className='absolute inset-x-0 bottom-0 h-0 bg-black transition-all duration-300 ease-out group-hover:h-full'></span>
          <span className='relative z-10 transition-colors duration-300 group-hover:text-amber-50'>Reviews</span>
        </button>
    </div>
  )
}

export default Navbar
