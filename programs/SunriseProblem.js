const building = [3, 4, 8, 2, 4, 9, 2, 13, 15, 5, 9, 10]

const SunriseProblem = (array) => {
  count = 0
  let max = array[0]
  for (let i = 0; i < array.length; i++) {
    if (max <= array[i]) {
      count = count + 1
      max = array[i]
    }
  }
  return count
}

console.log(SunriseProblem(building))
