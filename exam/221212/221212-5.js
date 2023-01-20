// sort해서 제일 큰거 두개
function solution(numbers) {
  numbers.sort((a, b) => b - a);
  return numbers[0] * numbers[1];
}

// 2중 for문
function solution(numbers) {
  var answer = 0;
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] * numbers[j] > answer) answer = numbers[i] * numbers[j];
    }
  }
  return answer;
}

