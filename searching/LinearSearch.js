const arr = [20, 30, 10, 80, 40, 60]
const number = 40
// Linear Search function
const LinearSearch = (arr, number) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === number) {
      return `Element Found at position ${i + 1} and Element is ${number}`
    }
  }
  return "Element Not Found"
}

const data = LinearSearch(arr, number)

console.log(data)
