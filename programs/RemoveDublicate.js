const array = [
  1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6,
]
const newArray = []

const removeDublicate = (arr, remove) => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      continue
    } else {
      remove.push(arr[i])
    }
  }
  remove.push(arr[arr.length - 1])
  return remove
}

console.log(removeDublicate(array, newArray))
