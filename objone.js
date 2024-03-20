const obj1 = [
    {
        id: 1,
        name: "A",
        price: 10,
    },
    {
        id: 2,
        name: "A",
        price: 20,
    },
    {
        id: 3,
        name: "B",
        price: 40,
    },
]

const objData = {};

for(let i=0;i<obj1.length;i++){
        let sum = 0;
        let data = obj1[i].name;
        console.log(data);
        for(let j=0;j<obj1.length;j++){
            if(obj1[j].name === data){
            sum = sum + obj1[j].price;
            }
        }
        objData[data] =  sum;
}

console.log(objData);
