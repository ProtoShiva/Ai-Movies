import React from "react"
import { useParams } from "react-router-dom"
import { useMovieDetail } from "../hooks/useMovieDetail"
const MovieDetails = () => {
  const { id } = useParams()
  useMovieDetail(id)
  // useMovieCast()
  // useOttPlatforms()

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
