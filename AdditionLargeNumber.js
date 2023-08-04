const num1 = 1218736123872
const num2 = 58732613872187

const SumLargeNumber = (n1, n2) => {
  let sum = 0

  let num1 = BigInt(n1)
  let num2 = BigInt(n2)

  sum = num1 + num2

  return sum
}

console.log(SumLargeNumber(num1, num2))
