import { useSelector } from "react-redux"
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import usePopularMovies from "../hooks/usePopularMovies"
import useTopRatedMovies from "../hooks/useTopRatedMovies"
import usePopularTV from "../hooks/usePopularTV"
import GptSearch from "./GptSearch"
import Header from "./Header"
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"
import useTopRatedTV from "../hooks/useTopRatedTV"

const Browse = () => {
  useNowPlayingMovies()
  useTopRatedMovies()
  usePopularMovies()
  usePopularTV()
  useTopRatedTV()
  const gptSearch = useSelector((store) => store.gpt.showGptSearch)
  return (
    <div>
      <Header />
      {gptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  )
}

export default Browse
