import Link from "next/link"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { PlayAndPause } from "../components"
import { setSongData } from "../redux/features/playerSlice"

export default function TrendSongs({ song, index, data, isPlaying }) {
  const dispatch = useDispatch()


  return (
    // The main song div

    <div
      className="flex flex-col items-center justify-center space-y-2 lg:flex-row  lg:justify-around m-2 p-4 
        border-none rounded-lg bg-gray-800 group bg-opacity-80 shadow-lg hover:shadow-slate-600 "
    >
      {/* Left item */}

      <div
        className=" flex flex-col items-center justify-center lg:flex-row lg:justify-start lg:items-center m-2 border-none 
                rounded-lg backdrop-blur-sm "
      >
        <div className=" hidden text-xl text-gray-400 p-2 lg:block">
          {index + 1}
        </div>
        <div className=" w-1/3 m-2 h-1/3">
          <img
            className="max-w-full object-contain border-none rounded-lg"
            src={song.images?.coverart}
            alt="image"
          />
        </div>
        <div className="mx-2 p-4 flex flex-col items-center justify-center mt-2">
          <div className="text-gray-200 text-center cursor-pointer w-32 h-12 overflow-hidden text-ellipsis hover:text-white">
            <Link
              className="focus:outline-none focus-visible:ring-4 ring-blue-500 ring-offset-gray-800 "
              href={`/songDetails/${song.key}`}
            >
              {song.title}
            </Link>
          </div>
          <div className="text-gray-400 text-center cursor-pointer w-24 h-12 overflow-hidden text-ellipsis hover:text-white">
            <Link
              className="focus:outline-none focus-visible:ring-4 ring-blue-500 ring-offset-gray-800 "
              href={`/artistDetails/${song?.artists?.[0].adamid}`}
            >
              {song.subtitle}
            </Link>
          </div>
        </div>
      </div>

      {/* Play Pause button */}

      <PlayAndPause
        song={song}
        data={data}
        index={index}
        isPlaying={isPlaying}
      />

    </div>
  )
}
