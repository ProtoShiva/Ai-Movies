import React from "react"

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[13%] px-24 absolute text-white bg-gradient-to-r from from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div>
        <button className="bg-gray-500 text-white p-4 px-16 text-xl rounded-lg hover:bg-opacity-50">
          Play
        </button>
        <button className="mx-2 bg-gray-500 text-white p-4 px-12 text-xl rounded-lg bg-opacity-50">
          More Info
        </button>
      </div>
    </div>
  )
}

export default VideoTitle
