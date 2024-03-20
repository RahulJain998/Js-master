console.log("first");

const N = 6
const X = 16

const arr = [1,4,45,6,10,8];


const FindNumber = (arr, N, X) => {
    let map = new Map();

    let comp;
    for(let i=0;i<N;i++){
        map.set(arr[i], arr[i]);
        comp = X - arr[i];

    }

    return map


}


console.log(FindNumber(arr, N, X));
