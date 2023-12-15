import { useEffect, useState } from 'react'
import { youtubeApi, defaultParams } from './apis/youtubeApi'
import SearchBar from './component/SearchBar'
import VideoDetails from './component/VideoDetails'
import VideoList from './component/VideoList'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { youtubeData } from './utils/youtubeData'

function App() {
  const [videos, setVideos] = useState(null)
  const [selectedVideo, setSelectedVideo] = useState(null)
  // const useFakeApi = true

  // async function searchVideos(q) {
  //   const response = await youtubeApi.get('/search', {
  //     params: {
  //       ...defaultParams,
  //       q,
  //     },
  //   })
  //   return response.data.items
  // }

  // useEffect(() => {
  //   ;(async () => {
  //     let videos
  //     if (useFakeApi) {
  //       videos = youtubeData.items
  //     } else {
  //       videos = await searchVideos('reactjs')
  //     }
  //     setVideos(videos)
  //     setSelectedVideo(videos[0])
  //   })()
  // }, [])

  async function searchVideos(q) {
    const response = await youtubeApi.get('/search', {
      params: {
        ...defaultParams,
        q,
      },
    })
    const videos = response.data.items
    setVideos(videos)
    setSelectedVideo(videos[0])
  }

  useEffect(() => {
    searchVideos('reactjs')
  }, [])

  return (
    <>
      <header>
        <div className="container">
          <SearchBar onFormSubmit={searchVideos} />
        </div>
      </header>
      <main>
        <div className="container">
          {videos && (
            <div className="row">
              <div className="col-lg-8">
                <VideoDetails video={selectedVideo} />
              </div>
              <div className="col-lg-4">
                <VideoList videos={videos} onSelectVideo={setSelectedVideo} />
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  )
}

export default App
