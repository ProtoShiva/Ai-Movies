import React from "react"
import { useSelector } from "react-redux"
import VideoTitle from "./VideoTitle"
import VideoBackground from "./VideoBackground"

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies)
  if (!movies) return
  const mainMovie = movies[8]

  const { original_title, overview, id } = mainMovie

  return (
    <div className="overflow-hidden absolute inset-0 -top-24">
      <VideoTitle title={original_title} overview={overview} id={id} />
      <VideoBackground movieId={id} />
    </div>
  )
}

export default MainContainer
