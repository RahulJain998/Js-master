const candies = [2,3,5,1,3]
const extraCandies = 3

let data = 5>3;
console.log(data);

const extraCandiesFun = (candies, extraCandies) => {
    // let max = candies[0];
    // let result = [];
    // let extra = 0;
    // let len = candies.length;
    // for(let i=0;i<len;i++){
    //     if(candies[i] > max){
    //         max = candies[i]
    //     }
    // }

    // for(let i=0;i<len;i++){
    //     let data = (candies[i] + extraCandies ) >= max;
    //     result.push(data);
    // }

    // return result
    
    console.log("Max value is", Math.max(...data));
    return candies.map(ele=> ele+extraCandies>=Math.max(...candies))

}


console.log(extraCandiesFun(candies, extraCandies));