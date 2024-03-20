const data = [4, 6, 3, 5, 9, 20, 16]

// let result = data
//   .map((value) => {
//     if (value > 10) {
//       return value
//     }
//   })
//   .filter((value) => value !== undefined)

// console.log(result)

const extraCandies = (arr) => {
  return arr.map(item => item + 15 > Math.max(...arr));
}

console.log(extraCandies(data));



