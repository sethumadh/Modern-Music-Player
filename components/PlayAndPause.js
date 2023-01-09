import React from "react"
import { HiOutlinePlay, HiOutlinePause } from "react-icons/hi"

import { useDispatch, useSelector } from "react-redux"
import {
  playPause,
  setIndex,
  setCurrentSong,
  setSongData,
} from "../redux/features/playerSlice"

export default function PlayAndPause({ song, data, index, isPlaying }) {
  const { songIndex,currentSong} = useSelector(
    (state) => state.player
  )
  const dispatch = useDispatch()
  // console.log("songData : ",songData);
  // console.log("playandpause: ",index);
  // console.log("playandpause: ",isPlaying , songIndex,index);

  if (isPlaying && index == songIndex && currentSong?.title==song.title) {
    // console.log("playandpause: ", isPlaying, songIndex, index)

    return (
      <div
        className={`w-16 h-16 border-none rounded-full flex items-center justify-center cursor-pointer`}
      >
        <HiOutlinePause
          className="h-12 w-12"
          color="white"
          onClick={() => {
            // console.log(index);
            dispatch(playPause(false))
            // dispatch(setActive(true))
          }}
        />
      </div>
    )
  } 
    return (
      <div
        className={`w-16 h-16 flex justify-center border-none rounded-full items-center relative top-2 cursor-pointer}`}
      >
        <HiOutlinePlay
          className="h-12 w-12"
          color="white"
          onClick={() => {
            dispatch(playPause(true))
            dispatch(setIndex(index))
            dispatch(setCurrentSong(song))
            dispatch(setSongData(data))
          }}
        />
      </div>
    )
  }

