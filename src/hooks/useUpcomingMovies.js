import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../utils/constants"
import { addUpcomingMovies } from "../redux/slices/movieSlice"

const useUpcomingMovies = () => {
  const dispatch = useDispatch()
  const fetchMovies = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
    )
    const data = await res.json()

    dispatch(addUpcomingMovies(data.results))
  }

  useEffect(() => {
    fetchMovies()
  }, [])
}

export default useUpcomingMovies
