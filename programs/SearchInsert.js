var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length -1;
    let mid = parseInt((left + right)/2);

    while (left <= right) {
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
    mid = parseInt((left + right) / 2)
  }

  return left;


};