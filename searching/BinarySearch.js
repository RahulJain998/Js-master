const arr = [1, 4, 6, 8, 10, 14, 18, 30, 36, 45, 50]
const num = 9

const BinarySearch = (array, number) => {
  let left = 0
  let right = arr.length - 1
  let mid = parseInt((left + right) / 2)

  while (left <= right) {
    if (array[mid] === number) {
      return "Number Found"
    } else if (array[mid] < number) {
      left = mid + 1
    } else {
      right = mid - 1
    }
    mid = parseInt((left + right) / 2)
  }
  return "Not Found"
}

const data = BinarySearch(arr, num)
console.log(data)
