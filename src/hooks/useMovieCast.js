import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constants"
import { useDispatch, useSelector } from "react-redux"
import { addCastDetail } from "../redux/slices/singleMovieSlice"

export const useMovieCast = (id) => {
  const dispatch = useDispatch()

  const cast = useSelector((store) => store.singleMovie.castDetail)

  async function fetchCast() {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
      API_OPTIONS
    )
    const data = await response.json()

    dispatch(addCastDetail(data))
  }

  useEffect(() => {
    if (!cast) fetchCast()
  }, [])
}
