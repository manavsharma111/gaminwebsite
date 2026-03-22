export const genres = ['All', 'Action', 'Action Adventure', 'Action Horror', 'Action RPG', 'Character Action', 'Fighting', 'FPS', 'Narrative Adventure', 'Open World', 'Open World Action', 'Psychological Horror', 'RPG', 'Stealth Action', 'Survival Horror']

export const platforms = ['All', 'PC', 'PlayStation']

export const fillButtonClass =
  'group relative overflow-hidden rounded-full border-0 border-transparent outline-none ring-0 bg-[#5f2748] px-5 py-3 text-sm font-medium text-white hover:border-transparent focus:border-transparent focus:outline-none'

export const fillLayerClass =
  'absolute inset-x-0 bottom-0 h-0 bg-[#fff3e7] transition-all duration-300 ease-out group-hover:h-full'

export const fillTextClass =
  'relative z-10 transition-colors duration-300 group-hover:text-[#4d1836]'

export const modalCloseButtonClass =
  'group absolute right-5 top-5 z-20 overflow-hidden rounded-full border-0 border-transparent bg-[#5f2748] px-4 py-2 text-sm font-medium text-white outline-none ring-0 hover:border-transparent focus:border-transparent focus:outline-none sm:right-8 sm:top-6'

export const buildSteamSearch = (title) =>
  `https://store.steampowered.com/search/?term=${encodeURIComponent(title)}`

export const buildSteamReviews = (title) =>
  `https://store.steampowered.com/search/?term=${encodeURIComponent(`${title} reviews`)}`

export const getFranchise = (title) => {
  if (title.startsWith('Resident Evil')) return 'Resident Evil'
  if (title.startsWith('Silent Hill')) return 'Silent Hill'
  if (title.startsWith('Dark Souls')) return 'Dark Souls'
  if (title.startsWith('Tomb Raider') || title.startsWith('Rise of the Tomb Raider') || title.startsWith('Shadow of the Tomb Raider')) return 'Tomb Raider'
  if (title.startsWith('Far Cry')) return 'Far Cry'
  if (title.startsWith('Tekken')) return 'Tekken'
  if (title.startsWith('Elden Ring')) return 'Elden Ring'
  if (title.startsWith('The Evil Within')) return 'The Evil Within'
  if (title.startsWith('Devil May Cry')) return 'Devil May Cry'
  if (title.startsWith('The Last of Us')) return 'The Last of Us'
  if (title.startsWith('Mortal Kombat')) return 'Mortal Kombat'
  if (title.startsWith('God of War')) return 'God of War'
  if (title.startsWith('The Witcher')) return 'The Witcher'
  if (title.startsWith('Assassin')) return "Assassin's Creed"
  if (title.startsWith('Detroit')) return 'Detroit'
  if (title.startsWith('Sleeping Dogs')) return 'Sleeping Dogs'
  return 'Standalone'
}
