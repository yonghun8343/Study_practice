function solution(my_str, n) {
  return Array(Math.ceil(my_str.length / n))
    .fill("")
    .map((_, idx) => my_str.slice(n * idx, n * (idx + 1)));
}

function solution(my_str, n) {
  var answer = [];
  var temp = "";
  var count = 1;
  for (let i = 0; i < my_str.length; i++) {
    temp += my_str[i];
    if (i === n * count - 1 || i === my_str.length - 1) {
      answer.push(temp);
      temp = "";
      count++;
    }
  }
  return answer;
}
