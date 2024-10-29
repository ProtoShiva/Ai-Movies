import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constants"
import { useDispatch, useSelector } from "react-redux"
import { addPlatforms } from "../redux/slices/singleMovieSlice"

export const usePlatforms = (id) => {
  const dispatch = useDispatch()
  const platform = useSelector((store) => store.singleMovie.platforms)

  async function fetchPlatforms() {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/watch/providers`,
      API_OPTIONS
    )
    const data = await response.json()

    dispatch(addPlatforms(data))
  }

  useEffect(() => {
    if (!platform) fetchPlatforms()
  }, [])
}
