import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"

import { useGetArtistDetailsQuery } from "../../redux/services/shazamCoreApi"
import { Sidebar } from "../../components"

export default function ArtistDetails() {
  const router = useRouter()
  const { artistId } = router.query
  const [artistData, setArtistdata] = useState("")
  const [albums, setAlbums] = useState([])
  const [songs, setSongs] = useState([])
  const { data, isFetching, isError } = useGetArtistDetailsQuery(artistId)
  useEffect(() => {
    if (!isFetching && data) {
      setArtistdata(data)
      let albumsData = Object.values(data?.albums)
      let songsData = Object.values(data?.songs)
      setAlbums(albumsData)
      setSongs(songsData)
    }
  }, [data, isFetching])

  // console.log(artistData)
  // console.log(data?.artists?.[artistId]?.attributes.artwork.width)

  console.log(albums)

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
    <div className="bg-gray-900 p-2 mx-auto container">
      {/* <div className="w-12">
        <Sidebar />
      </div> */}

      <div className="flex flex-col space-y-2 justify-center items-center bg-gray-800 hover:shadow-gray-200 shadow-md  rounded-lg">
        <img
          className="w-52 h-52 rounded-lg m-4"
          src={artistData?.artists?.[artistId]?.attributes.artwork.url
            .replace(
              "{w}",
              artistData?.artists?.[artistId]?.attributes.artwork.width
            )
            .replace(
              "{h}",
              artistData?.artists?.[artistId]?.attributes.artwork.height
            )}
        />
        <div className="text-center text-lg text-gray-200 font-extrabold p-2">
          {artistData?.artists?.[artistId]?.attributes.name}
        </div>
      </div>
      {/* album lists */}
      <h2 className="text-center text-lg text-gray-200 font-extrabold  mt-2">
        Top Albums
      </h2>
      <div className="flex flex-wrap justify-center h-96 p-4 m-2 bg-gray-600 space-y6 hover:shadow-gray-200 shadow-md rounded-lg  overflow-scroll scrollbar-hide ">
        {albums.map((album) => (
          <div
            key={album.id}
            className="w-1/4  m-2 flex justify-between items-center bg-gray-700  rounded-lg p-2 shadow-lg hover:shadow-yellow-900"
          >
            <img
              className="w-1/2 h-full   rounded-xl object-cover"
              src={album.attributes.artwork.url
                .replace("{w}", album.attributes.artwork.width)
                .replace("{h}", album.attributes.artwork.height)}
              alt=""
            />
            <div className="felx flex-col justify-center items-center">
              <div className=" flex justify-center items-center text-gray-200 text-center cursor-pointer w-32 h-32 overflow-hidden text-ellipsis hover:text-white">
                {" "}
                {album.attributes.name}
              </div>
              <div className="text-gray-200 text-center cursor-pointer w-32 h-16 overflow-hidden text-ellipsis hover:text-white m-2">
                {album.attributes.releaseDate}
              </div>
            </div>
          </div>
        ))}
      </div>
      <h2 className="text-center text-lg text-gray-200 font-extrabold  mt-2">
        Top Songs
      </h2>

      <div className="flex flex-wrap justify-center h-96 p-2 m-2 bg-gray-600 space-y6 hover:shadow-gray-200 shadow-md rounded-lg  overflow-scroll scrollbar-hide ">
        {songs.map((song) => (
          <div
            key={song.id}
            className="w-1/4  m-2 flex justify-between items-center bg-gray-700  rounded-lg p-2 shadow-lg hover:shadow-yellow-900"
          >
            <img
              className="w-1/2 h-full   rounded-xl object-cover"
              src={song.attributes.artwork.url
                .replace("{w}", song.attributes.artwork.width)
                .replace("{h}", song.attributes.artwork.height)}
              alt=""
            />
            <div className="felx flex-col justify-center items-center">
              <div className=" flex justify-center items-center text-gray-200 text-center cursor-pointer w-32 h-32 overflow-hidden text-ellipsis hover:text-white">
                {" "}
                {song.attributes.name}
              </div>
              <div className="text-gray-200 text-center cursor-pointer w-32 h-16 overflow-hidden text-ellipsis hover:text-white m-2">
                {song.attributes.releaseDate}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
