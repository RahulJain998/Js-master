// const arr = [1,3,2,4];
const arr = [2,5,7,3,2,1,8,9]
const len = arr.length

const nextLargest = (arr, len) => {
    let newArr = []
    let max = arr[len -1]
    console.log("max is", max);
    newArr.push(-1)
    for(let i=len-1;i>0;i--){
        console.log(i, arr[i], arr[i-1], max);
        if(arr[i-1] > arr[i]){
            newArr.push(max)
            max = arr[i-1];
        }   
        else{
            newArr.push(max);
        }

    }

    return newArr;
}

console.log(nextLargest(arr, len));
