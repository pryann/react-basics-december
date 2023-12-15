import axios from 'axios'

const key = 'AIzaSyDFg0dLkibv0KCegLKNjaN46UYvWYpsOL8'

export const defaultParams = {
  maxResults: 12,
  part: 'snippet',
  key,
}

export const youtubeApi = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
})
