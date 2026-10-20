function calculateResult(scores) {
  let total = 0;
  for (const score of scores) {
    total += score;
  }
  const average = total / scores.length;
  return { average, result: average >= 70 ? "Pass" : "Fail" };
}

const scores = [85, 72, 90];
const { average, result } = calculateResult(scores);

console.log("Scores:", scores.join(", "));
console.log("Average:", average.toFixed(2));
console.log("Result:", result);