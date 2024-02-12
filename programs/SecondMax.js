// const arr = [12, 35, 1, 10, 34, 1]
// const arr = [23,23,23,23,23]
const arr = [
     61, 30, 28, 47, 42, 25, 41, 56, 27, 45, 44, 34, 46, 35, 58, 36, 60, 29, 53,
       55, 32, 31, 33, 59, 50, 51, 52, 37, 39, 38, 43, 49, 54, 57, 40, 26, 48,
     ]
const len = arr.length

const secondMax = (arr, len) => {

    let second = 0;
    let max = arr[0];
    for(let  i=0;i<len;i++){
        if(arr[i] > max ){
            max = arr[i];
        }
    }

    for(let i=0;i<len;i++){
        if(arr[i] === max){
            continue
        }
        if(second < arr[i]){
            second = arr[i]
        }
    }

    if(second === 0){
        return -1
    }
   
   return  second
}

console.log(secondMax(arr, len))
