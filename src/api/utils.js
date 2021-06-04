export function debounce(fn, delay=100) {
  let timer = null
  return function (a) {
    if(timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.call(this,a)
      clearTimeout(timer)
    }, delay)
  }
}