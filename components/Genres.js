import React from "react"
import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode, Pagination } from "swiper"

import { genres } from "../utils/constants"

// Import Swiper styles
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"

export default function Genres() {
  return (
    <div className="w-full mt-2">
      <Swiper
        slidesPerView={3}
        spaceBetween={15}
        freeMode={true}
        centeredSlides
        centeredSlidesBounds
        modules={[FreeMode]}
        className="mySwiper"
      >
        {genres.map((genre) => (
          <SwiperSlide
            key={genre.name}
            className="text-gray-700 rounded-full bg-gray-100 p-2 m-2 w-8 h-auto text-center font-mono font-medium shadow-md shadow-gray-400"
          >
            <Link href={`genre/${genre.value}`}>{genre.name}</Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
