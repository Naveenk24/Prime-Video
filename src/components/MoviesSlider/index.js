// Write your code here

import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItem from '../MovieItem/index'

import './index.css'

export default function MoviesSlider(props) {
  const {moviesList} = props

  const settings = {
    dots: false,
    slidesToShow: 6,
    slidesToScroll: 2,
  }
  return (
    <>
      <h1 className="action-movie-heading">Action Movies</h1>
      <div className="action-movie-slider-container">
        <Slider {...settings}>
          {moviesList.map(eachItem => {
            if (eachItem.categoryId === 'ACTION') {
              return <MovieItem key={eachItem.id} movieDetails={eachItem} />
            }
            return null
          })}
        </Slider>
      </div>
      <h1 className="comedy-movie-heading">Comedy Movies</h1>
      <div className="comedy-movie-slider-container">
        <Slider {...settings}>
          {moviesList.map(eachItem => {
            if (eachItem.categoryId === 'COMEDY') {
              return <MovieItem key={eachItem.id} movieDetails={eachItem} />
            }
            return null
          })}
        </Slider>
      </div>
    </>
  )
}
