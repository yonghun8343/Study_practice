// 1번 문제 정답
function solution(number) {
  let answer = 0;
  for (let i = 0; i < number.length - 2; i += 1) {
    for (let j = i + 1; j < number.length - 1; j += 1) {
      for (let l = j + 1; l < number.length; l += 1) {
        if (number[i] + number[j] + number[l] === 0) {
          answer += 1;
        }
      }
    }
  }
  return answer;
}

// 2번 문제 정답
// 일반 적으로는 이렇게 풀었을 것이다.
function solution(n, k) {
  return 12000 * n + 2000 * k - (n / 10) * 2000;
}
// 하지만 이렇게 풀면 정답이 아니다!
// k = 3이고
// n이 28인분이라고 하자 그러면 3-2.8로 0.2*2000이 된다.
// 그러므로 제대로 된 결과값이 나오지 않음.

// 조금 더 짧게
function solution(n, k) {
  return 12000 * n + 2000 * Math.ceil(k - n / 10);
}
