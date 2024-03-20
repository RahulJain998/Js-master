const arr = [1,2,3,4];
let k = 4

let hashedMap = {};
let counter = 0;

for(let num of arr) {
    if(hashedMap[num] === undefined) {
        hashedMap[num] = 1;
    } else {
        hashedMap[num]++;
    }
}

 
for(let num of arr) {
    let temp = k - num;
    if(hashedMap[temp] !== undefined) {
        counter += hashedMap[temp];
    }
    
    if(temp === num) {
        counter--
    }
}

console.log(hashedMap, counter);