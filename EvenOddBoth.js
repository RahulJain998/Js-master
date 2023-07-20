const arr = [1,4,5,7,41,56,876,98];
const len = arr.length;

const EvenOddNumber = (arr, len) => {
    const odd = [];
    const even = [];
    for(let i=0;i<len;i++){
        if(arr[i]%2 === 1){
            odd.push(arr[i])
        }
    }

    for(let i=0;i<len;i++){
        if(arr[i]%2 === 0){
            even.push(arr[i])
        }
    }
    return {odd, even};
}


console.log(EvenOddNumber(arr, len))