import React, { useRef } from "react"
import MovieCard from "./MovieCard"

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6">
      <h1 className="text-3xl py-4 text-white helloji">{title}</h1>
      <div className="flex overflow-x-auto">
        <div className="flex">
          {movies &&
            movies.map((movie) => (
              <MovieCard
                key={movie.id}
                poster={movie.poster_path}
                movieTitle={movie.original_title}
              />
            ))}
        </div>
      </div>
    </div>
  )
}

export default MovieList
