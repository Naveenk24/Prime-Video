// Write your code here

import MoviesSlider from '../MoviesSlider/index'

import './index.css'

export default function PrimeVideo(props) {
  const {moviesList} = props

  return (
    <div className="background-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="prime-video-image"
      />
      <div className="movies-container">
        <MoviesSlider moviesList={moviesList} />
      </div>
    </div>
  )
}
