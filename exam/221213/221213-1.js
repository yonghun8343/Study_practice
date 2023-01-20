// for문으로 풀이
function solution(cipher, code) {
  let answer = "";
  for (let i = 0; i < cipher.length; i += 1) {
    if (i % code === code - 1) {
      answer += cipher[i];
    }
  }
  return answer;
}
function solution(cipher, code) {
  let answer = "";
  for (let i = code-1; i < cipher.length; i += code) {
    answer += cipher[i];
  }
  return answer;
}

// filter으로 풀이
function solution(cipher, code) {
  return cipher
    .split("")
    .filter((_, index) => index % code === code - 1)
    .join("");
}
