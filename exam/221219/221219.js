// 외계행성의 나이
function solution(age) {
  age
    .toString()
    .split("")
    .map((v) => String.fromCharCode(v.charCodeAt(0) + 49))
    .join("");
  return answer;
}

function solution(age) {
  var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
  var answer = "";
  age = age.toString();

  for (let i = 0; i < age.length; i++) {
    answer += alphabet[age[i]];
  }
  return answer;
}

// 한 번만 등장한 문자
function solution(s) {
  for (let i = 0; i < s.length; i++) {
    var regexp = new RegExp(`${s[i]}`, "g");
    if (s.match(regexp).length > 1) {
      s = s.replaceAll(regexp, "");
      i = 0;
    }
  }
  return s.split("").sort().join("");
}

function solution(s) {
  return [...s]
    .filter((v) => s.match(new regexp(c, g) === 1))
    .sort()
    .join("");
}

solution("abcabcadc");
