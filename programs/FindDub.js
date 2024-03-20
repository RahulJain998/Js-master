const nums = [2,3,3,2];
const val = 3;



// const removeDub = (nums, val) => {
//     let c= 0;
//     for(let i=0;i<nums.length;i++){
//        if(nums[i] !== val){
//         nums[c++] = nums[i];

//        }

//     }
//     return [c, nums];
// }

const removeDub = (nums, val) => {
    let newArr= [];
    for(let i=0;i<nums.length;i++){
       if(nums[i] === val){
        continue;
       }
       else{
        newArr.push(nums[i])
       }

    }
    return newArr.length
}

console.log(removeDub(nums, val));

