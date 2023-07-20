const A = [1, 4, 7]
const B = [2, 1, 4]

const MinimizeSum = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    let min = Math.min(...A)
    let max = Math.max(...B)

    console.log(min)
    console.log(max)
  }
}

console.log(MinimizeSum(A, B))
