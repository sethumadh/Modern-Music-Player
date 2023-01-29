import {  useSelector } from "react-redux"

import TrendSongs from "../components/TrendSongs"
import { useGetWorldTrendsQuery } from "../redux/services/shazamCoreApi"

export default function Trend() {
  const { isPlaying } = useSelector((state) => state.player)
  const { data, isFetching, isError } = useGetWorldTrendsQuery()
  const trendList = data
  // console.log(trendList);
  // console.log(data);
  if (isFetching) {
    return <div className="text-center text-xl text-white font-black">Loading...</div>
  }
  if (isError) {
    return <div className="text-center text-xl text-white font-black">Error..</div>
  }

  return (
    <div className="flex flex-col bg-gray-900 items-center text-left">
      <h2 className="font-bold text-white text-xl  p-4">
        Trending Right Now
      </h2>
      {/* Main TrendSOngs container */}
      <div className="flex flex-col h-screen overflow-y-scroll scrollbar-hide">
        {trendList?.map((song, index) => (
          <TrendSongs song={song} key={song.key} index={index} data={data} isPlaying={isPlaying}/>
        ))}
      </div>
    </div>
  )
}
