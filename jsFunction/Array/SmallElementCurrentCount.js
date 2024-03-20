// Product of Two Element

const nums = [8, 1, 2, 2, 3]
const n = nums.length

const manySmallerNumbers = (nums, n) => {
  const result = []
  let count
  for (let i = 0; i < n; i++) {
    count = 0
    for (let j = 0; j < n; j++) {
      if (nums[i] > nums[j]) {
        count++
      }
    }
    result.push(count)
  }

  return result
}

console.log(manySmallerNumbers(nums, n))

