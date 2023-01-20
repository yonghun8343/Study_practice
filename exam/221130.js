function first(v1, v2, v3) {
  console.log(v1, v3);
  v2(v1 + v3);
}

function second(v) {
  console.log(v * v);
}

first(1, second, 2);

function first(v1, v2) {
  console.log(v1, v2);
  second(v1 + v3);
}

function second(v) {
  console.log(v * v);
}

first(1, 2);

function first(v1, v2, callback) {
  console.log(v1, v2);
  callback(v1 + v3);
}

function second(v) {
  console.log(v * v);
}

first(1, 2);

// 1번 문제 정답
function add(v1, v2) {
  console.log("찍었습니다!");
}

add(1, 2);
add(1, 2);
add(1, 2);
add(1, 2);
add(1, 2);

// 혹은
function log() {
  console.log("찍었습니다!");
}

log();
log();
log();
log();
log();

// 2번 문제 정답
function mul(num1, num2) {
  return num1 * num2;
}

// 3번 문제 정답
1 2
9

// 4번 문제 정답
1 2
9

// 5번 문제 정답
1 2
9
9

// 6번 문제 정답
1 2
9

// 7번 문제 정답
1 2
1

// 8번 문제 정답
1
1

// 9번 문제 정답
function solution(money) {
  var answer = [];
  const cost = 5500;
  answer[0] = Math.floor(money / cost);
  answer[1] = money % cost;
  return answer;
}
