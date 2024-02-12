const data = 8612455638334947271564617487839781

const nearsetTen = (Num) => {
  let floorValue = Num - (Num % 10)
  let ceilValue = floorValue + 10
  let midValue = parseInt((floorValue + ceilValue) / 2)

  if (Num > midValue) {
    return ceilValue
  }

  return floorValue
}

console.log(nearsetTen(data))
