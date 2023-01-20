function solution(emergency) {
  const answer = [...emergency]; // 그냥 const answer = emergency하면 얕은 복사
  // slice나 구조 분해 할당
  emergency.sort((a, b) => b - a);
  for (let i = 0; i < answer.length; i += 1) {
    for (let j = 0; j < emergency.length; j += 1) { 
      if (answer[i] === emergency[j]) {
        answer[i] = j + 1;
        break; // answer의 값이 변경이 되었으므로 한번 찾으면 break.
      }
    }
  }
  return answer;
}

function solution(emergency) {
  let sorted = [...emgergency].sort((a, b) => b - a);
  return emergency.map((v) => sorted.indexOf(v) + 1);
}
