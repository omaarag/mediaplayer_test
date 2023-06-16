import usePlayer from '../hooks/usePlayer'

const Image = () => {
  const { currentSong } = usePlayer()

  return (
    <div className='flex items-center justify-center'>
      <img
        src={currentSong.image}
        className='w-11/12 sm:w-full sm:max-w-sm  h-auto rounded-md border border-black shadow-xl shadow-black'
        alt='avatar'
      />
    </div>
  )
}
export default Image
