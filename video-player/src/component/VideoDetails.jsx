import PropTypes from 'prop-types'

VideoDetails.propTypes = {
  video: PropTypes.shape({
    id: PropTypes.shape({
      videoId: PropTypes.string,
      playlistId: PropTypes.string,
    }).isRequired,
    snippet: PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  }).isRequired,
}

export default function VideoDetails({ video }) {
  const baseSrc = 'https://youtube.com/embed'
  const videoSrc = video.id.videoId
    ? `${baseSrc}/${video.id.videoId}`
    : `${baseSrc}/videoseries?list=${video.id.playlistId}`

  return (
    <div className="video-details">
      <div className="ratio ratio-16x9">
        <iframe src={videoSrc} title="Video Player"></iframe>
      </div>
      <div className="mt-3">
        <h2 className="h4">{video.snippet.title}</h2>
        <p className="lead">{video.snippet.description}</p>
      </div>
    </div>
  )
}
