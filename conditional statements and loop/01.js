let x = prompt("Enter x Number:")
let y = prompt("Enter y Number:")
let ans = document.getElementsByTagName('h1')[0]
if (x > y) {
  ans.innerHTML = `x = ${x} is greater than y = ${y}`
} else if (x < y) {
  ans.innerHTML = `y = ${y} is greater than x = ${x}`
} else {
  ans.innerHTML = `x is equal to y, which is ${y}`
}
