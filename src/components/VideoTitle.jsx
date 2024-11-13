import React from "react"
import { Link } from "react-router-dom"

const VideoTitle = ({ title, overview, id }) => {
  return (
    <div className="w-full aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-[45%]">{overview}</p>
      <div>
        <Link
          to={`/movie/${id}`}
          className="bg-gray-500 text-white p-4 px-16 text-xl rounded-lg hover:bg-opacity-50"
        >
          More Info
        </Link>
      </div>
    </div>
  )
}

export default VideoTitle
