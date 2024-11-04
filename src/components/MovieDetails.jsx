import React from "react"
import { useParams } from "react-router-dom"
import { useMovieDetail } from "../hooks/useMovieDetail"
import { useMovieCast } from "../hooks/useMovieCast"
import { usePlatforms } from "../hooks/usePlatforms"
import { useSimilarMovies } from "../hooks/useSimilarMovies"
import { useSelector } from "react-redux"
import { BGPOSTER_URL, PLATFORM_URL, POSTER_URL } from "../utils/constants"
import Header from "./Header"
import { convertToK } from "../utils/helper"
import { FaStar } from "react-icons/fa"
import { BiSolidTv } from "react-icons/bi"
import GptSearch from "./GptSearch"

const MovieDetails = () => {
  const { id } = useParams()
  useMovieDetail(id)
  useMovieCast(id)
  usePlatforms(id)
  useSimilarMovies(id)
  const gptSearch = useSelector((store) => store.gpt.showGptSearch)
  const movieDetails = useSelector((store) => store.singleMovie.movieDetail)
  const castDetails = useSelector((store) => store.singleMovie.castDetail)
  const Platforms = useSelector((store) => store.singleMovie.platforms)
  const similarMovies = useSelector((store) => store.singleMovie.similarMovies)

  return (
    <div className={`${gptSearch ? "" : "bg-gray-950"}`}>
      <Header />
      {gptSearch ? (
        <GptSearch />
      ) : (
        <div className="flex flex-col ml-36 mr-36 pt-4 ">
          <div className="h-[30rem]">
            <img
              src={BGPOSTER_URL + `${movieDetails?.backdrop_path}`}
              alt={`${movieDetails?.title} bg-image`}
              className="h-full w-full object-cover "
            />
          </div>
          <div className="grid grid-cols-3 ">
            <div className="relative -top-64 left-4 w-fit text-white">
              <img
                src={POSTER_URL + `${movieDetails?.poster_path}`}
                alt={`${movieDetails?.title} poster`}
                className="rounded-md w-64 border border-white box shadow-lg"
              />
              <h1 className="text-3xl font-bold pt-8 pb-4">Rating</h1>
              <div className="flex items-center gap-2">
                <FaStar className="size-6 text-yellow-400" />
                <p>
                  {movieDetails?.vote_average.toFixed(1)}
                  <span className="ml-1">
                    ({convertToK(movieDetails?.vote_count)})
                  </span>
                </p>
              </div>
            </div>
            <div className="text-white">
              <div>
                <h1 className="text-3xl font-bold pt-8 pb-4">Overview</h1>
                <p>{movieDetails?.overview}</p>
              </div>
              <div>
                <h2 className="text-3xl font-bold pt-8 pb-4">TagLine</h2>
                <p>{movieDetails?.tagline}</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold pt-8 pb-4">Genres</h3>
                <ul className="flex gap-3">
                  {movieDetails?.genres.map((gen) => (
                    <li key={gen.id}>{gen.name}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="text-white pl-24">
              <div className="border border-white mt-3">
                <h1 className="bg-gray-600 p-2 flex items-center justify-center gap-3">
                  Where to Watch
                  <span>
                    <BiSolidTv className="size-5 " />
                  </span>
                </h1>
                <ul className="p-3">
                  {Platforms?.results?.US?.buy.map((item) => (
                    <li className="flex items-center justify-between pb-3">
                      {item.provider_name}
                      <span>
                        <img
                          className="size-8"
                          src={PLATFORM_URL + `${item.logo_path}`}
                        />
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="text-white col-span-3">
              <h1 className="text-3xl font-bold pt-8 pb-4">Top Cast</h1>
              <div className="flex gap-4 flex-wrap">
                {castDetails?.cast.slice(0, 7).map((actor) => {
                  return (
                    <div
                      key={actor.id}
                      className="flex flex-col items-center justify-center"
                    >
                      <img
                        src={POSTER_URL + `${actor.profile_path}`}
                        alt={actor.original_name + " photo"}
                        className="size-28 rounded-full object-cover"
                      />
                      <div className="flex flex-col justify-center items-center">
                        <p>{actor.original_name}</p>
                        <p className="text-xs">{actor.character}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="text-white col-span-3">
              <h1 className="text-3xl font-bold pt-8 pb-4">
                Recommended Movies
              </h1>
              <div className="flex gap-3">
                {similarMovies?.results.slice(0, 5).map((movie) => {
                  return (
                    <div key={movie.id}>
                      <img
                        src={POSTER_URL + `${movie?.poster_path}`}
                        alt={`${movieDetails?.title} poster`}
                        className="rounded-md w-40 "
                      />
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default MovieDetails
