console.log("First")

setTimeout(() => {
  console.log("Second")
}, 0)

new Promise(function (myResolve, myReject) {
  myResolve("Promise")
}).then(function (value) {
  console.log(value)
})

console.log("Third")
