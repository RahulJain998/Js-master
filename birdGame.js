const arr = [2, 1, 3, 5, 0, 1, 4]
const N = 7
const M = 7

const BirdEatFruit = (arr, n, m) => {
  let max_sum = 0
  for (let i = 0; i < m; i++) {
    max_sum += arr[i]
  }
  let birdEat = max_sum
  let birdFruits = max_sum
  for (let i = m; i < N; i++) {
    birdFruits = birdFruits - arr[i - m] + arr[i]
    if (birdFruits > birdEat) {
      birdEat = birdFruits
    }
  }
  return birdEat
}

console.log(BirdEatFruit(arr, N, M))

// main-toclist li
