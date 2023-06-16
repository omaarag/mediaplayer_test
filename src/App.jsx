import PlayerProvider from './contexts/PlayerProvider'
import MediaList from './components/MediaList'
import NowPlaying from './components/NowPlaying'

const App = () => {
  return (
    <PlayerProvider>
      <div className='absolute inset-0 -z-10 bg-gradient-to-t from-black via-red-950 to-red-900' />
      <main className='flex flex-col absolute top-0 bottom-0 left-0 right-0 text-white overflow-hidden'>
        <MediaList />
        <NowPlaying />
      </main>
    </PlayerProvider>
  )
}
export default App
