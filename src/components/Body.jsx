import React, { useEffect } from "react"
import Login from "./Login"
import Browse from "./Browse"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { auth } from "../utils/firebase"
import { onAuthStateChanged } from "firebase/auth"
import { useDispatch } from "react-redux"
import { addUser, removeUser } from "../redux/slices/userSlice"

const Body = () => {
  const dispatch = useDispatch()
  const appRoutes = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ])

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
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
      } else {
        // User is signed out
        dispatch(removeUser())
      }
    })
  }, [])

  return (
    <div>
      <RouterProvider router={appRoutes} />
    </div>
  )
}

export default Body
