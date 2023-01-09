import React, { useEffect, useRef } from "react"
import { useRouter } from "next/router"
import { useSelector,} from "react-redux"

import { AudioPlayer, Sidebar, TrendSongs } from "../../components"
import { useGetSearchSongQuery } from "../../redux/services/shazamCoreApi"


export default function Search() {
  const { isPlaying } = useSelector((state) => state.player)
  const searchRef = useRef()
  const router = useRouter()
  const { searchId } = router.query
  const { data, isFetching, isError } = useGetSearchSongQuery(searchId)
  // console.log(data)
  let songs = data?.tracks?.hits.map((hit) => hit.track)
  // console.log(songs)
  useEffect(() => {
    searchRef.current?.scrollIntoView({ behavior: "smooth" })
  })
  
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
    <div className="flex flex-row bg-gray-900 h-screen">
      <div className="w-24 m-2 p-2">
        <Sidebar />
      </div>
      <div
        className="flex flex-col justify-center items-center h-screen overflow-scroll scrollbar-hide bg-gray-900"
        ref={searchRef}
      >
        <div className="text-center text-2xl text-white font-black p-2 m-2">
          Results for :{searchId}..{" "}
        </div>
        <div className=" w-full bg-gray-700">
          {songs.map((song, index) => (
            <TrendSongs
              song={song}
              key={song.key}
              index={index}
              data={data}
              isPlaying={isPlaying}
            />
          ))}
        </div>
      </div>
      <AudioPlayer />
      helloooo
    </div>
  )
}
