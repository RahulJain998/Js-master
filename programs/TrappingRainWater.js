const water = [4, 2, 0, 3, 2, 5]
const water2 = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]

const TrappingRainWater = (arr) => {
  const right = []
  const left = []
  const left2 = []
  const minArray = []
  const resultArray = []
  let result = 0
  let rightMax = arr[0]
  let leftMax = arr[arr.length - 1]
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= rightMax) {
      right.push(arr[i])
      rightMax = arr[i]
    } else {
      right.push(rightMax)
    }
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] >= leftMax) {
      left.push(arr[i])
      leftMax = arr[i]
    } else {
      left.push(leftMax)
    }
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    const valueAtIndex = left[i]
    left2.push(valueAtIndex)
  }

  for (let i = 0; i < arr.length; i++) {
    if (left2[i] >= right[i]) {
      minArray.push(right[i])
    } else {
      minArray.push(left2[i])
    }
  }

  for (let i = 0; i < arr.length; i++) {
    let min = minArray[i] - arr[i]
    resultArray.push(min)
  }

  for (let i = 0; i < resultArray.length; i++) {
    result = result + resultArray[i]
  }

  return result
}

console.log(TrappingRainWater(water))
console.log(TrappingRainWater(water2))
