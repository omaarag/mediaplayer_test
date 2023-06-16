import PropTypes from 'prop-types'
import usePlayer from '../hooks/usePlayer'

const SongItem = ({ song }) => {
  const { id, image, title, artist } = song
  const { currentSong, playSong } = usePlayer()

  return (
    <button
      key={id}
      className={`flex items-center gap-2 p-2 w-full text-left border-b last-of-type:border-none border-white/20 text-sm sm:text-lg md:text-xl hover:bg-black/30 hover:cursor-pointer transition-all duration-500 ${id === currentSong.id && 'bg-red-900 hover:bg-red-900 text-white'}`}
      onClick={() => playSong(id)}
    >
      <img
        src={image}
        alt={title}
        className='max-w-[75px] sm:max-w-[100px] text-center'
      />
      <div className='flex flex-col'>
        <span className='font-bold'>{title}</span>
        <span className=''>{artist}</span>
      </div>
    </button>
  )
}

SongItem.propTypes = {
  song: PropTypes.object
}

export default SongItem
