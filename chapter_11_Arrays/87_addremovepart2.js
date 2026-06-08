let arr = [1, 2, 3]
arr.push(4, 5, 6)
console.log(arr);
// arr.splice(2, 1);
// console.log(arr)
arr.splice(2, 0, 99)
console.log(arr)
arr.splice(2, 1, 89)
console.log(arr)
arr.splice(1, 2, 30, 40)
console.log(arr)