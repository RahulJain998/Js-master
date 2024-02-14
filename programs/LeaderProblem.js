const arr = [2,35,7,12,9,10];
const arr2 = [16, 17, 4, 3, 5, 2]


const LeaderProblem = (array) =>{
    let leader = [];
    let max =  array[array.length-1];
    for(let i=array.length; i>=0;i--){
        if(array[i] >= max){
            leader.push(array[i]);
            max = array[i];
        }
    }
    return leader.reverse();
}


console.log(LeaderProblem(arr))