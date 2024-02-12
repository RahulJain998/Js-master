const a = [2, 3, 1, 2, 3]
const n = a.length

const getCount = (a, n) => {
  const map = new Map()
  let arr = []
  let count = 1
  for (let i = 0; i < n; i++) {
    count = 1
    if (map.has(a[i])) {
      count = count + map.get(a[i])
      map.set(a[i], count)
    } else {
      map.set(a[i], count)
    }
  }

  for (let [key, values] of map) {
    if (values > 1) {
      arr.push(key)
    }
  }

  if (arr.length > 0) {
    return arr
  }

  return -1
}

console.log(getCount(a, n))
