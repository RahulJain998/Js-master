const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]

const removeDublicate = (nums) => {
  let arr = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i + 1]) {
      arr.push(nums[i])
    }
  }
  return arr
}


console.log(removeDublicate(nums))
