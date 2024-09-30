import React from "react"
import { POSTER_URL } from "../utils/constants"

const MovieCard = ({ poster, movieTitle }) => {
  return (
    <div className="w-44 pr-4">
      <img src={POSTER_URL + poster} alt={movieTitle + " poster"} />
    </div>
  )
}

export default MovieCard
