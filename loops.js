// const arr = [2, 6, 10, 30, 20, 15]
// const obj = {
//   name: "Rahul Jain",
//   city: "Meerut",
// }

// const map = new Map()

// map.set("name", "Rahul jain")

// for (let data of Object.entries(obj)) {
//   console.log(data)
// }

// for (const i in obj) {
//   console.log(i)
// }
                                                            
// const arr = [10, 4, 8, 3]

// const leftSumRightSum = (nums) => {
//     const len = nums.length;
//     const leftArr = [];
//     const rightArr = [];
//     let leftSum = 0;
//     let rightSum = 0;
//     leftArr.push(0);
//     let result = 0;
//     let resultArr = [];

//     for(let i=0; i<len -1;i++){
//          leftSum += nums[i];
//         leftArr.push(leftSum)
//     }
//     console.log(nums);
//     for(let i=len-1; i>0;i--){
//         rightSum += nums[i];
//         console.log(rightSum);
//         rightArr.push(rightSum)
//     }
//     rightArr.reverse()
//     rightArr.push(0)

//     for(let i=0;i<len;i++){
//         result = Math.abs(leftArr[i] - rightArr[i]);
//         resultArr.push(result)
//     }

//     return resultArr
// }

// console.log(leftSumRightSum(arr))

// const words = ["leet","code"]
// const x = "e"

// const containingWordsChar = (words, x, index) => {
//    const wordsData = words.map((item) => {
//         let value = item.includes(x)
//         return value
//     })

//     return wordsData
// }

// console.log(containingWordsChar(words, x));

// const arr = [1, 2, 3, 4]

// const set = new Set(arr);

// console.log(set.size);
// set.length

// const getDubilicate = (nums) => {
// }

// console.log(getDubilicate(arr))

// const arr = [1, 2, 34, 4]

// const data = arr.join('+');

// console.log(data);

// let charSum = 0;
// for(let i=0;i<data.length;i++){
//     if(data.charAt(i) === '+' ){
//         continue;
//     }
//     else{
//     charSum += Number(data.charAt(i))
//     }
//     console.log(charSum);
// }

// const nums =[2,7,1,19,18,3]

// const numsOfData = (nums) => {
//   let len = nums.length
//   let result = 0
//   for (let i = 0; i < len; i++) {
//     // console.log(i,(len % nums[i]) === 0 );
//     if ((len % nums[i]) === 0) {
//       result += nums[i] ** 2
//       console.log(result, i);
//     }
//   }
//   return result
// }

// console.log(numsOfData(nums));



// const digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]

// const plusOne = (digits) => {
//     const str = digits.join('');
//     let num =  Number(str) + 1;
//     let newArr = String(num)
//     const result = [...newArr];
//     return result;
// }

// console.log(plusOne(digits));

// const seats = [1,2,4];

// const minimumMoves = (seats) => {
//     return totallSeats = seats.reduce((data, current) => current + data);
    
// }

// console.log(minimumMoves(seats))


// const arr = [1,2,3];

// console.log(typeof arr.length, arr.length);


// console.log(data);

// const newArr = arr.join('.')
// console.log(typeof newArr);


// const str =  arr.toString()


// console.log(str.charAt(4));


const arr = ["User", "Admin", "account"];
const arr2 = [ "Admin", "account"];


const role = arr.includes(...arr2)

if(role){
    console.log("Admin data");
}

console.log(role);












