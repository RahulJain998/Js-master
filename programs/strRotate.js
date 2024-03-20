let data = "data"
var fun = "Funny"

function dataFun(){
    
    console.log("outer", fun)

    function getData() {
        console.log("Inner", fun);
    }
    getData()
} 

dataFun()

console.log("outer function", fun);


console.log(data);


