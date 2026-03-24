import React, { useState } from 'react'
import { RiAddCircleLine, RiLogoutBoxRLine, RiSearchLine, RiShieldUserLine, RiUser3Line, RiUserSmileLine } from 'react-icons/ri'
import { genres, platforms } from '../Section2/section2Shared'

const initialAdminForm = {
  title: '',
  studio: '',
  franchise: '',
  genre: 'Action',
  platform: 'PC',
  releaseYear: '2025',
  rating: '8.8',
  popularity: '80',
  image: '',
  description: '',
  trailer: '',
}

const initialHeroForm = {
  name: '',
  game: '',
  img: '',
  buyLink: '',
}

const createSlug = (value) =>
  value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

const buildAccent = (title) => {
  const palette = [
    'from-[#42192c] via-[#7b3151] to-[#ff9836]',
    'from-[#2f1120] via-[#66263f] to-[#ea8327]',
    'from-[#351423] via-[#75314d] to-[#f39a3d]',
    'from-[#2d101c] via-[#5b2139] to-[#df7d29]',
  ]

  return palette[title.length % palette.length]
}

const Navbar = ({ theme, onToggleTheme, authUser, onQuickLogin, onLogout, onAddGame, onAddHeroCard }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isAdminPanelOpen, setIsAdminPanelOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [adminForm, setAdminForm] = useState(initialAdminForm)
  const [heroForm, setHeroForm] = useState(initialHeroForm)
  const [adminMessage, setAdminMessage] = useState('')

  const handleGoToGames = () => {
    document.getElementById('section-2')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleSteamSearch = (event) => {
    event.preventDefault()
    if (!searchQuery.trim()) return

    const query = encodeURIComponent(searchQuery.trim())
    const steamSearchUrl = `https://store.steampowered.com/search/?term=${query}`
    window.location.href = steamSearchUrl
  }

  const handleAdminSubmit = (event) => {
    event.preventDefault()

    onAddGame({
      ...adminForm,
      trailer: adminForm.trailer || `https://www.youtube.com/results?search_query=${encodeURIComponent(`${adminForm.title} trailer`)}`,
      accent: buildAccent(adminForm.title),
      idSlug: createSlug(adminForm.title),
    })

    setAdminForm(initialAdminForm)
    setAdminMessage('New game added to library.')
  }

  const handleHeroCardSubmit = (event) => {
    event.preventDefault()

    onAddHeroCard(heroForm)
    setHeroForm(initialHeroForm)
    setAdminMessage('New Section1 card added.')
  }

  const shellClass =
    theme === 'dark' ? 'bg-[#2c2c2c] text-[#fff3e7]' : 'bg-gray-500 text-white'

  const panelClass =
    theme === 'dark'
      ? 'border border-white/10 bg-[#171717] text-[#fff3e7] shadow-[0_24px_50px_rgba(0,0,0,0.32)]'
      : 'border border-[#ead3c6] bg-white text-[#4a1834] shadow-[0_24px_50px_rgba(93,30,65,0.12)]'

  const softCardClass =
    theme === 'dark' ? 'bg-[#111111] text-[#fff3e7]' : 'bg-[#fff3ea] text-[#4a1834]'

  const inputClass =
    theme === 'dark'
      ? 'border border-white/10 bg-[#111111] text-[#fff3e7] focus:border-[#f4a261]'
      : 'border border-[#ebd8cf] bg-[#fff7f1] text-[#4a1834] focus:border-[#d47b2f]'

  return (
    <div className='relative px-4 py-4 sm:px-6 lg:px-16 lg:py-6'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <button onClick={handleGoToGames} className={`group relative overflow-hidden rounded-full border-none px-4 py-2 text-sm outline-none sm:px-6 sm:py-3 sm:text-base ${theme === 'dark' ? 'bg-[#2c2c2c] text-[#fff3e7]' : 'bg-gray-500 text-amber-50'}`}>
            <span className='absolute inset-x-0 bottom-0 h-0 bg-black transition-all duration-300 ease-out group-hover:h-full'></span>
            <span className='relative z-10 transition-colors duration-300 group-hover:text-amber-50'>Games</span>
          </button>
          <button onClick={onToggleTheme} className={`group relative overflow-hidden rounded-full border-none px-4 py-2 text-xs uppercase tracking-[0.2em] outline-none sm:text-sm ${shellClass}`}>
            <span className='absolute inset-x-0 bottom-0 h-0 bg-black transition-all duration-300 ease-out group-hover:h-full'></span>
            <span className='relative z-10 transition-colors duration-300 group-hover:text-amber-50'>{theme === 'dark' ? 'Light' : 'Dark'}</span>
          </button>
        </div>

        <div className='flex items-center gap-3'>
          <button
            type='button'
            onClick={() => {
              setIsSearchOpen((current) => !current)
              setIsProfileOpen(false)
              setIsAdminPanelOpen(false)
            }}
            className={`group relative overflow-hidden rounded-full border-none px-4 py-2 text-xs uppercase tracking-[0.2em] outline-none sm:text-sm sm:tracking-widest ${shellClass}`}
          >
            <span className='absolute inset-x-0 bottom-0 h-0 bg-black transition-all duration-300 ease-out group-hover:h-full'></span>
            <span className='relative z-10 transition-colors duration-300 group-hover:text-amber-50'>Steam Search</span>
          </button>
          <button
            type='button'
            onClick={() => {
              setIsProfileOpen((current) => !current)
              setIsSearchOpen(false)
            }}
            className={`group relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border-none outline-none ${shellClass}`}
          >
            <span className='absolute inset-x-0 bottom-0 h-0 bg-black transition-all duration-300 ease-out group-hover:h-full'></span>
            <span className='relative z-10'>
              <RiUser3Line className='text-xl' />
            </span>
          </button>
        </div>
      </div>

      {isSearchOpen ? (
        <div className={`absolute left-4 right-4 top-[calc(100%+0.6rem)] z-50 rounded-[2rem] p-5 sm:left-6 sm:right-6 lg:left-16 lg:right-16 ${panelClass}`}>
          <div className='max-w-3xl'>
            <p className={`text-xs uppercase tracking-[0.32em] ${theme === 'dark' ? 'text-[#f4a261]' : 'text-[#9a5a33]'}`}>Steam Search</p>
            {/* <h3 className='mt-3 text-2xl font-bold'>Find Steam Reviews Without Popup</h3> */}
            {/* <p className={`mt-3 text-sm leading-6 ${theme === 'dark' ? 'text-[#c8b2bb]' : 'text-[#7b4861]'}`}>
              Game name likho aur direct Steam search page par jao.
            </p> */}
          </div>
          <form onSubmit={handleSteamSearch} className='mt-5 flex flex-col gap-3 sm:flex-row'>
            <label className='flex-1'>
              {/* <span className='sr-only'>Search</span> */}
              <input
                type='text'
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder='Search any game on Steam'
                className={`w-full rounded-full px-4 py-3 text-sm outline-none transition ${inputClass}`}
              />
            </label>
            <button type='submit' className={`group relative overflow-hidden rounded-full border-none px-5 py-3 text-sm font-medium outline-none ${shellClass}`}>
              <span className='absolute inset-x-0 bottom-0 h-0 bg-black transition-all duration-300 ease-out group-hover:h-full'></span>
              <span className='relative z-10 inline-flex items-center gap-2 transition-colors duration-300 group-hover:text-amber-50'>
                <RiSearchLine />
                {/* Search Steam */}
              </span>
            </button>
          </form>
        </div>
      ) : null}

      {isProfileOpen && !authUser ? (
        <div className={`absolute right-4 top-[calc(100%+0.6rem)] z-50 w-[min(26rem,calc(100vw-2rem))] rounded-[2rem] p-5 sm:right-6 lg:right-16 ${panelClass}`}>
          <div className='space-y-3'>
            <div>
              <p className={`text-xs uppercase tracking-[0.26em] ${theme === 'dark' ? 'text-[#f4a261]' : 'text-[#9a5a33]'}`}>Profile Access</p>
              <h3 className='mt-2 text-lg font-bold'>Choose Login Role</h3>
            </div>
            <button
              type='button'
              onClick={() => {
                onQuickLogin('user')
                setIsProfileOpen(false)
              }}
              className={`group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-full border-none px-4 py-3 text-sm outline-none ${shellClass}`}
            >
              <span className='absolute inset-x-0 bottom-0 h-0 bg-black transition-all duration-300 ease-out group-hover:h-full'></span>
              <span className='relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-amber-50'>
                <RiUserSmileLine />
                Continue as User
              </span>
            </button>
            <button
              type='button'
              onClick={() => {
                onQuickLogin('admin')
                setIsProfileOpen(false)
              }}
              className={`group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-full border-none px-4 py-3 text-sm outline-none ${shellClass}`}
            >
              <span className='absolute inset-x-0 bottom-0 h-0 bg-black transition-all duration-300 ease-out group-hover:h-full'></span>
              <span className='relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-amber-50'>
                <RiShieldUserLine />
                Continue as Admin
              </span>
            </button>
          </div>
        </div>
      ) : null}

      {isProfileOpen && authUser ? (
        <div className={`absolute right-4 top-[calc(100%+0.6rem)] z-50 w-[min(32rem,calc(100vw-2rem))] rounded-[2rem] p-5 sm:right-6 lg:right-16 ${panelClass}`}>
          <div className='flex flex-col gap-5'>
            <div className='max-w-3xl'>
              <p className={`text-xs uppercase tracking-[0.32em] ${theme === 'dark' ? 'text-[#f4a261]' : 'text-[#9a5a33]'}`}>Login Status</p>
              <h3 className='mt-3 text-2xl font-bold'>Profile Connected</h3>
              {/* <p className={`mt-3 text-sm leading-6 ${theme === 'dark' ? 'text-[#c8b2bb]' : 'text-[#7b4861]'}`}>
                Aapka role active hai. Admin floating panel se new games add kar sakta hai.
              </p> */}
            </div>
            <div className='flex flex-col items-start gap-3'>
              <div className={`rounded-[1.5rem] px-4 py-3 text-sm ${softCardClass}`}>
                Signed in as {authUser.name} ({authUser.role})
              </div>
              <div className='flex flex-wrap gap-3'>
                {authUser.role === 'admin' ? (
                  <button
                    type='button'
                    onClick={() => {
                      setIsAdminPanelOpen((current) => !current)
                      setIsProfileOpen(false)
                    }}
                    className={`group relative flex items-center justify-center gap-2 overflow-hidden rounded-full border-none px-5 py-3 text-sm outline-none ${shellClass}`}
                  >
                    <span className='absolute inset-x-0 bottom-0 h-0 bg-black transition-all duration-300 ease-out group-hover:h-full'></span>
                    <span className='relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-amber-50'>
                      <RiAddCircleLine />
                      {isAdminPanelOpen ? 'Hide Admin Panel' : 'Open Admin Panel'}
                    </span>
                  </button>
                ) : null}
                <button
                  type='button'
                  onClick={() => {
                    setIsAdminPanelOpen(false)
                    onLogout()
                    setIsProfileOpen(false)
                  }}
                  className={`group relative flex items-center justify-center gap-2 overflow-hidden rounded-full border-none px-5 py-3 text-sm outline-none ${shellClass}`}
                >
                  <span className='absolute inset-x-0 bottom-0 h-0 bg-black transition-all duration-300 ease-out group-hover:h-full'></span>
                  <span className='relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-amber-50'>
                    <RiLogoutBoxRLine />
                    Logout
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {isAdminPanelOpen && authUser?.role === 'admin' ? (
        <div className={`absolute left-4 right-4 top-[calc(100%+0.6rem)] z-50 rounded-[2rem] p-5 sm:left-6 sm:right-6 lg:left-16 lg:right-16 ${panelClass}`}>
          <div className='max-w-3xl'>
            <p className={`text-xs uppercase tracking-[0.32em] ${theme === 'dark' ? 'text-[#f4a261]' : 'text-[#9a5a33]'}`}>Admin Panel</p>
            <h3 className='mt-3 text-2xl font-bold'>Add Game To Library</h3>
            {/* <p className={`mt-3 text-sm leading-6 ${theme === 'dark' ? 'text-[#c8b2bb]' : 'text-[#7b4861]'}`}>
              Floating admin form me franchise field bhi available hai.
            </p> */}
          </div>
          {adminMessage ? (
            <div className={`mt-4 rounded-[1.5rem] px-4 py-3 text-sm ${softCardClass}`}>
              {adminMessage}
            </div>
          ) : null}

          <form onSubmit={handleHeroCardSubmit} className='mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-4'>
            <div className='md:col-span-2 xl:col-span-4'>
              <p className={`text-xs uppercase tracking-[0.26em] ${theme === 'dark' ? 'text-[#f4a261]' : 'text-[#9a5a33]'}`}>Section 1</p>
              <h4 className='mt-2 text-lg font-semibold'>Add Goated Character Card</h4>
            </div>
            <input type='text' value={heroForm.name} onChange={(event) => setHeroForm((current) => ({ ...current, name: event.target.value }))} placeholder='Character name' required className={`rounded-[1.2rem] px-4 py-3 text-sm outline-none transition ${inputClass}`} />
            <input type='text' value={heroForm.game} onChange={(event) => setHeroForm((current) => ({ ...current, game: event.target.value }))} placeholder='Game name' required className={`rounded-[1.2rem] px-4 py-3 text-sm outline-none transition ${inputClass}`} />
            <input type='url' value={heroForm.img} onChange={(event) => setHeroForm((current) => ({ ...current, img: event.target.value }))} placeholder='Character image URL' required className={`rounded-[1.2rem] px-4 py-3 text-sm outline-none transition ${inputClass}`} />
            <input type='url' value={heroForm.buyLink} onChange={(event) => setHeroForm((current) => ({ ...current, buyLink: event.target.value }))} placeholder='View details link' required className={`rounded-[1.2rem] px-4 py-3 text-sm outline-none transition ${inputClass}`} />
            <div className='md:col-span-2 xl:col-span-4 flex flex-wrap gap-3'>
              <button type='submit' className={`group relative overflow-hidden rounded-full border-none px-5 py-3 text-sm outline-none ${shellClass}`}>
                <span className='absolute inset-x-0 bottom-0 h-0 bg-black transition-all duration-300 ease-out group-hover:h-full'></span>
                <span className='relative z-10 inline-flex items-center gap-2 transition-colors duration-300 group-hover:text-amber-50'>
                  <RiAddCircleLine />
                  Add Goated Character Card
                </span>
              </button>
            </div>
          </form>


          <form onSubmit={handleAdminSubmit} className='mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3'>
            <div className='md:col-span-2 xl:col-span-3'>
              <p className={`text-xs uppercase tracking-[0.26em] ${theme === 'dark' ? 'text-[#f4a261]' : 'text-[#9a5a33]'}`}>Section 2</p>
              <h4 className='mt-2 text-lg font-semibold'>Add Game Library Card</h4>
            </div>
            <input type='text' value={adminForm.title} onChange={(event) => setAdminForm((current) => ({ ...current, title: event.target.value }))} placeholder='Game title' required className={`rounded-[1.2rem] px-4 py-3 text-sm outline-none transition ${inputClass}`} />
            <input type='text' value={adminForm.studio} onChange={(event) => setAdminForm((current) => ({ ...current, studio: event.target.value }))} placeholder='Studio' required className={`rounded-[1.2rem] px-4 py-3 text-sm outline-none transition ${inputClass}`} />
            <input type='text' value={adminForm.franchise} onChange={(event) => setAdminForm((current) => ({ ...current, franchise: event.target.value }))} placeholder='Franchise' required className={`rounded-[1.2rem] px-4 py-3 text-sm outline-none transition ${inputClass}`} />
            <select value={adminForm.genre} onChange={(event) => setAdminForm((current) => ({ ...current, genre: event.target.value }))} className={`rounded-[1.2rem] px-4 py-3 text-sm outline-none transition ${inputClass}`}>
              {genres.filter((item) => item !== 'All').map((item) => (
                <option key={item} value={item}>{item}</option>
              ))}
            </select>
            <select value={adminForm.platform} onChange={(event) => setAdminForm((current) => ({ ...current, platform: event.target.value }))} className={`rounded-[1.2rem] px-4 py-3 text-sm outline-none transition ${inputClass}`}>
              {platforms.filter((item) => item !== 'All').map((item) => (
                <option key={item} value={item}>{item}</option>
              ))}
            </select>
            <input type='number' min='1990' max='2035' value={adminForm.releaseYear} onChange={(event) => setAdminForm((current) => ({ ...current, releaseYear: event.target.value }))} placeholder='Release year' required className={`rounded-[1.2rem] px-4 py-3 text-sm outline-none transition ${inputClass}`} />
            <input type='number' min='1' max='10' step='0.1' value={adminForm.rating} onChange={(event) => setAdminForm((current) => ({ ...current, rating: event.target.value }))} placeholder='Rating' required className={`rounded-[1.2rem] px-4 py-3 text-sm outline-none transition ${inputClass}`} />
            <input type='number' min='1' max='100' value={adminForm.popularity} onChange={(event) => setAdminForm((current) => ({ ...current, popularity: event.target.value }))} placeholder='Popularity' required className={`rounded-[1.2rem] px-4 py-3 text-sm outline-none transition ${inputClass}`} />
            <input type='url' value={adminForm.image} onChange={(event) => setAdminForm((current) => ({ ...current, image: event.target.value }))} placeholder='Poster image URL' required className={`rounded-[1.2rem] px-4 py-3 text-sm outline-none transition ${inputClass}`} />
            <input type='url' value={adminForm.trailer} onChange={(event) => setAdminForm((current) => ({ ...current, trailer: event.target.value }))} placeholder='Trailer URL' className={`rounded-[1.2rem] px-4 py-3 text-sm outline-none transition ${inputClass}`} />
            <textarea value={adminForm.description} onChange={(event) => setAdminForm((current) => ({ ...current, description: event.target.value }))} placeholder='Short description' required rows='4' className={`md:col-span-2 xl:col-span-3 rounded-[1.2rem] px-4 py-3 text-sm outline-none transition ${inputClass}`}></textarea>
            <div className='md:col-span-2 xl:col-span-3 flex flex-wrap gap-3'>
              <button type='submit' className={`group relative overflow-hidden rounded-full border-none px-5 py-3 text-sm outline-none ${shellClass}`}>
                <span className='absolute inset-x-0 bottom-0 h-0 bg-black transition-all duration-300 ease-out group-hover:h-full'></span>
                <span className='relative z-10 inline-flex items-center gap-2 transition-colors duration-300 group-hover:text-amber-50'>
                  <RiAddCircleLine />
                  Add Game To Library
                </span>
              </button>
              <button
                type='button'
                onClick={() => setIsAdminPanelOpen(false)}
                className={`group relative overflow-hidden rounded-full border-none px-5 py-3 text-sm outline-none ${shellClass}`}
              >
                <span className='absolute inset-x-0 bottom-0 h-0 bg-black transition-all duration-300 ease-out group-hover:h-full'></span>
                <span className='relative z-10 transition-colors duration-300 group-hover:text-amber-50'>Close Panel</span>
              </button>
            </div>
          </form>

          {/* <form onSubmit={handleHeroCardSubmit} className='mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-4'>
            <div className='md:col-span-2 xl:col-span-4'>
              <p className={`text-xs uppercase tracking-[0.26em] ${theme === 'dark' ? 'text-[#f4a261]' : 'text-[#9a5a33]'}`}>Section 1</p>
              <h4 className='mt-2 text-lg font-semibold'>Add Hero Card</h4>
            </div>
            <input type='text' value={heroForm.name} onChange={(event) => setHeroForm((current) => ({ ...current, name: event.target.value }))} placeholder='Character name' required className={`rounded-[1.2rem] px-4 py-3 text-sm outline-none transition ${inputClass}`} />
            <input type='text' value={heroForm.game} onChange={(event) => setHeroForm((current) => ({ ...current, game: event.target.value }))} placeholder='Game name' required className={`rounded-[1.2rem] px-4 py-3 text-sm outline-none transition ${inputClass}`} />
            <input type='url' value={heroForm.img} onChange={(event) => setHeroForm((current) => ({ ...current, img: event.target.value }))} placeholder='Character image URL' required className={`rounded-[1.2rem] px-4 py-3 text-sm outline-none transition ${inputClass}`} />
            <input type='url' value={heroForm.buyLink} onChange={(event) => setHeroForm((current) => ({ ...current, buyLink: event.target.value }))} placeholder='View details link' required className={`rounded-[1.2rem] px-4 py-3 text-sm outline-none transition ${inputClass}`} />
            <div className='md:col-span-2 xl:col-span-4 flex flex-wrap gap-3'>
              <button type='submit' className={`group relative overflow-hidden rounded-full border-none px-5 py-3 text-sm outline-none ${shellClass}`}>
                <span className='absolute inset-x-0 bottom-0 h-0 bg-black transition-all duration-300 ease-out group-hover:h-full'></span>
                <span className='relative z-10 inline-flex items-center gap-2 transition-colors duration-300 group-hover:text-amber-50'>
                  <RiAddCircleLine />
                  Add Section1 Card
                </span>
              </button>
            </div>
          </form> */}
        </div>
      ) : null}
    </div>
  )
}

export default Navbar
