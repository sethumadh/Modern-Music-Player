import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { HYDRATE } from "next-redux-wrapper"

import {
  SHAZAM_CORE_API_URL,
  SHAZAM_CORE_API_HOST,
} from "../../utils/shazamApi"

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: SHAZAM_CORE_API_URL,
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        process.env.NEXT_PUBLIC__SHAZAM_CORE_RAPID_API_KEY
      )
      headers.set("X-RapidAPI-Host", SHAZAM_CORE_API_HOST)

      return headers
    },
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath]
    }
  },
  endpoints: (builder) => ({
    getSearchSong: builder.query({
      // query: (searchId) => `/search/multi?search_type=SONGS_ARTISTS&query=${searchId}`,
      query: (searchTerm) =>
        `/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}`,
    }),
    getWorldTrends: builder.query({ query: () => "/charts/world" }),
    getArtistDetails: builder.query({
      query: (artistId) => `artists/details?artist_id=${artistId}`,
    }),
    getRelatedSongs: builder.query({
      query: (relatedSongId) => `tracks/related?track_id=${relatedSongId}`,
    }),
    getWorldGenre: builder.query({
      query: (genreId) => `/charts/genre-world?genre_code=${genreId}`,
    }),
  }),
})

export const {
  useGetWorldGenreQuery,
  useGetWorldTrendsQuery,
  useGetArtistDetailsQuery,
  useGetSearchSongQuery,
  useGetRelatedSongsQuery,
} = shazamCoreApi
