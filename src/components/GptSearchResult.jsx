import React from "react"
import { POSTER_URL } from "../utils/constants"
import { FaStar } from "react-icons/fa"

const GptSearchResult = ({ movie }) => {
  return (
    <div className="w-44 h-56  cursor-pointer" key={movie[0].id}>
      <img
        src={POSTER_URL + movie[0].poster_path}
        alt={movie[0].title + " Poster"}
        className="rounded-md "
      />
      <div>
        <p className="flex gap-2 items-center mt-3">
          <span className="text-yellow-500">
            <FaStar />
          </span>
          {movie[0].vote_average.toFixed(1)}
        </p>
      </div>
    </div>
  )
}

export default GptSearchResult
