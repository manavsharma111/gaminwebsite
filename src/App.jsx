import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'
import GameDetailsPage from './components/Section2/GameDetailsPage'

const App = () => {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    document.body.className = theme === 'dark' ? 'bg-[#111111]' : 'bg-[#fff7f1]'
  }, [theme])

  const users = [
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
  return (
    <div className={theme === 'dark' ? 'bg-[#111111] text-white' : 'bg-[#fff7f1] text-[#4a1834]'}>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Section1 users={users} theme={theme} onToggleTheme={() => setTheme((current) => current === 'dark' ? 'light' : 'dark')} />
              <Section2 theme={theme} />
            </>
          }
        />
        <Route path='/games/:gameId' element={<GameDetailsPage theme={theme} />} />
      </Routes>
    </div>
  )
}

export default App
