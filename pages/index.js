import { useSelector } from "react-redux"
import {
  Trend,
  Topbar,
  Sidebar,
  AudioPlayer,
  Genres,
  RelatedSongs,
} from "../components"

export default function Home() {
  const { isActive } = useSelector((state) => state.player)
  return (
    <div className="container mx-auto bg-gray-900">
      <div className="flex">
        <div className=" bg-gray-900 py-4 px-4 border rounded-lg ">
          {/* Sidebar component */}
          <Sidebar />
        </div>

        <div className="flex flex-col w-1/2">
          {/* Topbar/searchbar component */}
          <Topbar />

          <div className=" bg-gray-900  p-2 border rounded-lg flex flex-col justify-center items-center ">
            <h2 className="font-bold text-white text-xl text-center lg:text-center ">
              Top Genres
            </h2>
            <Genres />
          </div>

          {/* Trending Component  */}
          <Trend isActive={isActive} />

          {/* Bottom bar */}
          <div className="w-full h-32 rounded-xl flex justify-center items-center bg-gray-600 shadow-2xl shadow-slate-600 font-extrabold text-white text-xl text-center lg:text-center m-2 p-2">
            BUG's Music Player
          </div>
        </div>

        <div className="container mx-auto h-screen flex flex-col w-1/3 mt-4 ">
          {/* <h2>Favourite Albums</h2>
          <div>
            <Favourite />
          </div> */}
          <div className="p-2 m-2">
            <h2 className="font-bold text-white text-xl text-center lg:text-center mb-2 p-2">
              {" "}
              Bug Music Player
            </h2>
            <AudioPlayer />
          </div>
          <RelatedSongs isActive={isActive} />
        </div>
      </div>
    </div>
  )
}
