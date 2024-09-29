import React from "react"
import { auth } from "../utils/firebase"
import { useNavigate } from "react-router-dom"
import { signOut } from "firebase/auth"
import { useSelector } from "react-redux"

const Header = () => {
  const navigate = useNavigate()
  const userInfo = useSelector((store) => store.user)
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/")
      })
      .catch((error) => {
        navigate("/error")
      })
  }
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black w-full z-10 flex justify-between">
      <img
        className="w-48"
        src="https://cdn.prod.website-files.com/5ee732bebd9839b494ff27cd/5ee732bebd98393d75ff281d_580b57fcd9996e24bc43c529.png"
        alt="netflix-logo"
      />
      {userInfo && (
        <div className="flex items-center gap-2">
          <img className="size-12" src={userInfo.photoURL} alt="userIcon" />
          <button onClick={handleSignOut} className="text-white font-bold">
            Sign Out
          </button>
        </div>
      )}
    </div>
  )
}

export default Header
