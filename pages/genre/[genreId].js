import React, { useEffect, useRef } from "react"
import { useRouter } from "next/router"
import { useSelector } from "react-redux"

import { useGetWorldGenreQuery } from "../../redux/services/shazamCoreApi"
import {
  AudioPlayer,
  RelatedSongs,
  Sidebar,
  TrendSongs,
} from "../../components"

function GenreDetails() {
  const genreRef = useRef()
  const { isPlaying } = useSelector((state) => state.player)
  const router = useRouter()
  const { genreId } = router.query
  const { data, isFetching, isError } = useGetWorldGenreQuery(genreId || "POP")
  const genres = data
  // console.log(genres)

  //   setGenres(data)
  useEffect(() => {
    genreRef.current?.scrollIntoView({ behavior: "smooth" })
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
        ref={genreRef}
      >
        <div className="text-center text-2xl text-white font-black p-2 m-2">
          {genreId}{" "}
        </div>
        <div className=" w-full bg-gray-700">
          {genres &&
            genres?.map((song, index) => (
              <TrendSongs
                song={song}
                key={song.key}
                index={index}
                data={data}
                isPlaying={isPlaying}
              />
            ))}
        </div>
        <div className="w-16 h-16 bg-gray-600">Footer</div>
      </div>
      <div className="flex flex-col w-1/4 h-2/3 m-2">
        <AudioPlayer />
        <RelatedSongs />
      </div>
    </div>
  )
}

export default GenreDetails
