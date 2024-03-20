let str= "cafmmfac";

const getPalindrome = (S) => {

    let left = 0;
    let right = S.length -1;

    let len = parseInt(S.length/2)
    while(left < len){
        if(S.charAt(left) === S.charAt(right)){
            left++;
            right--;
            continue
        }
        else{
            return 0
        }
    }

    return 1

}


console.log(getPalindrome(str));