const arr = [1, 4, 6, 8, 10, 14, 18, 30, 36, 45, 50]
const num = 9

const BinarySearch = (nums, target) => {
    let left = 0
     let right = nums.length - 1
     let mid = parseInt((left + right) / 2)
   
     while (left <= right) {
       if (nums[mid] === target) {
         return mid
       } else if (nums[mid] < target) {
         left = mid + 1
       } else {
         right = mid - 1
       }
       mid = parseInt((left + right) / 2)
     }
     return -1
}

const data = BinarySearch(arr, num)
console.log(data)
