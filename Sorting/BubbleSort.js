const arr = [12, 10, 40, 30, 21, 41, 18, 15]
const len = arr.length - 1

const bubbleSort = (array, len) => {
  let swap = false
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i; j++) {
      if (array[j] > array[j + 1]) {
        temp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = temp
        swap = true
      }
      console.log("sort")
    }
    if (swap === false) {
      return array
    }
  }
  return array
}

console.log(bubbleSort(arr, len))
