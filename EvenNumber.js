const arr = [1,4,5,7,41,56,876,98];
const len = arr.length;

const EvenNumber = (arr, len) => {
    const even = [];
    for(let i=0;i<len;i++){
        if(arr[i]%2 ===0){
            even.push(arr[i])
        }
    }
    return even;
}


console.log(EvenNumber(arr, len))