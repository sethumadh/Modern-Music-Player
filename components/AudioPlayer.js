import React, { useState, useRef, useEffect } from "react"
import {
  HiOutlinePlay,
  HiOutlinePause,
  HiOutlineChevronRight,
  HiOutlineChevronLeft,
} from "react-icons/hi"

import { useDispatch, useSelector } from "react-redux"
import {
  playPause,
  prevSong,
  nextSong,
  setActive,
  setCurrentSong,
} from "../redux/features/playerSlice"

export default function AudioPlayer() {
  const [progressBar, setProgressBar] = useState(0)
  const [songCurrentTime, setSongCurrentTime] = useState(0)
  const [songDuration, setSongDuration] = useState("0:00")

  const audioRef = useRef()
  const widthRef = useRef()
  const dispatch = useDispatch()
  const {
    isPlaying,
    songImage,
    currentMusic,
    currentSong,
    songData,
    isActive,
  } = useSelector((state) => state.player)

  

  useEffect(() => {
    if (audioRef.current) {
      dispatch(setCurrentSong(songData[0]))
      console.log  ("useeffect ran", isActive)
    }
  }, [isActive])

  function calculateSongTime(time) {
    const minutes = Math.floor(time / 60)
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`
    const seconds = Math.floor(time % 60)
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`
    return `${returnedMinutes}:${returnedSeconds}`
  }

  function onPlayProgressBar() {
    if (audioRef.current) {
      const duration = audioRef.current?.duration
      const currentTime = audioRef.current?.currentTime
      setProgressBar((currentTime / duration) * 100)
      setSongCurrentTime(calculateSongTime(currentTime.toFixed(0)))
      if (duration && !isNaN(duration)) {
        setSongDuration(calculateSongTime(duration.toFixed(0)))
      }
    }
  }

  function onSeek(e) {
    const width = widthRef.current.clientWidth
    const seekWidth = e.nativeEvent.offsetX
    audioRef.current.currentTime =
      (seekWidth / width) * audioRef.current.duration
  }
  if (isPlaying) {
    audioRef.current?.play()
    // console.log("play , ", "audioRef.current : ", audioRef.current)
  } else {
    audioRef.current?.pause()
    // console.log("pause")
  }

  function handlePlayPause() {
    if (isPlaying) {
      audioRef.current.play()
      dispatch(playPause(false))
    } else {
      audioRef.current.pause()
      dispatch(playPause(true))
    }
  }

  return (
    <div className="">
      <div className="relative">
        {/* image for background */}
        <img className="w-full h-full border-none rounded-lg" src={songImage} />

        <div className="bg-white w-full absolute bottom-0  opacity-80 border-none rounded-lg">
          <div className="text-center text-xl font-bold hidden lg:block">
            {currentSong?.title} by :{currentSong?.subtitle}
          </div>
          <div
            className="w-full h-3 bg-gray-900 relative cursor-pointer"
            ref={widthRef}
            onClick={(e) => {
              onSeek(e)
            }}
          >
            <div
              className={`h-full bg-red-700 absolute`}
              style={{ width: `${progressBar + "%"}` }}
            ></div>
          </div>
          <div className="flex flex-row justify-between items-center">
            <p className="text-left mx-2">{songCurrentTime}</p>
            <p className="text-right mx-2">{songDuration}</p>
          </div>
          <div className="flex flex-row justify-around h-12">
            <audio
              ref={audioRef}
              src={currentMusic}
              onTimeUpdate={onPlayProgressBar}
            ></audio>
            <button>
              <HiOutlineChevronLeft
                className="w-full h-full p-1"
                onClick={() => dispatch(prevSong())}
              />
            </button>
            <button className=" bg-white" onClick={handlePlayPause}>
              {!isPlaying ? (
                <HiOutlinePlay className="w-full h-full" />
              ) : (
                <HiOutlinePause className="w-full h-full" />
              )}
            </button>
            <button>
              <HiOutlineChevronRight
                className="w-full h-full p-1"
                onClick={() => dispatch(nextSong())}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
