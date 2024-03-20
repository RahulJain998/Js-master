const arr = [0,0,0,1,1];
const len = arr.length

const transitionPoint = (arr, n) =>{
    let left = 0;
    let right = n -1;
    let mid = parseInt((left+right)/2);

    while (left <= right) {
        if (arr[mid] === 1 && arr[mid-1] === 0 && arr[mid+1] === 1) {
          return mid
        } else if (arr[mid] === 0) {
          left = mid + 1
        } else {
          right = mid - 1
        }
        mid = parseInt((left + right) / 2)
      }
      return -1

}

console.log(transitionPoint(arr, len));






