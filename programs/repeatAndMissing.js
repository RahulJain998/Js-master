const arr = [1, 2, 4, 4]
const len = arr.length

const getRepeatAndDublicate = (arr, len) => {
  let missing = 0
  let repeting = 0

  for (let i = 0; i < len; i++) {
    if (arr[0] === 2) {
      missing = 1
      return
    }
    if (arr[i] + 1 === arr[i + 1]) {
      continue
    } else {
      missing = arr[i + 1]
    }
  }

  





}

console.log(getRepeatAndDublicate(arr, len))
