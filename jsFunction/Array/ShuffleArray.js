// shuffle array
const nums = [2, 5, 1, 3, 4, 7]
const n = 3

const shuffleArray = (nums, n) => {
  const len = nums.length
  const result = []
  let i = 0
  let j = n
  while (j < len) {
    result.push(nums[i])
    result.push(nums[j])
    i++;
    j++;
  }
  return result
}

console.log(shuffleArray(nums, n))