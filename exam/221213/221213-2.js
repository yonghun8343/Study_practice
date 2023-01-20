// for문으로
function solution(array) {
  let answer = [0, 0];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > answer[0]) {
      answer = [array[i], i];
    }
  }
  return answer;
}

// map으로
function solution(array) {
  let answer = [0, 0];
  array.map((value, index) => {
    if (value > answer[0]) {
      answer = [value, index];
    }
  });
  return answer;
}
