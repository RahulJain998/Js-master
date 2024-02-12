const A = [1, 5, 10, 20, 40, 80]
const B = [6, 7, 20, 80, 100]
const C = [3, 4, 15, 20, 30, 70, 80, 120]
let n1 = A.length
let n2 = B.length
let n3 = C.length

const commonElement = (A, B, C, n1, n2, n3) => {
    let len;
    let i = 0, j=0, k=0;
    if(n1 <= n2 && n1 <= n3){
        len = n1;
    }
    else if (n2 <= n3){
        len = n2
    }
    else{
        len = n3
    }
    let common = [];
    console.log(len, i,j,k);
    while(len > i || len > j || len > k){
        console.log(i,j, k, common);
         if(A[i] === B[j] && B[j] === C[k]){
            common.push(A[i]);
            i++;
            j++;
            k++;
         }
         else if(A[i] > B[j] && A[i] > C[k]){
            j++;
            k++;
         }
         else if(B[j] > A[i] && B[j] > C[k]){
            i++;
            k++;
         }
         else{
            i++;
            j++;
         }
    }

    if(common.length === 0){
        return -1;
    }

    return common;

}

console.log(commonElement(A, B, C, n1, n2, n3))

LockManager

