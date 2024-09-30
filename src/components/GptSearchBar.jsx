import React, { useRef } from "react"
import { lang } from "../utils/langConstants"
import { useDispatch, useSelector } from "react-redux"
import { API_OPTIONS } from "../utils/constants"
import { GoogleGenerativeAI } from "@google/generative-ai"
import { addGptMovieResult } from "../redux/slices/gptSlice"

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang)
  const searchText = useRef(null)
  const dispatch = useDispatch()
  const searchGptMovies = async (movie) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    )

    const data = await res.json()
    return data.results
  }

  const handleGptSearchClick = async () => {
    const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_KEY)

    //Make an API call to GPT and get results
    const gptQuery =
      "Act as a Movie Recommendation systam and suggest some movies for the query" +
      searchText.current.value +
      ".Only give me 5 movies, comma seprated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya"

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" })

    const result = await model.generateContent(gptQuery)
    if (!result) {
      //error message
    }
    const gptMovies = result.response?.text().split(",")
    const promiseArray = gptMovies.map((movie) => searchGptMovies(movie))
    const tmdbResults = await Promise.all(promiseArray)
    dispatch(
      addGptMovieResult({ movieResult: tmdbResults, movieNames: gptMovies })
    )
  }

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder={lang[langKey].gptPlaceholder}
          className="p-4 m-4 col-span-9"
        />
        <button
          className="py-2 m-4 px-5 col-span-3 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  )
}

export default GptSearchBar
