const arr = [1,3,2,4];
const len = arr.length

const nextLargest = (arr, len) => {
    let newArr = []
    let max = arr[0]
    for(let i=1;i<len;i++){
        if(max < arr[i]){
            max = arr[i];
            newArr.push(arr[i])
        }
        else{
            newArr.push(arr[i])
        }
    }
    newArr.push(-1)

    return newArr;
}

console.log(nextLargest(arr, len));
