import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constants"
import { useDispatch, useSelector } from "react-redux"
import { addMovieDetail } from "../redux/slices/singleMovieSlice"
export const useMovieDetail = (id) => {
  const dispatch = useDispatch()
  const singleMovie = useSelector((store) => store.singleMovie.movieDetail)
  const fetchSingleMovieDetails = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
      API_OPTIONS
    )

    const data = await response.json()

    dispatch(addMovieDetail(data))
  }

  useEffect(() => {
    if (!singleMovie) fetchSingleMovieDetails()
  }, [])
}
