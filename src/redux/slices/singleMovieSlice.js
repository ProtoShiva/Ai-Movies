import { createSlice } from "@reduxjs/toolkit"

const singleMovieSlice = createSlice({
  name: "singleMovie",
  initialState: {
    movieDetail: null,
  },
  reducers: {
    addMovieDetail: (state, action) => {
      state.movieDetail = action.payload
    },
  },
})

export const { addMovieDetail } = singleMovieSlice.actions
export default singleMovieSlice.reducer
