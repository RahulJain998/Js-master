const arr = [1,4,5,7,41,56,876,98];
const len = arr.length;

const OddNumber = (arr, len) => {
    const odd = [];
    for(let i=0;i<len;i++){
        if(arr[i]%2 === 1){
            odd.push(arr[i])
        }
    }
    return odd;
}


console.log(OddNumber(arr, len))