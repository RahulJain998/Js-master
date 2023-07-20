const arr = [1, 5, 3, 15, 12, 9]
const n = arr.length

const SelectionSort = (array, len) => {
  for (let i = 0; i < len; i++) {
    for (let j = i; j < len; j++) {
      if (array[i] > array[j]) {
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
      }
    }
  }
  return array
}
console.log(SelectionSort(arr, n))
