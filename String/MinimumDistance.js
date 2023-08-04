const arr = ["i", "am", "new", "in", "company"]
const word1 = "i"
const word2 = "in"

const MinimumDistance = (array, w1, w2) => {
  let firstIndex
  let secondIndex
  let ans
  for (let i = 0; i < array.length; i++) {
    if (array[i] === w1 || array[i] === w2) {
      if (array[i] === w1) {
        firstIndex = i + 1
        console.log("first", firstIndex)
      }
      if (array[i] === w2) {
        secondIndex = i + 1
        console.log("Second", secondIndex)
      }
    }

    if (firstIndex !== undefined && secondIndex !== undefined) {
      ans = `start ${firstIndex} and end ${secondIndex}`
      ans = secondIndex - firstIndex
      return ans
    }
  }

  return "No word Found in the String"
}

console.log(MinimumDistance(arr, word1, word2))
