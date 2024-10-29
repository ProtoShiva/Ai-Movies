import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { toggleMuteIcon } from "../redux/slices/movieSlice"
import { ImVolumeMute, ImVolumeMute2 } from "react-icons/im"

const VideoTitle = ({ title, overview }) => {
  const dispatch = useDispatch()
  const muteIcon = useSelector((store) => store.movies.showMuteIcon)
  return (
    <div className="w-full aspect-video pt-[13%] px-24 absolute text-white bg-gradient-to-r from from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-[45%]">{overview}</p>
      <div>
        <button className="bg-gray-500 text-white p-4 px-16 text-xl rounded-lg hover:bg-opacity-50">
          Play
        </button>
        <button className="mx-2 bg-gray-500 text-white p-4 px-12 text-xl rounded-lg bg-opacity-50">
          More Info
        </button>
      </div>
      <div
        className="flex justify-end text-3xl cursor-pointer"
        onClick={() => dispatch(toggleMuteIcon())}
      >
        {muteIcon ? <ImVolumeMute /> : <ImVolumeMute2 />}
      </div>
    </div>
  )
}

export default VideoTitle
