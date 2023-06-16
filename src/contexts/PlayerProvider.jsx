import { createContext, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import data from '../data'

export const PlayerContext = createContext()

const PlayerProvider = ({ children }) => {
  const [currentSong, setCurrentSong] = useState(data[0])
  const [showed, setShowed] = useState(true)
  const [playing, setPlaying] = useState(false)
  const [repeat, setRepeat] = useState(false)
  const [shuffle, setShuffle] = useState(false)
  const [history, setHistory] = useState([])
  const howlerRef = useRef(null)
  const [progress, setProgress] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [leftTime, setLeftTime] = useState(0)

  return (
    <PlayerContext.Provider value={{
      currentSong,
      setCurrentSong,
      showed,
      setShowed,
      playing,
      setPlaying,
      repeat,
      setRepeat,
      shuffle,
      setShuffle,
      history,
      setHistory,
      howlerRef,
      progress,
      setProgress,
      currentTime,
      setCurrentTime,
      leftTime,
      setLeftTime
    }}
    >
      {children}
    </PlayerContext.Provider>
  )
}

PlayerProvider.propTypes = {
  children: PropTypes.node
}

export default PlayerProvider
