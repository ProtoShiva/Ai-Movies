import { createSlice } from "@reduxjs/toolkit"

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailer: null,
    popularMovies: null,
    topRatedMovies: null,
    PopularTV: null,
    topRatedTV: null,
    showMuteIcon: false,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload
    },
    addTrailer: (state, action) => {
      state.trailer = action.payload
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload
    },
    addPopularTV: (state, action) => {
      state.PopularTV = action.payload
    },
    addTopRatedTV: (state, action) => {
      state.topRatedTV = action.payload
    },
    toggleMuteIcon: (state) => {
      state.showMuteIcon = !state.showMuteIcon
    },
  },
})

export const {
  addNowPlayingMovies,
  addTrailer,
  addPopularMovies,
  addTopRatedMovies,
  addPopularTV,
  addTopRatedTV,
  toggleMuteIcon,
} = movieSlice.actions
export default movieSlice.reducer
