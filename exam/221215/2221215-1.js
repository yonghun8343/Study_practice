// A를 B로 문제 풀이
// 출제 안함
function solution(before, after) {
  let answer = 1;
  const arr = before.split("").concat(after.split(""));
  arr.sort();
  for (let i = 0; i < arr.length; i += 2) {
    if (arr[i] !== arr[i + 1]) {
      answer = 0;
    }
  }

  return answer;
}

function solution(before, after) {
  return before.split("").sort().join("") === after.split("").sort().join("")
    ? 1
    : 0;
}

// 주사위 개수
function solution(box, n) {
  return (
    Math.floor(box[0] / n) * Math.floor(box[1] / n) * Math.floor(box[2] / n)
  );
}

function solution(box, n) {
  var answer = 1;
  const arr = box.map((value) => Math.floor(value / n)); //  [3, 2, 2];

  return arr[0] * arr[1] * arr[2];
}

const a = box.map((a) => a * 2);
