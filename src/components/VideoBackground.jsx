import { useSelector } from "react-redux"
import useMovieTrailer from "../hooks/useMovieTrailer"

const VideoBackground = ({ movieId }) => {
  const muteIcon = useSelector((store) => store.movies.showMuteIcon)
  //fetch the trailer
  useMovieTrailer(movieId)

  const trailerId = useSelector((store) => store.movies?.trailer)
  return (
    <div>
      <iframe
        className="w-full aspect-video"
        src={`https://www.youtube.com/embed/${
          trailerId?.key
        }?&autoplay=1&mute=${muteIcon ? 0 : 1}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default VideoBackground
