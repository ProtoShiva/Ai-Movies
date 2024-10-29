import React from "react"
import { useSelector } from "react-redux"
import MovieList from "./MovieList"

const SecondaryContainer = () => {
  const nowPlayingmovies = useSelector((store) => store.movies.nowPlayingMovies)
  const topRatedmovies = useSelector((store) => store.movies.topRatedMovies)
  const popularMovies = useSelector((store) => store.movies.popularMovies)
  const popularTV = useSelector((store) => store.movies.PopularTV)
  const topRatedTV = useSelector((store) => store.movies.topRatedTV)
  return (
    <div className="bg-black">
      <div className="-mt-72 pl-12 relative z-20">
        <MovieList title={"Now Playing"} movies={nowPlayingmovies} />
        <MovieList title={"Top Rated"} movies={topRatedmovies} />
        <MovieList title={"Popular"} movies={popularMovies} />
        <MovieList title={"Popular TV"} movies={popularTV} />
        <MovieList title={"Top Rated TV"} movies={topRatedTV} />
      </div>
    </div>
  )
}

export default SecondaryContainer
