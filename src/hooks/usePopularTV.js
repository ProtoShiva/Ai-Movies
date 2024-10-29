import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { API_OPTIONS } from "../utils/constants"
import { addPopularTV } from "../redux/slices/movieSlice"

const usePopularTV = () => {
  const dispatch = useDispatch()
  const PopularTv = useSelector((store) => store.movies.PopularTV)
  const fetchTV = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1",
      API_OPTIONS
    )
    const data = await res.json()

    dispatch(addPopularTV(data.results))
  }

  useEffect(() => {
    if (!PopularTv) fetchTV()
  }, [])
}

export default usePopularTV
