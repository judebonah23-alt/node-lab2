const scores = [85, 72, 90];

let total = 0;
for (const score of scores) {
  total += score;
}

const average = total / scores.length;
const result = average >= 70 ? "Pass" : "Fail";

console.log("Scores:", scores.join(", "));
console.log("Average:", average.toFixed(2));
console.log("Result:", result);