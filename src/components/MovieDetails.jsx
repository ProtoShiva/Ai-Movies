import React from "react"
import { useParams } from "react-router-dom"
import { useMovieDetail } from "../hooks/useMovieDetail"
import { useMovieCast } from "../hooks/useMovieCast"
import { usePlatforms } from "../hooks/usePlatforms"
import { useSimilarMovies } from "../hooks/useSimilarMovies"
const MovieDetails = () => {
  const { id } = useParams()
  useMovieDetail(id)
  useMovieCast(id)
  usePlatforms(id)
  useSimilarMovies(id)

  return (
    <div className="flex flex-col">
      <div>
        <img src="" alt="" />
        ek bg image
      </div>
      <div className="grid grid-cols-3">
        <div>
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <div>Where to Watch</div>
          </div>
        </div>
        <div>
          <div>description</div>
          <div>cast</div>
        </div>
        <div>reviews</div>
      </div>
    </div>
  )
}

export default MovieDetails
