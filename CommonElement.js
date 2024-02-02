const A = [1, 5, 10, 20, 40, 80]
const B = [6, 7, 20, 80, 100]
const C = [3, 4, 15, 20, 30, 70, 80, 120]
let n1 = A.length
let n2 = B.length
let n3 = C.length

const commonElement = (A, B, C, n1, n2, n3) => {
    let len;
    let i,j,k = 0;
    if(n1 <= n2 && n1 <= n3){
        len = n1;
    }
    else if (n2 <= n3){
        len = n2
    }
    else{
        len = n3
    }

    while(i > len){
         if(A[i] !== B[j]){
            
         }
    }



  return len
}

console.log(commonElement(A, B, C, n1, n2, n3))
