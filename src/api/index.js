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
export function request2 (config) {
  let request1 = axios.create({
    baseURL: '/api',
  })
  request1.interceptors.response.use( (data) => {
    return data && data.data.result
  })
  return request1(config)
}