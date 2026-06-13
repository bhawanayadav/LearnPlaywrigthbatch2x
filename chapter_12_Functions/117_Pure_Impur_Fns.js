function calculatePassRate(total, passed) {
    return ((passed / total) * 100).toFixed(2);
}
console.log(calculatePassRate(10, 7));
console.log(calculatePassRate(20, 7));

function ispassing(score) {
    return score >= threshold;
}
let threshold = 70;
console.log(ispassing(threshold));
threshold = 20;
console.log(ispassing(threshold));











