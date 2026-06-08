let results = ["pass", "fail", "pass", "error", "pass"]

console.log(results.indexOf("fail"))
console.log(results.indexOf("skip"))
console.log(results.lastIndexOf("pass"))
console.log(results.includes("Pass"))
console.log(results.includes("Hi"))
let nums = [10, 20, 30, 50]
console.log(nums.find(x => x > 20))//30
console.log(nums.findLastIndex(x => x > 20))//3
console.log(nums.findLast(x => x > 20))//50
console.log(nums.findIndex(x => x > 20))//2
