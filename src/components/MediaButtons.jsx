import { FaPlay, FaPause } from 'react-icons/fa'
import { BsShuffle, BsRepeat1 } from 'react-icons/bs'
import { GiPreviousButton, GiNextButton } from 'react-icons/gi'
import usePlayer from '../hooks/usePlayer'

const MediaButtons = () => {
  const { showed, playing, play, pause, nextSong, prevSong, repeat, toggleRepeat, shuffle, toggleShuffle } = usePlayer()

  return (
    <div className={`flex justify-between items-center max-w-xl mx-auto ${showed && 'w-full'}`}>
      {
        showed && (
          <>
            <button
              className={`text-xl sm:text-2xl ${shuffle ? 'text-red-500 scale-125' : 'text-white'} transition-all duration-100`}
              onClick={toggleShuffle}
            >
              <BsShuffle />
            </button>
            <button
              className='text-3xl sm:text-5xl text-white active:scale-125 transition-transform'
              onClick={prevSong}
            >
              <GiPreviousButton />
            </button>
          </>
        )
      }
      <button
        className={`text-white shadow-xl shadow-black
        ${
          showed
            ? 'text-3xl sm:text-5xl bg-zinc-800 active:bg-black p-5 rounded-full'
            : 'text-xl sm:text-2xl'
        }`}
        onClick={playing ? pause : play}
      >
        {
          playing
            ? <FaPause />
            : <FaPlay className='translate-x-1' />
        }
      </button>
      {
        showed && (
          <>
            <button
              className='text-3xl sm:text-5xl text-white active:scale-125 transition-transform'
              onClick={nextSong}
            >
              <GiNextButton />
            </button>
            <button
              className={`text-xl sm:text-2xl ${repeat ? 'text-red-500 scale-125' : 'text-white'} transition-all duration-100`}
              onClick={toggleRepeat}
            >
              <BsRepeat1 />
            </button>
          </>
        )
      }
    </div>
  )
}
export default MediaButtons
