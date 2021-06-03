import {request1} from './index'

export function getHomeData () {
  return request1({url: '/home/multidata'})
}
export function getHomeGood (type, page) {
  return request1({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}