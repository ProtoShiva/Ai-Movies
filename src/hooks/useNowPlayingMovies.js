import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../utils/constants"
import { addNowPlayingMovies } from "../redux/slices/movieSlice"

const useNowPlayingMovies = () => {
  const dispatch = useDispatch()
  const fetchUpcomingMovies = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS
    )
    const data = await res.json()
    console.log(data.results)
    dispatch(addNowPlayingMovies(data.results))
  }

  useEffect(() => {
    fetchUpcomingMovies()
  }, [])
}

export default useNowPlayingMovies
