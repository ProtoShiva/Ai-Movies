import React from "react"
import { Link } from "react-router-dom"
import MovieCard from "./MovieCard"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const MovieList = ({ title, movies }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 8,
  }
  return (
    <div className="px-1">
      <h1 className="text-3xl py-4 text-white">{title}</h1>
      <Slider {...settings} className="w-[98%]">
        {movies &&
          movies.map((movie) => (
            <Link to={"/movie/" + movie.id} key={movie.id}>
              <MovieCard
                key={movie.id}
                poster={movie.poster_path}
                movieTitle={movie.original_title}
              />
            </Link>
          ))}
      </Slider>
    </div>
  )
}

export default MovieList
