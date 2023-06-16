import usePlayer from '../hooks/usePlayer'

const ProgressBar = () => {
  const { progress, currentTime, leftTime } = usePlayer()

  return (
    <>
      <div className='flex items-center gap-3 text-sm sm:text-xl w-full max-w-xl mx-auto'>
        <div>{currentTime}</div>
        <div className='flex-1 flex items-center'>
          <div
            className='border-4 rounded-l-full border-red-600'
            style={{ width: `${progress}%` }}
          />
          <div
            className='border-4 rounded-r-full'
            style={{ width: `${100 - progress}%` }}
          />
        </div>
        <div>{leftTime}</div>
      </div>
    </>
  )
}
export default ProgressBar
