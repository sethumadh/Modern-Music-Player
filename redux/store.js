import { configureStore } from "@reduxjs/toolkit"
import { shazamCoreApi } from "./services/shazamCoreApi"

import playerReducer from "./features/playerSlice"
// import {createWrapper} from "next-redux-wrapper"

export const store = configureStore({
  reducer: {
    [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shazamCoreApi.middleware),
})

// export const wrapper = createWrapper(store, { debug: true });
