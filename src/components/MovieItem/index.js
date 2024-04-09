// Write your code here

import Popup from 'reactjs-popup'

import {IoMdClose} from 'react-icons/io'

import ReactPlayer from 'react-player'

import './index.css'

export default function MovieItem(props) {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl, categoryId} = movieDetails

  return (
    <div className="movie-video-card">
      <Popup
        modal
        trigger={
          <img
            src={thumbnailUrl}
            alt="thumbnail"
            className="movie-video-image"
          />
        }
      >
        {close => (
          <>
            <div className="modal-container">
              <button
                type="button"
                onClick={() => close()}
                aria-label="Close"
                className="close-button"
                data-testid="closeButton"
              >
                <IoMdClose className="close-icon" />
              </button>
              <div className="player-container">
                <ReactPlayer
                  url={videoUrl}
                  controls="true"
                  className="video-player"
                />
              </div>
            </div>
          </>
        )}
      </Popup>
    </div>
  )
}
