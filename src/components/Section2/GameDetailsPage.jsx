import React from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { gameCatalog } from './Section2'
import GamePoster from './GamePoster'
import Section2Button from './Section2Button'
import { buildSteamReviews, buildSteamSearch, getFranchise } from './section2Shared'

const GameDetailsPage = ({ theme = 'light' }) => {
  const { gameId } = useParams()
  const game = gameCatalog.find((item) => String(item.id) === gameId)

  if (!game) {
    return <Navigate to='/' replace />
  }

  return (
    <section className={`min-h-screen px-4 py-12 sm:px-6 lg:px-10 ${theme === 'dark' ? 'bg-[#111111] text-[#fff3e7]' : 'bg-[#fff7f1] text-[#4a1834]'}`}>
      <div className='mx-auto max-w-6xl'>
        <div className='mb-8 flex flex-wrap items-center justify-between gap-4'>
          <div>
            <p className={`text-sm uppercase tracking-[0.32em] ${theme === 'dark' ? 'text-[#f4a261]' : 'text-[#9a5a33]'}`}>Game Details</p>
            <h1 className='mt-3 text-3xl font-bold sm:text-4xl'>{game.title}</h1>
          </div>

          <Section2Button as={Link} to='/'>
            Back to Library
          </Section2Button>
        </div>

        <div className={`grid gap-8 rounded-[2rem] p-5 lg:grid-cols-[0.95fr_1.05fr] ${theme === 'dark' ? 'border border-white/10 bg-[#1a1a1a] shadow-[0_20px_45px_rgba(0,0,0,0.35)]' : 'border border-[#e9cfc1] bg-white shadow-[0_20px_45px_rgba(93,30,65,0.08)]'}`}>
          <GamePoster game={game} compact />

          <div className='flex flex-col justify-between gap-6'>
            <div>
              <p className={`text-sm uppercase tracking-[0.3em] ${theme === 'dark' ? 'text-[#f4a261]' : 'text-[#9a5a33]'}`}>{game.platform}</p>
              <p className={`mt-3 text-sm uppercase tracking-[0.25em] ${theme === 'dark' ? 'text-[#c8b2bb]' : 'text-[#7b4861]'}`}>{getFranchise(game.title)}</p>
              <h2 className={`mt-4 text-3xl font-bold ${theme === 'dark' ? 'text-[#fff3e7]' : 'text-[#4a1834]'}`}>{game.title}</h2>
              <p className={`mt-2 ${theme === 'dark' ? 'text-[#c8b2bb]' : 'text-[#7b4861]'}`}>{game.studio}</p>
              <p className={`mt-5 text-sm leading-7 ${theme === 'dark' ? 'text-[#d6c1c9]' : 'text-[#6f3a56]'}`}>{game.description}</p>
            </div>

            <div className='grid gap-3 sm:grid-cols-4'>
              <div className={`rounded-[1.5rem] p-4 ${theme === 'dark' ? 'bg-[#101010]' : 'bg-[#fff7f1]'}`}>
                <p className={`text-xs uppercase tracking-[0.25em] ${theme === 'dark' ? 'text-[#f4a261]' : 'text-[#9a5a33]'}`}>Genre</p>
                <p className={`mt-2 font-medium ${theme === 'dark' ? 'text-[#fff3e7]' : 'text-[#4a1834]'}`}>{game.genre}</p>
              </div>
              <div className={`rounded-[1.5rem] p-4 ${theme === 'dark' ? 'bg-[#101010]' : 'bg-[#fff7f1]'}`}>
                <p className={`text-xs uppercase tracking-[0.25em] ${theme === 'dark' ? 'text-[#f4a261]' : 'text-[#9a5a33]'}`}>Year</p>
                <p className={`mt-2 font-medium ${theme === 'dark' ? 'text-[#fff3e7]' : 'text-[#4a1834]'}`}>{game.releaseYear}</p>
              </div>
              <div className={`rounded-[1.5rem] p-4 ${theme === 'dark' ? 'bg-[#101010]' : 'bg-[#fff7f1]'}`}>
                <p className={`text-xs uppercase tracking-[0.25em] ${theme === 'dark' ? 'text-[#f4a261]' : 'text-[#9a5a33]'}`}>Rating</p>
                <p className={`mt-2 font-medium ${theme === 'dark' ? 'text-[#fff3e7]' : 'text-[#4a1834]'}`}>{game.rating}/10</p>
              </div>
              <div className={`rounded-[1.5rem] p-4 ${theme === 'dark' ? 'bg-[#101010]' : 'bg-[#fff7f1]'}`}>
                <p className={`text-xs uppercase tracking-[0.25em] ${theme === 'dark' ? 'text-[#f4a261]' : 'text-[#9a5a33]'}`}>Popularity</p>
                <p className={`mt-2 font-medium ${theme === 'dark' ? 'text-[#fff3e7]' : 'text-[#4a1834]'}`}>{game.popularity}</p>
              </div>
            </div>

            <div className='flex flex-wrap gap-3'>
              <Section2Button as='a' href={buildSteamSearch(game.title)} target='_blank' rel='noreferrer'>
                Steam Link
              </Section2Button>
              <Section2Button as='a' href={game.trailer} target='_blank' rel='noreferrer'>
                Watch Trailer
              </Section2Button>
              <Section2Button as='a' href={buildSteamReviews(game.title)} target='_blank' rel='noreferrer'>
                Steam Reviews
              </Section2Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GameDetailsPage
