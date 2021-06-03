import axios from 'axios'


export function request1 (config) {
  let request = axios.create({
    baseURL: '/api',
  })
  request.interceptors.response.use( (data) => {
    return data && data.data.data
  })
  return request(config)
}