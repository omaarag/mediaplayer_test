import { useContext, useEffect } from 'react'
import { PlayerContext } from '../contexts/PlayerProvider'
import data from '../data'

const usePlayer = () => {
  const {
    currentSong, setCurrentSong,
    showed, setShowed,
    playing, setPlaying,
    repeat, setRepeat,
    shuffle, setShuffle,
    history, setHistory,
    howlerRef,
    progress, setProgress,
    currentTime, setCurrentTime,
    leftTime, setLeftTime
  } = useContext(PlayerContext)

  useEffect(() => {
    const timer = setInterval(() => {
      if (howlerRef.current && howlerRef.current.howler && howlerRef.current.howler.seek) {
        const current = howlerRef.current.howler.seek()
        setCurrentTime(formatTime(current))

        const duration = howlerRef.current.duration()
        setLeftTime(formatTime(duration - current))

        const percentagePlayed = (current / duration) * 100
        setProgress(percentagePlayed)
      }
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = Math.floor(seconds % 60)

    const formattedMinutes = String(minutes).padStart(2, '0')
    const formattedSeconds = String(remainingSeconds).padStart(2, '0')

    return `${formattedMinutes}:${formattedSeconds}`
  }

  const showPlayer = bol => {
    setShowed(bol)
  }

  const play = () => {
    setPlaying(true)
  }

  const pause = () => {
    setPlaying(false)
  }

  const playSong = id => {
    const song = data.find(song => song.id === id)
    setCurrentSong(song)
    setPlaying(true)
  }

  const nextSong = () => {
    if (shuffle) {
      return shuffleSong()
    }

    const currentIndex = data.findIndex(song => song.id === currentSong.id)
    const newIndex = currentIndex === data.length - 1 ? 0 : currentIndex + 1
    setCurrentSong(data[newIndex])
  }

  const prevSong = () => {
    const currentIndex = data.findIndex(song => song.id === currentSong.id)
    const newIndex = currentIndex === 0 ? data.length - 1 : currentIndex - 1
    setCurrentSong(data[newIndex])
  }

  const shuffleSong = () => {
    let unplayedSongs = data.filter(song => !history.includes(song.id))
    if (unplayedSongs.length === 0) {
      unplayedSongs = data
      setHistory([])
    }

    const randomIndex = Math.floor(Math.random() * unplayedSongs.length)
    const randomSong = unplayedSongs[randomIndex]
    setCurrentSong(randomSong)

    setHistory(prevHistory => [...prevHistory, randomSong.id])
  }

  const toggleRepeat = () => {
    setRepeat(!repeat)
  }

  const toggleShuffle = () => {
    shuffle ? setHistory([]) : setHistory([currentSong.id])
    setShuffle(!shuffle)
  }

  const endOfSongEvent = () => {
    if (repeat) {
      return
    }
    nextSong()
  }

  return {
    currentSong,
    showed,
    showPlayer,
    playing,
    play,
    pause,
    playSong,
    nextSong,
    prevSong,
    repeat,
    toggleRepeat,
    shuffle,
    toggleShuffle,
    endOfSongEvent,
    howlerRef,
    progress,
    currentTime,
    leftTime
  }
}
export default usePlayer
