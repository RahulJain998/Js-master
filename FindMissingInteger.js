const arr = [1,2,3,4,5,6,7,8,9,10,11];


const FindMisssingNumber = (array) =>{
    if(array[0] != 1){
        return `missing Number is ${1}`;
    }
    for(let i=0; i<array.length-1;i++){
        if(array[i] != array[i+1] -1){
            return `Missing Number is ${array[i]+1}`
        }
    }
    return `No Missing Number`
}


console.log(FindMisssingNumber(arr))





