const arr = [12, 35, 1, 10, 34, 1]

const obj = [
  { id: 1, quantity: 2, price: 10, itemName: "samoosa" },
  { id: 2, quantity: 4, price: 20, itemName: "jalebi" },
  { id: 3, quantity: 3, price: 10, itemName: "samoosa" },
  { id: 4, quantity: 2, price: 20, itemName: "jalebi" },
  { id: 5, quantity: 2, price: 30, itemName: "pizza" },
]


const getAllPrice = (obj) => {
    const map = new Map()
    let total = 0;
    for(let i=0;i<obj.length;i++){
        if(map.has(obj[i].itemName)){
            let data = obj[i].price * obj[i].quantity + map.get(obj[i].itemName) 
            console.log(data);
            map.set(obj[i].itemName, data)
        }
        else{
            map.set(obj[i].itemName, obj[i].price * obj[i].quantity)
        }
    }

    for(let [key, values] of map){
        console.log(key, values);
        total += values 
    }


    return [map, total]

}

console.log(getAllPrice(obj));
