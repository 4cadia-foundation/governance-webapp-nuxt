import axios from 'axios'

function contentService(contentName) {
  return axios.get(`/content/${contentName}.json`)
}

export default contentService
