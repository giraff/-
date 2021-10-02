const fs = require("fs");

const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin", "utf-8").toString()
    : `5`
)
  .trim()
  .split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let t = parseInt(input());

let array = [];

for (let i = 0; i < t; i++) {
  array[i] = "";
  for (let j = i; j >= 0; j--) {
    array[i] += `*`;
  }
}

console.log(array.join("\n"));

// let max = Number.MIN_SAFE_INTEGER,
//   min = Number.MAX_SAFE_INTEGER;

// for (let elem of array) {
//   let number = Number(elem);
//   if (max < number) max = number;
//   if (min > number) min = number;
// }

// console.log(`${min} ${max}`);
