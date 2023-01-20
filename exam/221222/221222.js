function solution(array) {
  // array 가 [7, 77, 17] 일 때
  const newArray1 = array.join(""); // 77717
  const newArray2 = newArray1.split(""); // ["7", "7", "7", "1", "7"]
  const newArray3 = newArray2.filter((v2) => v2 === "7"); // ["7", "7", "7", "7"]
  return newArray3.length; // 4
}

function solution(array) {
  // array 가 [7, 77, 17] 일 때
  const newArray1 = array.join(""); // 77717
  const newArray2 = newArray1.split(""); // ["7", "7", "7", "1", "7"]
  const answer = 0;
  newArray2.forEach((v) => {
    if (v === "7") {
      answer = answer + 1;
    }
  });
  return answer; // 4
}

function solution(array) {
  return array
    .join("")
    .split("")
    .filter((v2) => v2 === "7").length;
}
