import React from "react"
import { useSelector } from "react-redux"
import { useGetRelatedSongsQuery } from "../redux/services/shazamCoreApi"
import { Related } from "../components"

export default function RelatedSongs() {
  const { currentSong, isPlaying } = useSelector((state) => state.player)
  const { data, isFetching, isError } = useGetRelatedSongsQuery(
    currentSong?.key
  )
  // console.log(currentSong)
  if (isFetching) {
    return (
      <div className="text-center text-xl text-white font-black">
        Loading...
      </div>
    )
  }
  if (isError) {
    return (
      <div className="text-center text-xl text-white font-black">Error..</div>
    )
  }

  return (
    <div className="flex flex-col h-2/3  bg-gray-900 items-center text-left ">
      <h2 className="font-bold text-white text-xl mt-8 mb-4"> Related Songs</h2>
      <div className="flex flex-col  overflow-y-scroll scrollbar-hide">
        {data?.map((song, index) => (
          <Related
            key={song.key}
            song={song}
            index={index}
            data={data}
            isPlaying={isPlaying}
          />
        ))}
      </div>
    </div>
  )
}
