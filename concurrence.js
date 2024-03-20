const nums = [1,2,1]

var getConcatenation = function(nums) {
    let result = [...nums, ...nums];
    return result
};

console.log(getConcatenation(nums));
