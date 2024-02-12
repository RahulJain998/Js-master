const arr = [1, 2, 3, 4, 5]
const d = 2;
const len = arr.length

const rotateArray = (arr, d, n) => {

    let elem;
    for(let i=n-1;i > (n - d - 1);i--){
        elem = arr.pop();
        console.log(elem);
        console.log("unshift", arr.unshift(elem));
    }

  return arr
}


console.log(rotateArray(arr, d, len));
