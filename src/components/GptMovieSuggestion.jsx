import React from "react"
import { useSelector } from "react-redux"
import MovieList from "./MovieList"

const GptMovieSuggestion = () => {
  const { movieResult, movieName } = useSelector((store) => store.gpt)

  if (!movieName) return null

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-60">
      <div>
        {movieName.map((movie, index) => (
          <MovieList key={movie} title={movie} movies={movieResult[index]} />
        ))}
      </div>
    </div>
  )
}

export default GptMovieSuggestion
