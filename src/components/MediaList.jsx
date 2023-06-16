import usePlayer from '../hooks/usePlayer'

import data from '../data'
import SongItem from './SongItem'

const MediaList = () => {
  const { showed } = usePlayer()

  return (
    <section
      className={`w-11/12 max-w-8xl mx-auto py-5 overflow-y-scroll transition-all duration-300 ${showed ? 'h-0 -z-20' : 'flex-1'}`}
      style={{ scrollbarWidth: 'none', overflowStyle: 'none' }}
    >
      <div className='bg-white bg-opacity-20 rounded-xl p-2'>
        {data.map(song => <SongItem key={song.id} song={song} />)}
      </div>
    </section>
  )
}
export default MediaList
