const a = [0, 3, 1, 2, 1, 4, 2]
const n = a.length

const dublicate = (a, n) => {
  let map = new Map()
  let dub = []
  let status = false
  //your code here
  for (let i = 0; i < n; i++) {
    if (map.has(a[i])) {
      if (map.get(a[i]) === a[i]) {
        dub.push(a[i])
        status = true
      } else {
        continue
      }
    } else {
      map.set(a[i], a[i])
    }
  }

  if (status === false) {
    return -1
  }

  return dub
}

console.log(dublicate(a, n))
