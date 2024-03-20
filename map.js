const map = new Map([
  ["firstName", "Luke"],
  ["lastName", "Skywalker"],
  ["occupation", "Jedi Knight"],
])
const obj = {
  name: "Rahul",
  city: "noida",
  getName: function () {
    return this.name
  },
}

map.set("name", "Rahul")
// const data = map.set(obj);

console.log(map)

console.log(obj.getName())

console.log(map.keys())
console.log(map.values())
let entrydata = map.entries()

console.log("entry data", entrydata);


console.log(map.get('name'));
console.log(map.has('name'));