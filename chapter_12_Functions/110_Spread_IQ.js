function add(a, b, c) {
    return a + b + c;
}
let num = [1, 2, 3, 4, 5];
console.log(add(...num));

// let responseCode = [200, 300, 809];
// function hasError(...codes) {
//     return codes.some(codes => codes > 300);
// }
// console.log(hasError(...responseCode))
// let responseCode = [200, 300, 809];
// function hasError(...codes) {
//     return codes.every(codes => codes > 300);
// }
// console.log(hasError(...responseCode))
