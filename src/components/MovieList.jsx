import React from "react"
import { Link } from "react-router-dom"
import MovieCard from "./MovieCard"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules"
import "swiper/swiper-bundle.css"

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-1">
      <h1 className="text-3xl py-4 text-white">{title}</h1>
      <Swiper
        slidesPerView={8}
        slidesPerGroup={5}
        loop={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {movies &&
          movies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <Link to={"/movie/" + movie.id}>
                <MovieCard
                  poster={movie.poster_path}
                  movieTitle={movie.original_title}
                />
              </Link>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  )
}

export default MovieList
