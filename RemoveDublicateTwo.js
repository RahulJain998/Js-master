const array = [1, 1, 3, 3, 1, 3, 1, 1, 3, 4, 1, 3, 10]
const newArray = []

const removeDublicateTwo = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      console.log("j is", j, "i is ", i)
      if (arr[i] === arr[j]) {
        let variable = arr.splice(j, 1)
      }
      console.log("new array", arr)
    }
  }
  return arr
}

console.log(removeDublicateTwo(array, newArray))

