import usePlayer from '../hooks/usePlayer'

const SongInfo = () => {
  const { showed, currentSong } = usePlayer()

  return (
    <div className={`${!showed && 'flex-1'} flex flex-col gap-2 items-center justify-center text-center`}>
      <p className={`${showed ? 'text-2xl sm:text-4xl font-bold' : 'text-xl'}`}>{currentSong.title}</p>
      <p className={`${showed ? 'text-lg sm:text-xl' : 'hidden sm:block text-lg'} leading-5`}>{currentSong.artist}</p>
    </div>
  )
}
export default SongInfo
