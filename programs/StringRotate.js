
const a = "daxjheq"
const b = "eqdaxjh"

const getStringEquals = (str1, str2) => {
  let len2
  let len3
  for (let i = 0; i < str1.length; i++) {
    len2 = parseInt((str2.length - 2 + i) % str2.length)
    len3 = parseInt((2 + i) % str2.length)
    if (str1.charAt(i) === str2.charAt(len2)) {
      continue
    } else if (str1.charAt(i) === str2.charAt(len3)) {
      continue
    } else {
      return "Not Equal"
    }
  }

  return "Equal"
}

console.log(getStringEquals(a, b))
