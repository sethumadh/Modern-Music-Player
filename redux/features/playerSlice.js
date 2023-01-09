import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isPlaying: false,
  currentSong: {},
  songIndex: 0,
  songImage: "",
  currentMusic: "",
  isActive: false,
  songData: {},
}

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    playPause: (state, action) => {
      state.isPlaying = action.payload
    },
    setIndex: (state, action) => {
      state.songIndex = action.payload
    },
    setCurrentSong: (state, action) => {
      state.currentSong = action.payload
      state.songImage = state.currentSong?.images?.background
      state.currentMusic = state.currentSong?.hub?.actions[1]?.uri
      // console.log(state.currentSong);
    },
    setActive: (state, action) => {
      state.isActive = action.payload
    },

    setSongData: (state, action) => {
      state.songData = action.payload
      state.isActive = true
      // state.songImage = state.songData[0]?.images?.background
      // state.currentMusic = state.songData[0]?.hub?.actions[1]?.uri
    },
    nextSong: (state) => {
      state.songIndex += 1
      if (state.songData.length - 1 < state.songIndex) {
        state.songIndex = 0
        state.songImage = state.songData[state.songIndex]?.images?.background
        state.currentMusic =
          state.songData[state.songIndex]?.hub?.actions[1]?.uri
        state.currentSong = state.songData[state.songIndex]
      } else {
        state.songImage = state.songData[state.songIndex]?.images?.background
        state.currentMusic =
          state.songData[state.songIndex]?.hub?.actions[1]?.uri
        state.currentSong = state.songData[state.songIndex]
      }
    },
    prevSong: (state) => {
      state.songIndex -= 1
      if (state.songIndex < 0) {
        state.songIndex = state.songData.length - 1
        state.songImage = state.songData[state.songIndex]?.images?.background
        state.currentMusic =
          state.songData[state.songIndex]?.hub?.actions[1]?.uri
          state.currentSong = state.songData[state.songIndex]
      } else {
        state.songImage = state.songData[state.songIndex]?.images?.background
        state.currentMusic =
          state.songData[state.songIndex]?.hub?.actions[1]?.uri
          state.currentSong = state.songData[state.songIndex]
      }
    },
  },
})

export const {
  playPause,
  setIndex,
  setCurrentSong,
  setActive,
  setSongData,
  prevSong,
  nextSong,
} = playerSlice.actions
export default playerSlice.reducer
