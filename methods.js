const age = [3,9,2,4,6];


function checkAge(age){
    return age > 18
}

// let result = age.some(checkAge);

let result = age.some((age) => age > 18 );

console.log(result);