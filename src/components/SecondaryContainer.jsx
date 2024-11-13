import React from "react"
import { useSelector } from "react-redux"
import MovieList from "./MovieList"

const SecondaryContainer = () => {
  const nowPlayingmovies = useSelector((store) => store.movies.nowPlayingMovies)
  const topRatedmovies = useSelector((store) => store.movies.topRatedMovies)
  const popularMovies = useSelector((store) => store.movies.popularMovies)
  return (
    <div className="bg-black">
      <div className="pl-12 mt-[26rem] relative z-20">
        <MovieList title={"Now Playing"} movies={nowPlayingmovies} />
        <MovieList title={"Top Rated"} movies={topRatedmovies} />
        <MovieList title={"Popular"} movies={popularMovies} />
      </div>
    </div>
  )
}

export default SecondaryContainer
