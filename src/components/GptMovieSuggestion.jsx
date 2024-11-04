import React from "react"
import { useSelector } from "react-redux"
import MovieList from "./MovieList"
import GptSearchResult from "./GptSearchResult"

const GptMovieSuggestion = () => {
  const { movieResult, movieName } = useSelector((store) => store.gpt)

  if (!movieName) return null

  return (
    <div className="pt-16 pb-24 pl-6 m-4 h-fit bg-black text-white bg-opacity-60 flex justify-between ">
      {movieResult?.map((movie) => (
        <GptSearchResult movie={movie} />
      ))}
    </div>
  )
}

export default GptMovieSuggestion
