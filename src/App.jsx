import React, { useEffect, useMemo, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Loader from "./components/Loader"
import Arrow from './components/Section1/Arrow'
import { RiArrowUpLine } from 'react-icons/ri'
import Section1 from './components/Section1/Section1'
import Section2, { gameCatalog } from './components/Section2/Section2'
import GameDetailsPage from './components/Section2/GameDetailsPage'

const AUTH_STORAGE_KEY = 'game-library-auth'
const FAVORITES_STORAGE_KEY = 'game-library-favorites'
const CUSTOM_GAMES_STORAGE_KEY = 'game-library-custom-games'
const CUSTOM_HERO_CARDS_STORAGE_KEY = 'game-library-custom-hero-cards'

const readStorage = (key, fallback) => {
  if (typeof window === 'undefined') return fallback

  try {
    const value = window.localStorage.getItem(key)
    return value ? JSON.parse(value) : fallback
  } catch {
    return fallback
  }
}

const App = () => {
  const [loading, setLoading] = useState(true)
  const [theme, setTheme] = useState('light')
  const [showSectionButton, setShowSectionButton] = useState(false)
  const [authUser, setAuthUser] = useState(() => readStorage(AUTH_STORAGE_KEY, null))
  const [favoriteIds, setFavoriteIds] = useState(() => readStorage(FAVORITES_STORAGE_KEY, []))
  const [customGames, setCustomGames] = useState(() => readStorage(CUSTOM_GAMES_STORAGE_KEY, []))
  const [customHeroCards, setCustomHeroCards] = useState(() => readStorage(CUSTOM_HERO_CARDS_STORAGE_KEY, []))

  useEffect(() => {
    document.body.className = theme === 'dark' ? 'bg-[#111111]' : 'bg-[#fff7f1]'
  }, [theme])

  useEffect(() => {
    window.localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(authUser))
  }, [authUser])

  useEffect(() => {
    window.localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favoriteIds))
  }, [favoriteIds])

  useEffect(() => {
    window.localStorage.setItem(CUSTOM_GAMES_STORAGE_KEY, JSON.stringify(customGames))
  }, [customGames])

  useEffect(() => {
    window.localStorage.setItem(CUSTOM_HERO_CARDS_STORAGE_KEY, JSON.stringify(customHeroCards))
  }, [customHeroCards])

  useEffect(() => {
    const handleScrollVisibility = () => {
      const section2 = document.getElementById('section-2')

      if (!section2) {
        setShowSectionButton(false)
        return
      }

      const { top } = section2.getBoundingClientRect()
      setShowSectionButton(top <= window.innerHeight * 0.7)
    }

    handleScrollVisibility()
    window.addEventListener('scroll', handleScrollVisibility)
    window.addEventListener('resize', handleScrollVisibility)

    return () => {
      window.removeEventListener('scroll', handleScrollVisibility)
      window.removeEventListener('resize', handleScrollVisibility)
    }
  }, [])

  const handleScrollToSection1 = () => {
    document.getElementById('section-1')?.scrollIntoView({ behavior: 'smooth' })
  }

  const games = useMemo(() => [...gameCatalog, ...customGames], [customGames])

  const handleToggleFavorite = (gameId) => {
    setFavoriteIds((current) =>
      current.includes(gameId)
        ? current.filter((id) => id !== gameId)
        : [...current, gameId]
    )
  }

  const handleLogin = ({ email, password }) => {
    const normalizedEmail = email.trim().toLowerCase()

    if (normalizedEmail === 'admin@gamelibrary.dev' && password === 'admin123') {
      setAuthUser({ name: 'Admin', role: 'admin', email: normalizedEmail })
      return { ok: true }
    }

    if (normalizedEmail === 'user@gamelibrary.dev' && password === 'user123') {
      setAuthUser({ name: 'Player One', role: 'user', email: normalizedEmail })
      return { ok: true }
    }

    return { ok: false, message: 'Use demo admin/user credentials.' }
  }

  const handleQuickLogin = (role) => {
    if (role === 'admin') {
      setAuthUser({ name: 'Admin', role: 'admin', email: 'admin@gamelibrary.dev' })
      return
    }

    setAuthUser({ name: 'Player One', role: 'user', email: 'user@gamelibrary.dev' })
  }

  const handleLogout = () => {
    setAuthUser(null)
  }

  const handleAddGame = (gameInput) => {
    const nextGame = {
      ...gameInput,
      id: Date.now(),
      popularity: Number(gameInput.popularity),
      rating: Number(gameInput.rating),
      releaseYear: Number(gameInput.releaseYear),
    }

    setCustomGames((current) => [nextGame, ...current])
    return nextGame
  }

  const handleAddHeroCard = (cardInput) => {
    const nextCard = {
      ...cardInput,
      id: Date.now(),
    }

    setCustomHeroCards((current) => [nextCard, ...current])
    return nextCard
  }

  const baseUsers = [
    { img: 'https://preview.redd.it/leon-s-kennedy-from-resident-evil-4-remake-renders-made-in-v0-gownbxojlz7b1.jpg?width=2160&format=pjpg&auto=webp&s=2a08db25f020babdec7d065f20482c3934157f38', 
      name: 'Leon S. Kennedy',
       game: 'Resident Evil 4',
       buyLink: 'https://store.steampowered.com/app/2050650/Resident_Evil_4/' },
    {
      img: 'https://www.toyark.com/wp-content/uploads/2018/01/Kratos-God-of-War-2018-037-scaled.jpg',
       name: 'Kratos',
        game: 'God of War',
        buyLink: 'https://store.steampowered.com/app/1593500/God_of_War/'
    },
    {
      img: 'https://wallpapercave.com/wp/wp8171639.jpg',
       name: 'Dante',
        game: 'Devil May Cry 5',
        buyLink: 'https://store.steampowered.com/app/601150/Devil_May_Cry_5/'
    },
    {
      img: 'https://wallpapercave.com/wp/wp6442454.jpg',
       name: 'Virgil',
        game: 'Devil May Cry 5',
        buyLink: 'https://store.steampowered.com/app/601150/Devil_May_Cry_5/'

    },
    {
      img: 'https://wallpapercat.com/w/full/c/4/0/462570-2048x2732-phone-hd-scorpion-mortal-kombat-wallpaper-photo.jpg',
        name: 'Scorpion', 
        game: 'Mortal Kombat 1',
        buyLink: 'https://store.steampowered.com/app/1971870/Mortal_Kombat_1/'
    },
    {
      img: 'https://i.pinimg.com/originals/6f/1f/e8/6f1fe8a0762fd32094b658ffd2785d0f.jpg',
       name: 'Sub-Zero', 
       game: 'Mortal Kombat 1',
       buyLink: 'https://store.steampowered.com/app/1971870/Mortal_Kombat_1/'
    },
    {
      img: 'https://tse1.mm.bing.net/th/id/OIP.ldMpiY7ERUsE8R7WUMaDGgHaLH?rs=1&pid=ImgDetMain&o=7&rm=3',
        name: 'Zoel Miller',
          game: 'The Last of Us Part 2',
          buyLink: 'https://store.playstation.com/'
    },
    {
      img: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2021/05/Resident-Evil-Who-Is-Ethan-Winters.jpg',
        name: 'Ethan Winters',  
        game: 'Resident Evil 7',
        buyLink: 'https://store.steampowered.com/app/418370/Resident_Evil_7_Biohazard/'
    },
    {
      img: 'https://i.pinimg.com/originals/93/86/9f/93869f59763b4126567d5aeea953e720.jpg',
        name: 'Albert Wesker', 
        game: 'Resident Evil 4',
        buyLink: 'https://store.steampowered.com/app/2050650/Resident_Evil_4/'
    },
    {
      img: 'https://tse1.mm.bing.net/th/id/OIP.q1_Ukd-lXOAyCcVBNQZpSgHaNK?w=1440&h=2560&rs=1&pid=ImgDetMain&o=7&rm=3',
        name: 'Geralt of Rivia', 
        game: 'The Witcher 3',
        buyLink: 'https://store.steampowered.com/app/292030/The_Witcher_3_Wild_Hunt/'
    },
      {
      img: 'https://i.pinimg.com/originals/da/c9/d7/dac9d77a28a981e0f3a3cb164cc958f5.jpg',
        name: 'James Sunderland', 
        game: 'Silent Hill 2',
        buyLink: 'https://store.steampowered.com/app/611800/Silent_Hill_2/'
    }
  ]
  const users = useMemo(() => [...baseUsers, ...customHeroCards], [customHeroCards])
  if (loading) {
  return <Loader onFinish={() => setLoading(false)} />
}
  return (
    // <div className={theme === 'dark' ? 'bg-[#111111] text-white' : 'bg-[#fff7f1] text-[#4a1834]'}>
    <div
    className={`${
      theme === 'dark'
        ? 'bg-[#111111] text-white'
        : 'bg-[#fff7f1] text-[#4a1834]'
    } transform-gpu transition-all duration-700 ${
      loading ? 'translate-y-10 opacity-0' : 'translate-y-0 opacity-100'
    }`}
  >
      <Routes>
        <Route
          path='/'
          element={
            <>
              {/* <Arrow /> */}
              <Section1
                users={users}
                theme={theme}
                onToggleTheme={() => setTheme((current) => current === 'dark' ? 'light' : 'dark')}
                authUser={authUser}
                onQuickLogin={handleQuickLogin}
                onLogout={handleLogout}
                onAddGame={handleAddGame}
                onAddHeroCard={handleAddHeroCard}
              />
              <Section2
                theme={theme}
                games={games}
                favoriteIds={favoriteIds}
                authUser={authUser}
                onToggleFavorite={handleToggleFavorite}
                onAddGame={handleAddGame}
              />
              {showSectionButton ? (
                <button
                  type='button'
                  onClick={handleScrollToSection1}
                  aria-label='Go to Section 1'
                  className={`fixed bottom-5 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-300 hover:-translate-y-1 sm:bottom-7 sm:right-6 sm:h-14 sm:w-14 ${theme === 'dark' ? 'border-white/10 bg-[#1f1f1f] text-[#fff3e7] shadow-[0_16px_32px_rgba(0,0,0,0.32)] hover:shadow-[0_0_0_4px_rgba(244,162,97,0.18),0_18px_38px_rgba(244,162,97,0.28)]' : 'border-[#ebd8cf] bg-white text-[#4a1834] shadow-[0_16px_32px_rgba(93,30,65,0.16)] hover:shadow-[0_0_0_4px_rgba(244,162,97,0.22),0_18px_38px_rgba(244,162,97,0.24)]'}`}
                >
                  <RiArrowUpLine className='text-2xl sm:text-3xl' />
                </button>
              ) : null}
            </>
          }
        />
        <Route
          path='/games/:gameId'
          element={
            <GameDetailsPage
              theme={theme}
              games={games}
              favoriteIds={favoriteIds}
              onToggleFavorite={handleToggleFavorite}
            />
          }
        />
      </Routes>
    </div>
  )
}

export default App
