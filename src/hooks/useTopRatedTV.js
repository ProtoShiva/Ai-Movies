import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { API_OPTIONS } from "../utils/constants"
import { addTopRatedTV } from "../redux/slices/movieSlice"

const useTopRatedTV = () => {
  const dispatch = useDispatch()
  const topRatedTV = useSelector((store) => store.movies.topRatedTV)
  const fetchTV = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
      API_OPTIONS
    )
    const data = await res.json()
    console.log(data)

    dispatch(addTopRatedTV(data.results))
  }

  useEffect(() => {
    if (!topRatedTV) fetchTV()
  }, [])
}

export default useTopRatedTV
