import React, { useEffect, useState } from "react"
import { auth } from "../utils/firebase"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { onAuthStateChanged, signOut } from "firebase/auth"
import { useDispatch, useSelector } from "react-redux"
import { addUser, removeUser } from "../redux/slices/userSlice"
import { langOptions, LOGO } from "../utils/constants"
import { toggleGptSearch } from "../redux/slices/gptSlice"
import { changeLanguages } from "../redux/slices/configSlice"
import { GiHamburgerMenu } from "react-icons/gi"

const Header = () => {
  const [openIcon, setOpenIcon] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const dispatch = useDispatch()
  const userInfo = useSelector((store) => store.user)
  const gptSearch = useSelector((store) => store.gpt.showGptSearch)
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        navigate("/error")
      })
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // user is signUp / signIn
        const { uid, email, displayName, photoURL } = user
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        )
        if (location.pathname === "/browse" || location.pathname === "/")
          navigate("/browse")
      } else {
        // User is signed out
        dispatch(removeUser())
        navigate("/")
      }
    })

    return () => {
      unsubscribe()
    }
  }, [])

  const handleLanguageChange = (e) => {
    dispatch(changeLanguages(e.target.value))
  }

  return (
    <div className="absolute px-4 py-2 bg-gradient-to-b from-black w-full z-10 flex justify-between items-center">
      <Link to={"/browse"}>
        <img className="w-32" src={LOGO} alt="netflix-logo" />
      </Link>
      {userInfo && (
        <div className="flex items-center gap-4 relative">
          {gptSearch && (
            <select className="bg-gray-300 " onChange={handleLanguageChange}>
              {langOptions.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="py-2 px-4 bg-teal-500 text-white rounded-lg"
            onClick={() => dispatch(toggleGptSearch())}
          >
            {gptSearch ? "HomePage" : "GPT Search"}
          </button>
          <div className="flex items-center gap-3">
            <img
              className="size-12 cursor-pointer"
              src={userInfo.photoURL}
              alt="userIcon"
              onClick={() => setOpenIcon(!openIcon)}
            />
          </div>
          {openIcon && (
            <div className="bg-gray-700 flex flex-col justify-center gap-4  absolute right-0 -bottom-28 rounded-md p-3">
              <p className="text-gray-100">{userInfo.displayName}</p>
              <button
                onClick={handleSignOut}
                className="font-medium bg-red-700 px-4 py-2 rounded-xl text-white"
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Header
