import Header from '../components/Header'
import Image from '../components/Image'
import SongInfo from '../components/SongInfo'
import ProgressBar from '../components/ProgressBar'
import MediaButtons from '../components/MediaButtons'
import Howler from '../components/Howler'
import usePlayer from '../hooks/usePlayer'

const NowPlaying = () => {
  const { showed } = usePlayer()

  return (
    <section className={`flex justify-between gap-4 w-11/12 max-w-8xl mx-auto overflow-y-scroll transition-all duration-300 ${showed ? 'flex-1 flex-col' : 'h-20 sm:h-32 border-t'}`}>
      <Header />
      {showed && <Image />}
      <SongInfo />
      {showed && <ProgressBar />}
      <MediaButtons />
      <Howler />
    </section>
  )
}
export default NowPlaying
